import mongoose, { Document, Schema, Types } from 'mongoose';
import { IUser } from './user.model'; // Assuming this exists
import { ICourse } from './course.model';

interface IChapterProgress {
  videoUrl: string; // Identifier for the chapter (from courseData)
  completed: boolean;
  completedAt?: Date;
}

interface IUserProgress extends Document {
  user: Types.ObjectId | IUser;
  course: Types.ObjectId | ICourse;
  chapters: IChapterProgress[];
  lastUpdated: Date;
}

const chapterProgressSchema = new Schema<IChapterProgress>({
  videoUrl: { type: String, required: true },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date },
});

const userProgressSchema = new Schema<IUserProgress>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  chapters: [chapterProgressSchema],
  lastUpdated: { type: Date, default: Date.now },
}, { timestamps: true });

const UserProgressModel = mongoose.model<IUserProgress>('UserProgress', userProgressSchema);
export default UserProgressModel;