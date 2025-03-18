// import React, { FC, useState } from "react";
// import {
//   BsChevronDown,
//   BsChevronUp,
// } from "react-icons/bs";
// import { MdOutlineOndemandVideo } from "react-icons/md";

// type Props = {
//   data: any;
//   activeVideo?: number;
//   setActiveVideo?: (index: number) => void;
//   isDemo?: boolean;
// };

// const CourseContentList: FC<Props> = (props) => {
//   const [visibleSections, setVisibleSections] = useState<Set<string>>(
//     new Set<string>()
//   );

//   // Find unique video sections
//   const videoSections: string[] = [
//     ...new Set<string>(props.data?.map((item: any) => item.videoSection) || []),
//   ];
//   console.log(props.data)

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

//   return (
//     <div
//       className={`mt-[15px] w-full ${
//         !props.isDemo && "ml-[-30px] min-h-screen"
//       }`}
//     >
//       {videoSections.map((section: string, sectionIndex: number) => {
//         const isSectionVisible = visibleSections.has(section);

//         // Filter section by videos
//         const sectionVideos: any[] = props.data.filter(
//           (item: any) => item.videoSection === section
//         );

//         const sectionVideoCount: number = sectionVideos.length;
//         const sectionVideoLength: number = sectionVideos.reduce(
//           (totalLength: number, item: any) =>
//             totalLength + (Number(item.videoLength) || 0),
//           0
//         );

//         const sectionStartIndex: number = totalCount;
//         totalCount += sectionVideoCount;
//         const videoSectionLengthMinut = Math.floor(sectionVideoLength/60)
//         const sectionContentHours: number = Math.floor(sectionVideoLength / 3600);

//         return (
//           <div
//             className={`${!props.isDemo && "border-b border-black pb-2"}`}
//             key={section}
//           >
//             <div className="w-full flex">
//               <div className="w-full flex justify-between items-center">
//                 <h2 className="text-[22px] text-black dark:text-white">
//                   {section}
//                 </h2>
//                 <button
//                   className="text-black dark:text-white mr-4 cursor-pointer"
//                   onClick={() => toggleSection(section)}
//                 >
//                   {isSectionVisible ? (
//                     <BsChevronUp size={20} />
//                   ) : (
//                     <BsChevronDown size={20} />
//                   )}
//                 </button>
//               </div>
//             </div>
//             <h5 className="text-black dark:text-white">
//               {sectionVideoCount} Lessons{" "}
//               {sectionVideoLength < 3600
//                 ? `${videoSectionLengthMinut || 0} minutes`
//                 : `${sectionContentHours} hours`}
//             </h5>
//             <br />
//             {isSectionVisible && (
//               <div className="w-full">
//                 {sectionVideos.map((item: any, index: number) => {
//                   const videoIndex: number = sectionStartIndex + index;
//                   const videoLength:number = Number(item.videoLength)
//                   const videoLengthMinut = Math.floor(videoLength/60)
//                   const videoLengthSec = videoLength % 60
//                   const contentLength: number = (videoLengthMinut / 3600);
                  
                  
//                   return (
//                     <div
//                       className={`w-full ${
//                         videoIndex === props.activeVideo ? "bg-slate-600" : ""
//                       } cursor-pointer p-2 transition-all`}
//                       key={item._id}
//                       onClick={() =>
//                         props.isDemo ? null : props?.setActiveVideo?.(videoIndex)
//                       }
//                     >
//                       <div className="flex items-start">
//                         <div>
//                           <MdOutlineOndemandVideo
//                             size={25}
//                             className="mr-2"
//                             color="#1cdada"
//                           />
//                         </div>
//                         <h1 className="text-black dark:text-white text-[18px] inline-block break-words">
//                           {item.title}
//                         </h1>
//                       </div>
//                       <h5 className="text-black dark:text-white pl-8">
//                          {videoLength > 3600
//                           ? `${contentLength.toFixed(0)} hours`
//                           : `${videoLengthMinut}.${videoLengthSec} minutes`}      
                        
//                       </h5>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CourseContentList;

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

// import React, { FC, useState } from "react";
// import {
//   BsChevronDown,
//   BsChevronUp,
// } from "react-icons/bs";
// import { MdOutlineOndemandVideo } from "react-icons/md";

// type Props = {
//   data: any;
//   activeVideo?: number;
//   setActiveVideo?: (index: number) => void;
//   isDemo?: boolean;
// };

// const CourseContentList: FC<Props> = (props) => {
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

//   return (
//     <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
//       <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
//         <h2 className="text-xl font-bold text-gray-800 dark:text-white">Course Content</h2>
//         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//           {videoSections.length} sections • {props.data?.length || 0} lessons
//         </p>
//       </div>
      
//       <div className="overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar p-2">
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
//           const videoSectionLengthMinut = Math.floor(sectionVideoLength/60);
//           const sectionContentHours: number = Math.floor(sectionVideoLength / 3600);

//           return (
//             <div
//               className="mb-2 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800"
//               key={section}
//             >
//               <div 
//                 className="p-3 bg-gray-50 dark:bg-gray-700 cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
//                 onClick={() => toggleSection(section)}
//               >
//                 <div className="w-full flex justify-between items-center">
//                   <h3 className="font-medium text-gray-800 dark:text-white">
//                     {section}
//                   </h3>
//                   <button
//                     className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                     aria-label={isSectionVisible ? "Collapse section" : "Expand section"}
//                   >
//                     {isSectionVisible ? (
//                       <BsChevronUp size={18} />
//                     ) : (
//                       <BsChevronDown size={18} />
//                     )}
//                   </button>
//                 </div>
//                 <div className="flex justify-between items-center mt-1">
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     {sectionVideoCount} {sectionVideoCount === 1 ? "Lesson" : "Lessons"}
//                   </span>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     {sectionVideoLength < 3600
//                       ? `${videoSectionLengthMinut || 0} min`
//                       : `${sectionContentHours} hr ${videoSectionLengthMinut % 60} min`}
//                   </span>
//                 </div>
//               </div>
              
//               {isSectionVisible && (
//                 <div className="divide-y divide-gray-100 dark:divide-gray-700">
//                   {sectionVideos.map((item: any, index: number) => {
//                     const videoIndex: number = sectionStartIndex + index;
//                     const videoLength: number = Number(item.videoLength);
//                     const videoLengthMinut = Math.floor(videoLength/60);
//                     const videoLengthSec = videoLength % 60;
//                     const contentLength: number = (videoLengthMinut / 3600);
                    
//                     return (
//                       <div
//                         className={`p-3 transition-all cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
//                           videoIndex === props.activeVideo 
//                             ? "bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500" 
//                             : ""
//                         }`}
//                         key={item._id}
//                         onClick={() =>
//                           props.isDemo ? null : props?.setActiveVideo?.(videoIndex)
//                         }
//                       >
//                         <div className="flex items-start gap-2">
//                           <div className="mt-0.5 text-blue-500">
//                             <MdOutlineOndemandVideo size={20} />
//                           </div>
//                           <div className="flex-1">
//                             <h4 className={`text-sm md:text-base break-words ${
//                               videoIndex === props.activeVideo 
//                                 ? "font-medium text-blue-700 dark:text-blue-400" 
//                                 : "text-gray-800 dark:text-white"
//                             }`}>
//                               {item.title}
//                             </h4>
//                             <div className="flex items-center justify-between mt-1">
//                               <span className="text-xs text-gray-500 dark:text-gray-400">
//                                 {videoLength > 3600
//                                   ? `${contentLength.toFixed(0)} hr ${videoLengthMinut % 60} min`
//                                   : `${videoLengthMinut}:${videoLengthSec < 10 ? '0' : ''}${videoLengthSec}`}
//                               </span>
//                               {videoIndex === props.activeVideo && (
//                                 <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
//                                   Current
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
      
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f1f1;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #c1c1c1;
//           border-radius: 3px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #a1a1a1;
//         }
        
//         @media (max-width: 768px) {
//           .custom-scrollbar::-webkit-scrollbar {
//             width: 3px;
//           }
//         }
        
//         .dark .custom-scrollbar::-webkit-scrollbar-track {
//           background: #2d3748;
//         }
//         .dark .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #4a5568;
//         }
//         .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #718096;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CourseContentList;