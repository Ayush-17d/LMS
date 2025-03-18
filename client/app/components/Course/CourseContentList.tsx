import React, { FC, useState } from "react";
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiVideo, 
  FiClock 
} from "react-icons/fi";
import { motion } from "framer-motion";

type Props = {
  data: any;
  activeVideo?: number;
  setActiveVideo?: (index: number) => void;
  isDemo?: boolean;
};

const CourseContentList: FC<Props> = (props) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set<string>()
  );

  // Find unique video sections
  const videoSections: string[] = [
    ...new Set<string>(props.data?.map((item: any) => item.videoSection) || []),
  ];

  let totalCount: number = 0;

  const toggleSection = (section: string) => {
    const newVisibleSections = new Set(visibleSections);
    if (newVisibleSections.has(section)) {
      newVisibleSections.delete(section);
    } else {
      newVisibleSections.add(section);
    }
    setVisibleSections(newVisibleSections);
  };

  // Calculate total number of videos and total duration
  const totalVideos = props.data?.length || 0;
  const totalDuration = props.data?.reduce(
    (total: number, item: any) => total + (Number(item.videoLength) || 0),
    0
  );
  const totalHours = Math.floor(totalDuration / 3600);
  const totalMinutes = Math.floor((totalDuration % 3600) / 60);

  return (
    <div className={`w-full ${!props.isDemo && "min-h-screen"}`}>
      {/* Summary stats */}
      {!props.isDemo && (
        <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex flex-wrap gap-4">
          <div className="flex items-center">
            <FiVideo className="text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">
              {totalVideos} lessons
            </span>
          </div>
          <div className="flex items-center">
            <FiClock className="text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">
              {totalHours > 0 ? `${totalHours} hours ` : ""}
              {totalMinutes} minutes total
            </span>
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
        {videoSections.map((section: string, sectionIndex: number) => {
          const isSectionVisible = visibleSections.has(section);

          // Filter section by videos
          const sectionVideos: any[] = props.data.filter(
            (item: any) => item.videoSection === section
          );

          const sectionVideoCount: number = sectionVideos.length;
          const sectionVideoLength: number = sectionVideos.reduce(
            (totalLength: number, item: any) =>
              totalLength + (Number(item.videoLength) || 0),
            0
          );

          const sectionStartIndex: number = totalCount;
          totalCount += sectionVideoCount;
          
          // Calculate time format
          const sectionHours = Math.floor(sectionVideoLength / 3600);
          const sectionMinutes = Math.floor((sectionVideoLength % 3600) / 60);
          const timeString = sectionHours > 0 
            ? `${sectionHours} hours ${sectionMinutes} minutes` 
            : `${sectionMinutes} minutes`;

          return (
            <div key={section} className="bg-white dark:bg-gray-800">
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => toggleSection(section)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {section}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {sectionVideoCount} lessons • {timeString}
                    </p>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {isSectionVisible ? (
                      <FiChevronUp size={20} />
                    ) : (
                      <FiChevronDown size={20} />
                    )}
                  </div>
                </div>
              </div>

              {/* Animated content */}
              {isSectionVisible && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="divide-y divide-gray-100 dark:divide-gray-700"
                >
                  {sectionVideos.map((item: any, index: number) => {
                    const videoIndex: number = sectionStartIndex + index;
                    const videoLength = Number(item.videoLength);
                    const videoHours = Math.floor(videoLength / 3600);
                    const videoMinutes = Math.floor((videoLength % 3600) / 60);
                    const videoSeconds = videoLength % 60;
                    
                    const formattedDuration = videoHours > 0
                      ? `${videoHours}:${videoMinutes.toString().padStart(2, '0')}:${videoSeconds.toString().padStart(2, '0')}`
                      : `${videoMinutes}:${videoSeconds.toString().padStart(2, '0')}`;
                    
                    return (
                      <div
                        key={item._id}
                        className={`
                          pl-6 pr-4 py-3 flex items-center justify-between
                          ${videoIndex === props.activeVideo ? "bg-indigo-50 dark:bg-indigo-900/20" : ""}
                          ${!props.isDemo && "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"}
                          transition-colors
                        `}
                        onClick={() =>
                          props.isDemo ? null : props?.setActiveVideo?.(videoIndex)
                        }
                      >
                        <div className="flex items-start flex-1 min-w-0">
                          <FiVideo 
                            size={16} 
                            className="mt-1 mr-3 text-indigo-500 dark:text-indigo-400 flex-shrink-0" 
                          />
                          <div className="min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {videoIndex === props.activeVideo && !props.isDemo && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 mr-2">
                                  Current
                                </span>
                              )}
                              Lesson {index + 1}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center ml-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                            <FiClock className="mr-1" size={12} />
                            {formattedDuration}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContentList;
// import React, { useState } from "react";
// import { 
//   FiChevronDown, 
//   FiChevronUp, 
//   FiVideo, 
//   FiClock,
//   FiCheck
// } from "react-icons/fi";
// import { motion } from "framer-motion";

// type Props = {
//   data: any;
//   activeVideo?: number;
//   setActiveVideo?: (index: number) => void;
//   isDemo?: boolean;
// };

// const CourseContentList: React.FC<Props> = (props) => {
//   const [visibleSections, setVisibleSections] = useState<Set<string>>(
//     new Set<string>()
//   );

//   // Find unique video sections
//   const videoSections: string[] = [
//     ...new Set<string>(props.data?.map((item: any) => item.videoSection) || []),
//   ];

//   let totalCount: number = 0;

//   const toggleSection = (section: string) => {
//     const newVisibleSections = new Set(visibleSections);
//     if (newVisibleSections.has(section)) {
//       newVisibleSections.delete(section);
//     } else {
//       newVisibleSections.add(section);
//     }
//     setVisibleSections(newVisibleSections);
//   };

//   // Calculate total number of videos and total duration
//   const totalVideos = props.data?.length || 0;
//   const totalDuration = props.data?.reduce(
//     (total: number, item: any) => total + (Number(item.videoLength) || 0),
//     0
//   );
//   const totalHours = Math.floor(totalDuration / 3600);
//   const totalMinutes = Math.floor((totalDuration % 3600) / 60);

//   return (
//     <div className="w-full">
//       {/* Summary stats */}
//       {!props.isDemo && (
//         <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl flex flex-wrap gap-4 shadow-sm">
//           <div className="flex items-center">
//             <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-lg mr-3">
//               <FiVideo className="text-indigo-600 dark:text-indigo-300" size={18} />
//             </div>
//             <div>
//               <span className="text-gray-500 dark:text-gray-400 text-xs">Lessons</span>
//               <p className="text-gray-800 dark:text-white font-semibold">{totalVideos}</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg mr-3">
//               <FiClock className="text-blue-600 dark:text-blue-300" size={18} />
//             </div>
//             <div>
//               <span className="text-gray-500 dark:text-gray-400 text-xs">Duration</span>
//               <p className="text-gray-800 dark:text-white font-semibold">
//                 {totalHours > 0 ? `${totalHours}h ` : ""}
//                 {totalMinutes}m
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Progress indicator */}
//       {!props.isDemo && props.activeVideo !== undefined && (
//         <div className="mb-6">
//           <div className="flex justify-between text-sm mb-2">
//             <span className="text-gray-600 dark:text-gray-400">Your progress</span>
//             <span className="font-medium text-indigo-600 dark:text-indigo-400">
//               {Math.round(((props.activeVideo + 1) / totalVideos) * 100)}%
//             </span>
//           </div>
//           <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//             <div 
//               className="bg-gradient-to-r from-indigo-600 to-blue-500 h-2 rounded-full transition-all duration-300"
//               style={{ width: `${((props.activeVideo + 1) / totalVideos) * 100}%` }}
//             ></div>
//           </div>
//         </div>
//       )}

//       {/* Sections */}
//       <div className="space-y-3">
//         {videoSections.map((section: string, sectionIndex: number) => {
//           const isSectionVisible = visibleSections.has(section);

//           // Filter section by videos
//           const sectionVideos: any[] = props.data.filter(
//             (item: any) => item.videoSection === section
//           );

//           const sectionVideoCount: number = sectionVideos.length;
//           const sectionVideoLength: number = sectionVideos.reduce(
//             (totalLength: number, item: any) =>
//               totalLength + (Number(item.videoLength) || 0),
//             0
//           );

//           const sectionStartIndex: number = totalCount;
//           totalCount += sectionVideoCount;
          
//           // Calculate time format
//           const sectionHours = Math.floor(sectionVideoLength / 3600);
//           const sectionMinutes = Math.floor((sectionVideoLength % 3600) / 60);
//           const timeString = sectionHours > 0 
//             ? `${sectionHours}h ${sectionMinutes}m` 
//             : `${sectionMinutes}m`;

//           // Check if active video is in this section
//           const hasActiveVideo = props.activeVideo !== undefined && 
//             props.activeVideo >= sectionStartIndex && 
//             props.activeVideo < sectionStartIndex + sectionVideoCount;

//           return (
//             <div 
//               key={section} 
//               className={`bg-white dark:bg-gray-800 rounded-xl border ${
//                 hasActiveVideo ? 'border-indigo-200 dark:border-indigo-800' : 'border-gray-200 dark:border-gray-700'
//               } overflow-hidden shadow-sm`}
//             >
//               <div 
//                 className={`px-4 py-4 cursor-pointer transition-colors ${
//                   hasActiveVideo ? 'bg-indigo-50 dark:bg-indigo-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
//                 }`}
//                 onClick={() => toggleSection(section)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center">
//                       <h3 className="text-base font-medium text-gray-900 dark:text-white truncate">
//                         {section}
//                       </h3>
//                       {hasActiveVideo && (
//                         <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
//                           Current
//                         </span>
//                       )}
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 space-x-2">
//                       <span>{sectionVideoCount} lessons</span>
//                       <span>•</span>
//                       <span>{timeString}</span>
//                     </div>
//                   </div>
//                   <div className="ml-4 flex-shrink-0">
//                     {isSectionVisible ? (
//                       <FiChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
//                     ) : (
//                       <FiChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Animated content */}
//               {isSectionVisible && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="border-t border-gray-100 dark:border-gray-700"
//                 >
//                   {sectionVideos.map((item: any, index: number) => {
//                     const videoIndex: number = sectionStartIndex + index;
//                     const videoLength = Number(item.videoLength);
//                     const videoHours = Math.floor(videoLength / 3600);
//                     const videoMinutes = Math.floor((videoLength % 3600) / 60);
//                     const videoSeconds = videoLength % 60;
                    
//                     const formattedDuration = videoHours > 0
//                       ? `${videoHours}:${videoMinutes.toString().padStart(2, '0')}:${videoSeconds.toString().padStart(2, '0')}`
//                       : `${videoMinutes}:${videoSeconds.toString().padStart(2, '0')}`;
                    
//                     const isActive = videoIndex === props.activeVideo;
//                     const isCompleted = props.activeVideo !== undefined && videoIndex < props.activeVideo;
                    
//                     return (
//                       <div
//                         key={item._id}
//                         className={`
//                           px-4 py-3 flex items-center 
//                           ${!props.isDemo && "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"}
//                           ${isActive ? "bg-indigo-50 dark:bg-indigo-900/20" : ""}
//                           transition-colors border-t border-gray-100 dark:border-gray-700
//                         `}
//                         onClick={() =>
//                           props.isDemo ? null : props?.setActiveVideo?.(videoIndex)
//                         }
//                       >
//                         <div className="mr-3 flex-shrink-0">
//                           {isCompleted ? (
//                             <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
//                               <FiCheck className="text-green-600 dark:text-green-300" size={14} />
//                             </div>
//                           ) : isActive ? (
//                             <div className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
//                               <FiVideo className="text-indigo-600 dark:text-indigo-300" size={14} />
//                             </div>
//                           ) : (
//                             <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
//                               <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{index + 1}</span>
//                             </div>
//                           )}
//                         </div>
                        
//                         <div className="min-w-0 flex-1">
//                           <h4 className={`text-sm font-medium truncate ${
//                             isActive ? "text-indigo-700 dark:text-indigo-300" : 
//                             isCompleted ? "text-gray-600 dark:text-gray-300" : 
//                             "text-gray-800 dark:text-white"
//                           }`}>
//                             {item.title}
//                           </h4>
//                         </div>
                        
//                         <div className="ml-4 flex-shrink-0">
//                           <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
//                             <FiClock className="mr-1" size={10} />
//                             {formattedDuration}
//                           </span>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </motion.div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CourseContentList;