// import React, { useState } from 'react';
// import Head from 'next/head';
// import { FiBook, FiClock, FiAward, FiBarChart2, FiCalendar, FiCheckCircle, FiPlayCircle, FiTarget } from 'react-icons/fi';
// import { motion } from 'framer-motion';

// // Types for our data
// interface Course {
//   id: string;
//   title: string;
//   instructor: string;
//   thumbnail: string;
//   category: string;
//   totalLessons: number;
//   completedLessons: number;
//   duration: string;
//   lastAccessed: string;
//   certificationAvailable: boolean;
//   quizScores: QuizScore[];
//   upcomingDeadlines: Deadline[];
// }

// interface QuizScore {
//   name: string;
//   score: number;
//   total: number;
// }

// interface Deadline {
//   title: string;
//   dueDate: string;
// }

// // Static data for enrolled courses
// const enrolledCourses: Course[] = [
//   {
//     id: "course-1",
//     title: "Advanced React Development",
//     instructor: "Sarah Johnson",
//     thumbnail: "/api/placeholder/400/200",
//     category: "Web Development",
//     totalLessons: 42,
//     completedLessons: 28,
//     duration: "12 weeks",
//     lastAccessed: "2 days ago",
//     certificationAvailable: true,
//     quizScores: [
//       { name: "React Hooks", score: 90, total: 100 },
//       { name: "Redux", score: 85, total: 100 },
//       { name: "Performance Optimization", score: 78, total: 100 }
//     ],
//     upcomingDeadlines: [
//       { title: "Final Project Submission", dueDate: "Apr 15, 2025" },
//       { title: "Peer Review", dueDate: "Apr 20, 2025" }
//     ]
//   },
//   {
//     id: "course-2",
//     title: "UI/UX Design Fundamentals",
//     instructor: "Michael Chen",
//     thumbnail: "/api/placeholder/400/200",
//     category: "Design",
//     totalLessons: 28,
//     completedLessons: 25,
//     duration: "8 weeks",
//     lastAccessed: "Yesterday",
//     certificationAvailable: true,
//     quizScores: [
//       { name: "Design Principles", score: 95, total: 100 },
//       { name: "User Research", score: 92, total: 100 },
//       { name: "Prototyping", score: 88, total: 100 }
//     ],
//     upcomingDeadlines: [
//       { title: "Portfolio Review", dueDate: "Apr 5, 2025" }
//     ]
//   },
//   {
//     id: "course-3",
//     title: "Machine Learning with Python",
//     instructor: "Dr. Alicia Roberts",
//     thumbnail: "/api/placeholder/400/200",
//     category: "Data Science",
//     totalLessons: 35,
//     completedLessons: 12,
//     duration: "10 weeks",
//     lastAccessed: "3 days ago",
//     certificationAvailable: true,
//     quizScores: [
//       { name: "NumPy & Pandas", score: 88, total: 100 },
//       { name: "Data Visualization", score: 92, total: 100 },
//       { name: "Regression Models", score: 75, total: 100 }
//     ],
//     upcomingDeadlines: [
//       { title: "Model Validation Assignment", dueDate: "Apr 10, 2025" },
//       { title: "Dataset Analysis", dueDate: "Apr 18, 2025" }
//     ]
//   },
//   {
//     id: "course-4",
//     title: "Full-Stack JavaScript",
//     instructor: "James Wilson",
//     thumbnail: "/api/placeholder/400/200",
//     category: "Web Development",
//     totalLessons: 48,
//     completedLessons: 10,
//     duration: "14 weeks",
//     lastAccessed: "1 week ago",
//     certificationAvailable: false,
//     quizScores: [
//       { name: "Node.js Basics", score: 82, total: 100 },
//       { name: "Express Framework", score: 78, total: 100 }
//     ],
//     upcomingDeadlines: [
//       { title: "API Development Project", dueDate: "Apr 25, 2025" },
//       { title: "Database Integration", dueDate: "May 2, 2025" }
//     ]
//   },
//   {
//     id: "course-5",
//     title: "Cloud Computing Fundamentals",
//     instructor: "Elena Martinez",
//     thumbnail: "/api/placeholder/400/200",
//     category: "DevOps",
//     totalLessons: 32,
//     completedLessons: 3,
//     duration: "9 weeks",
//     lastAccessed: "5 days ago",
//     certificationAvailable: true,
//     quizScores: [
//       { name: "Cloud Services Overview", score: 95, total: 100 }
//     ],
//     upcomingDeadlines: [
//       { title: "Infrastructure as Code Lab", dueDate: "Apr 12, 2025" },
//       { title: "Scalability Analysis", dueDate: "Apr 30, 2025" }
//     ]
//   }
// ];

// // Calculate overall progress
// const calculateOverallProgress = (courses: Course[]): number => {
//   const totalLessons = courses.reduce((total, course) => total + course.totalLessons, 0);
//   const completedLessons = courses.reduce((total, course) => total + course.completedLessons, 0);
//   return Math.round((completedLessons / totalLessons) * 100);
// };

// const UserProgress: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'all' | 'inProgress' | 'completed'>('all');
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(enrolledCourses[0]);
  
//   const filteredCourses = enrolledCourses.filter(course => {
//     if (activeTab === 'all') return true;
//     if (activeTab === 'inProgress') return course.completedLessons < course.totalLessons;
//     if (activeTab === 'completed') return course.completedLessons === course.totalLessons;
//     return true;
//   });

//   const overallProgress = calculateOverallProgress(enrolledCourses);
  
//   // Helper to calculate the color class based on progress percentage
//   const getProgressColorClass = (percentage: number): string => {
//     if (percentage < 30) return 'bg-red-500';
//     if (percentage < 70) return 'bg-yellow-500';
//     return 'bg-green-500';
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
// {/* 
//       {/* Navigation bar */}
//       <nav className="bg-white dark:bg-gray-800 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">LearnifyHub</h1>
//             </div>
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <img
//                   className="h-8 w-8 rounded-full"
//                   src="/api/placeholder/32/32"
//                   alt="User profile"
//                 />
//               </div>
//               <div className="ml-3">
//                 <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Alex Johnson</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav> */}

//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         {/* Dashboard Header */}
//         <div className="px-4 sm:px-0">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">My Learning Dashboard</h2>
//           <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//             Track your progress across all enrolled courses
//           </p>
//         </div>

//         {/* Overall Progress Section */}
//         <div className="mt-6 px-4 sm:px-0">
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }} 
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
//           >
//             <div className="px-4 py-5 sm:p-6">
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                 <div className="md:col-span-1">
//                   <div className="flex flex-col items-center">
//                     <div className="relative h-32 w-32">
//                       <svg className="h-32 w-32" viewBox="0 0 100 100">
//                         <circle
//                           cx="50"
//                           cy="50"
//                           r="45"
//                           fill="none"
//                           stroke="#e5e7eb"
//                           strokeWidth="8"
//                         />
//                         <circle
//                           cx="50"
//                           cy="50"
//                           r="45"
//                           fill="none"
//                           stroke={overallProgress < 30 ? "#EF4444" : overallProgress < 70 ? "#F59E0B" : "#10B981"}
//                           strokeWidth="8"
//                           strokeDasharray={`${overallProgress * 2.83}, 283`}
//                           strokeLinecap="round"
//                           transform="rotate(-90 50 50)"
//                         />
//                       </svg>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <span className="text-3xl font-bold text-gray-900 dark:text-white">{overallProgress}%</span>
//                       </div>
//                     </div>
//                     <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
//                       Overall Progress
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="md:col-span-3">
//                   <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
//                     Learning Summary
//                   </h3>
//                   <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
//                     <div className="bg-blue-50 dark:bg-blue-900/30 overflow-hidden shadow rounded-lg p-4">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800 rounded-md p-3">
//                           <FiBook className="h-6 w-6 text-blue-600 dark:text-blue-300" />
//                         </div>
//                         <div className="ml-4">
//                           <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                             Enrolled Courses
//                           </dt>
//                           <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
//                             {enrolledCourses.length}
//                           </dd>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="bg-purple-50 dark:bg-purple-900/30 overflow-hidden shadow rounded-lg p-4">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-800 rounded-md p-3">
//                           <FiClock className="h-6 w-6 text-purple-600 dark:text-purple-300" />
//                         </div>
//                         <div className="ml-4">
//                           <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                             Learning Hours
//                           </dt>
//                           <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
//                             87
//                           </dd>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="bg-green-50 dark:bg-green-900/30 overflow-hidden shadow rounded-lg p-4">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 bg-green-100 dark:bg-green-800 rounded-md p-3">
//                           <FiAward className="h-6 w-6 text-green-600 dark:text-green-300" />
//                         </div>
//                         <div className="ml-4">
//                           <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                             Certifications
//                           </dt>
//                           <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
//                             {enrolledCourses.filter(c => c.certificationAvailable).length}
//                           </dd>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Tabs for filtering courses */}
//         <div className="mt-6 px-4 sm:px-0">
//           <div className="border-b border-gray-200 dark:border-gray-700">
//             <nav className="-mb-px flex space-x-8">
//               <button
//                 onClick={() => setActiveTab('all')}
//                 className={`
//                   whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//                   ${activeTab === 'all' 
//                     ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}
//                 `}
//               >
//                 All Courses
//               </button>
//               <button
//                 onClick={() => setActiveTab('inProgress')}
//                 className={`
//                   whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//                   ${activeTab === 'inProgress' 
//                     ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}
//                 `}
//               >
//                 In Progress
//               </button>
//               <button
//                 onClick={() => setActiveTab('completed')}
//                 className={`
//                   whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//                   ${activeTab === 'completed' 
//                     ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}
//                 `}
//               >
//                 Completed
//               </button>
//             </nav>
//           </div>
//         </div>

//         {/* Course Grid and Details Layout */}
//         <div className="mt-6 px-4 sm:px-0">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Course Cards Grid */}
//             <div className="lg:col-span-1">
//               <div className="space-y-4">
//                 {filteredCourses.length > 0 ? (
//                   filteredCourses.map((course) => (
//                     <motion.div
//                       key={course.id}
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ duration: 0.2 }}
//                       onClick={() => setSelectedCourse(course)}
//                       className={`
//                         cursor-pointer bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden
//                         ${selectedCourse?.id === course.id ? 'ring-2 ring-blue-500' : ''}
//                       `}
//                     >
//                       <div className="flex flex-col sm:flex-row">
//                         <div className="flex-shrink-0 h-32 w-full sm:w-48 bg-gray-200 dark:bg-gray-700">
//                           <img
//                             className="h-full w-full object-cover"
//                             src={course.thumbnail}
//                             alt={course.title}
//                           />
//                         </div>
//                         <div className="p-4 flex-1">
//                           <div className="flex justify-between">
//                             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
//                               {course.category}
//                             </span>
//                             <span className="text-xs text-gray-500 dark:text-gray-400">
//                               {course.lastAccessed}
//                             </span>
//                           </div>
//                           <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
//                             {course.title}
//                           </h3>
//                           <p className="text-xs text-gray-500 dark:text-gray-400">
//                             Instructor: {course.instructor}
//                           </p>
                          
//                           <div className="mt-2">
//                             <div className="flex items-center justify-between text-xs">
//                               <span className="text-gray-500 dark:text-gray-400">
//                                 Progress: {Math.round((course.completedLessons / course.totalLessons) * 100)}%
//                               </span>
//                               <span className="text-gray-500 dark:text-gray-400">
//                                 {course.completedLessons}/{course.totalLessons} lessons
//                               </span>
//                             </div>
//                             <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                               <div 
//                                 className={`${getProgressColorClass(Math.round((course.completedLessons / course.totalLessons) * 100))} h-2 rounded-full`} 
//                                 style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
//                               ></div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))
//                 ) : (
//                   <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center">
//                     <p className="text-gray-500 dark:text-gray-400">No courses found</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Selected Course Details */}
//             <div className="lg:col-span-2">
//               {selectedCourse && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
//                 >
//                   {/* Course Header */}
//                   <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-700">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <h2 className="text-2xl font-bold text-white text-center px-4">{selectedCourse.title}</h2>
//                     </div>
//                   </div>

//                   {/* Course Stats */}
//                   <div className="px-4 py-5 sm:p-6">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//                         <div className="flex items-center">
//                           <FiBook className="h-5 w-5 text-blue-500" />
//                           <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Lessons</span>
//                         </div>
//                         <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
//                           {selectedCourse.completedLessons}/{selectedCourse.totalLessons}
//                         </p>
//                       </div>
                      
//                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//                         <div className="flex items-center">
//                           <FiClock className="h-5 w-5 text-purple-500" />
//                           <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Duration</span>
//                         </div>
//                         <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
//                           {selectedCourse.duration}
//                         </p>
//                       </div>
                      
//                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//                         <div className="flex items-center">
//                           <FiTarget className="h-5 w-5 text-yellow-500" />
//                           <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Completion</span>
//                         </div>
//                         <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
//                           {Math.round((selectedCourse.completedLessons / selectedCourse.totalLessons) * 100)}%
//                         </p>
//                       </div>
                      
//                       <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//                         <div className="flex items-center">
//                           <FiAward className="h-5 w-5 text-green-500" />
//                           <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Certificate</span>
//                         </div>
//                         <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
//                           {selectedCourse.certificationAvailable ? "Available" : "Not Available"}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Progress Bar */}
//                     <div className="mb-8">
//                       <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Course Progress</h3>
//                       <div className="relative pt-1">
//                         <div className="flex mb-2 items-center justify-between">
//                           <div>
//                             <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
//                               {selectedCourse.completedLessons} of {selectedCourse.totalLessons} lessons completed
//                             </span>
//                           </div>
//                           <div className="text-right">
//                             <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
//                               {Math.round((selectedCourse.completedLessons / selectedCourse.totalLessons) * 100)}%
//                             </span>
//                           </div>
//                         </div>
//                         <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
//                           <div 
//                             style={{ width: `${(selectedCourse.completedLessons / selectedCourse.totalLessons) * 100}%` }}
//                             className={`
//                               shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
//                               ${getProgressColorClass(Math.round((selectedCourse.completedLessons / selectedCourse.totalLessons) * 100))}
//                             `}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Quiz Scores */}
//                     <div className="mb-8">
//                       <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quiz Performance</h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {selectedCourse.quizScores.map((quiz, index) => (
//                           <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//                             <div className="flex justify-between items-center">
//                               <span className="text-sm font-medium text-gray-900 dark:text-white">{quiz.name}</span>
//                               <span className={`text-sm font-medium ${
//                                 quiz.score >= 90 ? 'text-green-600 dark:text-green-400' :
//                                 quiz.score >= 75 ? 'text-yellow-600 dark:text-yellow-400' :
//                                 'text-red-600 dark:text-red-400'
//                               }`}>
//                                 {quiz.score}/{quiz.total}
//                               </span>
//                             </div>
//                             <div className="mt-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
//                               <div 
//                                 className={`${
//                                   quiz.score >= 90 ? 'bg-green-500' :
//                                   quiz.score >= 75 ? 'bg-yellow-500' :
//                                   'bg-red-500'
//                                 } h-2 rounded-full`}
//                                 style={{ width: `${(quiz.score / quiz.total) * 100}%` }}
//                               ></div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Upcoming Deadlines */}
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Upcoming Deadlines</h3>
//                       <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
//                         {selectedCourse.upcomingDeadlines.length > 0 ? (
//                           <ul className="divide-y divide-gray-200 dark:divide-gray-600">
//                             {selectedCourse.upcomingDeadlines.map((deadline, index) => (
//                               <li key={index} className="p-4">
//                                 <div className="flex items-center justify-between">
//                                   <div className="flex items-center">
//                                     <FiCalendar className="h-5 w-5 text-red-500" />
//                                     <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
//                                       {deadline.title}
//                                     </span>
//                                   </div>
//                                   <div className="flex items-center">
//                                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                                       Due: {deadline.dueDate}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         ) : (
//                           <div className="p-4 text-center">
//                             <p className="text-sm text-gray-500 dark:text-gray-400">No upcoming deadlines</p>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Continue Learning Button */}
//                     <div className="mt-8 flex justify-center">
//                       <button 
//                         type="button"
//                         className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                       >
//                         <FiPlayCircle className="mr-2 h-5 w-5" />
//                         Continue Learning
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UserProgress;
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FiBook, FiClock, FiAward, FiBarChart2, FiCalendar, FiCheckCircle, FiPlayCircle, FiTarget } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Types for our data
interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  category: string;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  lastAccessed: string;
  certificationAvailable: boolean;
  quizScores: QuizScore[];
  upcomingDeadlines: Deadline[];
}

interface QuizScore {
  name: string;
  score: number;
  total: number;
}

interface Deadline {
  title: string;
  dueDate: string;
}

// Static data for enrolled courses
const enrolledCourses: Course[] = [
  {
    id: "course-1",
    title: "Advanced React Development",
    instructor: "Sarah Johnson",
    thumbnail: "/api/placeholder/400/200",
    category: "Web Development",
    totalLessons: 42,
    completedLessons: 28,
    duration: "12 weeks",
    lastAccessed: "2 days ago",
    certificationAvailable: true,
    quizScores: [
      { name: "React Hooks", score: 90, total: 100 },
      { name: "Redux", score: 85, total: 100 },
      { name: "Performance Optimization", score: 78, total: 100 }
    ],
    upcomingDeadlines: [
      { title: "Final Project Submission", dueDate: "Apr 15, 2025" },
      { title: "Peer Review", dueDate: "Apr 20, 2025" }
    ]
  },
];

// Calculate overall progress
const calculateOverallProgress = (courses: Course[]): number => {
  const totalLessons = courses.reduce((total, course) => total + course.totalLessons, 0);
  const completedLessons = courses.reduce((total, course) => total + course.completedLessons, 0);
  return Math.round((completedLessons / totalLessons) * 100);
};

const UserProgress: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'inProgress' | 'completed'>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(enrolledCourses[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  
  // Simulate page load effect
  useEffect(() => {
    setIsLoaded(true);
    
    // Delay the cards animation for a cascade effect
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  const filteredCourses = enrolledCourses.filter(course => {
    if (activeTab === 'all') return true;
    if (activeTab === 'inProgress') return course.completedLessons < course.totalLessons;
    if (activeTab === 'completed') return course.completedLessons === course.totalLessons;
    return true;
  });

  const overallProgress = calculateOverallProgress(enrolledCourses);
  
  // Helper to calculate the color class based on progress percentage
  const getProgressColorClass = (percentage: number): string => {
    if (percentage < 30) return 'bg-red-500';
    if (percentage < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="px-4 sm:px-0"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">My Learning Dashboard</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Track your progress across all enrolled courses
          </p>
        </motion.div>

        {/* Overall Progress Section */}
        <motion.div 
          className="mt-6 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="relative h-32 w-32"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        delay: 0.6
                      }}
                    >
                      <svg className="h-32 w-32" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={overallProgress < 30 ? "#EF4444" : overallProgress < 70 ? "#F59E0B" : "#10B981"}
                          strokeWidth="8"
                          strokeDasharray={`${overallProgress * 2.83}, 283`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                          initial={{ strokeDasharray: "0, 283" }}
                          animate={isLoaded ? { strokeDasharray: `${overallProgress * 2.83}, 283` } : {}}
                          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        />
                      </svg>
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={isLoaded ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 2 }}
                      >
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{overallProgress}%</span>
                      </motion.div>
                    </motion.div>
                    <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Overall Progress
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="md:col-span-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                >
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Learning Summary
                  </h3>
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-blue-50 dark:bg-blue-900/30 overflow-hidden shadow rounded-lg p-4"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800 rounded-md p-3">
                          <FiBook className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                        </div>
                        <div className="ml-4">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Enrolled Courses
                          </dt>
                          <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                            {enrolledCourses.length}
                          </dd>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-purple-50 dark:bg-purple-900/30 overflow-hidden shadow rounded-lg p-4"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-800 rounded-md p-3">
                          <FiClock className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                        </div>
                        <div className="ml-4">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Learning Hours
                          </dt>
                          <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                            87
                          </dd>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-green-50 dark:bg-green-900/30 overflow-hidden shadow rounded-lg p-4"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-green-100 dark:bg-green-800 rounded-md p-3">
                          <FiAward className="h-6 w-6 text-green-600 dark:text-green-300" />
                        </div>
                        <div className="ml-4">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Certifications
                          </dt>
                          <dd className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                            {enrolledCourses.filter(c => c.certificationAvailable).length}
                          </dd>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs for filtering courses */}
        <motion.div 
          className="mt-6 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {['all', 'inProgress', 'completed'].map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab 
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'}
                  `}
                >
                  {tab === 'all' ? 'All Courses' : tab === 'inProgress' ? 'In Progress' : 'Completed'}
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Course Grid and Details Layout */}
        <motion.div 
          className="mt-6 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={animateCards ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Course Cards Grid */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate={animateCards ? "visible" : "hidden"}
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCourse(course)}
                      className={`
                        cursor-pointer bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden
                        ${selectedCourse?.id === course.id ? 'ring-2 ring-blue-500' : ''}
                      `}
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex-shrink-0 h-32 w-full sm:w-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="h-full w-full object-cover"
                            src={course.thumbnail}
                            alt={course.title}
                          />
                        </div>
                        <div className="p-4 flex-1">
                          <div className="flex justify-between">
                            <motion.span 
                              whileHover={{ scale: 1.05 }}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              {course.category}
                            </motion.span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {course.lastAccessed}
                            </span>
                          </div>
                          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                            {course.title}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Instructor: {course.instructor}
                          </p>
                          
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-500 dark:text-gray-400">
                                Progress: {Math.round((course.completedLessons / course.totalLessons) * 100)}%
                              </span>
                              <span className="text-gray-500 dark:text-gray-400">
                                {course.completedLessons}/{course.totalLessons} lessons
                              </span>
                            </div>
                            <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
                                transition={{ duration: 1, delay: 1 + (index * 0.2), ease: "easeOut" }}
                                className={`${getProgressColorClass(Math.round((course.completedLessons / course.totalLessons) * 100))} h-2 rounded-full`} 
                              ></motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-center"
                  >
                    <p className="text-gray-500 dark:text-gray-400">No courses found</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Selected Course Details */}
            <div className="lg:col-span-2">
              {selectedCourse && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  layoutId={`course-details-${selectedCourse.id}`}
                  className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
                >
                  {/* Course Header */}
                  <motion.div 
                    className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-700"
                    whileHover={{ 
                      backgroundPosition: ['0% 0%', '100% 100%'],
                      transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.h2 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-2xl font-bold text-white text-center px-4"
                      >
                        {selectedCourse.title}
                      </motion.h2>
                    </div>
                  </motion.div>

                  {/* Course Stats */}
                  <div className="px-4 py-5 sm:p-6">
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                    >
                      {[
                        { icon: FiBook, color: "text-blue-500", label: "Lessons", value: `${selectedCourse.completedLessons}/${selectedCourse.totalLessons}` },
                        { icon: FiClock, color: "text-purple-500", label: "Duration", value: selectedCourse.duration },
                        { icon: FiTarget, color: "text-yellow-500", label: "Completion", value: `${Math.round((selectedCourse.completedLessons / selectedCourse.totalLessons) * 100)}%` },
                        { icon: FiAward, color: "text-green-500", label: "Certificate", value: selectedCourse.certificationAvailable ? "Available" : "Not Available" }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          variants={itemVariants}
                          whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                          className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                        >
                          <div className="flex items-center">
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{item.label}</span>
                          </div>
                          <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                            {item.value}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Progress Bar */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="mb-8"
                    >
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Course Progress</h3>
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                              {selectedCourse.completedLessons} of {selectedCourse.totalLessons} lessons completed
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                              {Math.round((selectedCourse.completedLessons / selectedCourse.totalLessons) * 100)}%
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(selectedCourse.completedLessons / selectedCourse.totalLessons) * 100}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className={`
                              shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                              ${getProgressColorClass(Math.round((selectedCourse.completedLessons / selectedCourse.totalLessons) * 100))}
                            `}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Continue Learning Button */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="mt-8 flex justify-center"
                    >
                      <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <FiPlayCircle className="mr-2 h-5 w-5" />
                        Continue Learning
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default UserProgress;