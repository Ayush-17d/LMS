import ErrorHandler from "../utils/ErrorHandler";
import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "./../middleware/catchAsyncErrors";
import CourseModel from '../models/course.model'; // Adjust path
import UserProgressModel from '../models/useProgress.model'; // Adjust path
import {redis} from '../utils/redis'; // Adjust path to your Redis config



// Interfaces for response structure
interface ChapterProgress {
  title: string;
  videoUrl: string;
  videoLength: number;
  completed: boolean;
  completedAt: Date | null;
}

interface SectionProgress {
  sectionName: string;
  totalChapters: number;
  completedChapters: number;
  completionPercentage: number;
  chapters: ChapterProgress[];
}

interface DashboardResponse {
  courseName: string;
  description: string;
  totalChapters: number;
  completedChapters: number;
  progressPercentage: string;
  timeSpent: number;
  sections: SectionProgress[];
  lastUpdated: Date | null;
}

interface SectionProgressTracker {
  total: number;
  completed: number;
  chapters: ChapterProgress[];
}

// Update User Progress Controller
export const updateUserProgress = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId, videoUrl } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        return next(new ErrorHandler('User not authenticated', 401));
      }
      if (!courseId || !videoUrl) {
        return next(new ErrorHandler('Course ID and video URL are required', 400));
      }

      const course = await CourseModel.findById(courseId);
      if (!course) {
        return next(new ErrorHandler('Course not found', 404));
      }
      const chapterExists = course.courseData.some((data) => data.videoUrl === videoUrl);
      if (!chapterExists) {
        return next(new ErrorHandler('Chapter not found in this course', 400));
      }

      let userProgress = await UserProgressModel.findOne({ user: userId, course: courseId });
      if (!userProgress) {
        userProgress = new UserProgressModel({
          user: userId,
          course: courseId,
          chapters: [{ videoUrl, completed: true, completedAt: new Date() }],
        });
      } else {
        const chapterIndex = userProgress.chapters.findIndex((ch) => ch.videoUrl === videoUrl);
        if (chapterIndex === -1) {
          userProgress.chapters.push({ videoUrl, completed: true, completedAt: new Date() });
        } else if (!userProgress.chapters[chapterIndex].completed) {
          userProgress.chapters[chapterIndex].completed = true;
          userProgress.chapters[chapterIndex].completedAt = new Date();
        }
        userProgress.lastUpdated = new Date();
      }

      await userProgress.save();

      // Invalidate cache for this course's dashboard
      await redis.del(`dashboard:${courseId}:${userId}`);

      res.status(200).json({
        success: true,
        message: 'Progress updated successfully',
        chapters: userProgress.chapters,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

// Get User Progress Dashboard Controller
export const getUserProgressDashboard = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId } = req.params;
      const userId = req.user?.id;

      if (!userId) {
        return next(new ErrorHandler('User not authenticated', 401));
      }
      if (!courseId) {
        return next(new ErrorHandler('Course ID is required', 400));
      }

      // Check Redis cache
      const cacheKey = `dashboard:${courseId}:${userId}`;
      const cachedData = await redis.get(cacheKey);
      if (cachedData) {
        const dashboard = JSON.parse(cachedData);
        return res.status(200).json({
          success: true,
          ...dashboard,
        });
      }

      const course = await CourseModel.findById(courseId).select('name description courseData');
      if (!course) {
        return next(new ErrorHandler('Course not found', 404));
      }

      const userProgress = await UserProgressModel.findOne({ user: userId, course: courseId });
      const completedChapters = userProgress ? userProgress.chapters.filter((ch) => ch.completed) : [];

      const totalChapters = course.courseData.length;
      const completedCount = completedChapters.length;
      const progressPercentage = totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;

      const sectionProgress: { [key: string]: SectionProgressTracker } = {};
      course.courseData.forEach((chapter) => {
        const section = chapter.videoSection;
        if (!sectionProgress[section]) {
          sectionProgress[section] = { total: 0, completed: 0, chapters: [] };
        }
        const isCompleted = completedChapters.some((ch) => ch.videoUrl === chapter.videoUrl);
        sectionProgress[section].total += 1;
        if (isCompleted) sectionProgress[section].completed += 1;
        sectionProgress[section].chapters.push({
          title: chapter.title,
          videoUrl: chapter.videoUrl,
          videoLength: chapter.videoLength,
          completed: isCompleted,
          completedAt: isCompleted
            ? completedChapters.find((ch) => ch.videoUrl === chapter.videoUrl)?.completedAt || null
            : null,
        });
      });

      const sections: SectionProgress[] = Object.keys(sectionProgress).map((section) => ({
        sectionName: section,
        totalChapters: sectionProgress[section].total,
        completedChapters: sectionProgress[section].completed,
        completionPercentage: (sectionProgress[section].completed / sectionProgress[section].total) * 100,
        chapters: sectionProgress[section].chapters,
      }));

      const timeSpent = course.courseData.reduce((sum, chapter) => {
        if (completedChapters.some((ch) => ch.videoUrl === chapter.videoUrl)) {
          return sum + (chapter.videoLength || 0);
        }
        return sum;
      }, 0);

      const dashboardData: DashboardResponse = {
        courseName: course.name,
        description: course.description,
        totalChapters,
        completedChapters: completedCount,
        progressPercentage: progressPercentage.toFixed(2),
        timeSpent,
        sections,
        lastUpdated: userProgress ? userProgress.lastUpdated : null,
      };

      // Cache the dashboard data (7 days expiration, matching your other controllers)
      await redis.set(cacheKey, JSON.stringify(dashboardData), 'EX', 604800);

      res.status(200).json({
        success: true,
        ...dashboardData,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);