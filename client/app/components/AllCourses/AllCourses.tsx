"use client";
import React, { useState, useEffect, useRef } from "react";
import CourseCard from "../Course/CourseCard";
import {
  useGetUsersCoursesQuery,
  useSearchCoursesQuery,
} from "@/redux/features/courses/coursesApi";
import { useSearchParams } from "next/navigation";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import BrushIcon from "@mui/icons-material/Brush";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import WarningIcon from "@mui/icons-material/Warning";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const categories = [
  { id: "all", name: "All Courses" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Development" },
  { id: "design", name: "Design" },
  { id: "data", name: "Data Science" },
  { id: "ai/ml", name: "AI/ML" },
];

const AllCourses = () => {
  const searchParams = useSearchParams();
  const searchTitle = searchParams?.get("title");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState([]);
  const [page, setPage] = useState(1);
  const coursesPerPage = 6;
  const courseRef = useRef(null);

  const { data: allCoursesData, isLoading: allLoading } = useGetUsersCoursesQuery(
    {},
    {
      skip: !!searchTitle,
    }
  );

  const { data: searchData, isLoading: searchLoading } = useSearchCoursesQuery(
    searchTitle,
    {
      skip: !searchTitle,
    }
  );

  useEffect(() => {
    const courseData = searchTitle
      ? searchData?.courses
      : allCoursesData?.courses;

    if (courseData) {
      let filteredCourses = courseData;

      if (selectedCategory !== "all") {
        filteredCourses = courseData.filter(
          (course) => course.category?.toLowerCase() === selectedCategory
        );
      }

      setCourses(filteredCourses);
      setPage(1);
      setVisibleCourses(filteredCourses.slice(0, coursesPerPage));
    }
  }, [allCoursesData, searchData, searchTitle, selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);

    if (courseRef.current) {
      courseRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const loadMoreCourses = () => {
    const nextPage = page + 1;
    const nextCourses = courses.slice(0, nextPage * coursesPerPage);
    setVisibleCourses(nextCourses);
    setPage(nextPage);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-800 via-blue-700 to-blue-600 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="lg:max-w-xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-6 border border-white/20">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
              <span className="text-sm font-medium text-white">
                {searchTitle ? "Search Results" : "Explore Courses"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {searchTitle ? (
                `Results for "${searchTitle}"`
              ) : (
                <span>
                  Take your skills to the{" "}
                  <span className="text-blue-300">next level</span>
                </span>
              )}
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              Access expert-led courses designed to accelerate your career and
              help you master in-demand skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleCategoryClick("all")}
                className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:bg-gray-50 focus:ring-4 focus:ring-white/30 focus:outline-none"
              >
                Browse All Courses
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:bg-blue-700 focus:ring-4 focus:ring-white/30 focus:outline-none">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                <LaptopIcon className="text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                40+ Courses
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Web Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Master modern frameworks and technologies
            </p>
            <button
              onClick={() => handleCategoryClick("web")}
              className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center"
            >
              Explore category
              <ChevronRightIcon className="ml-1" fontSize="small" />
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                <PhoneIphoneIcon className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                25+ Courses
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Mobile Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Build iOS and Android applications
            </p>
            <button
              onClick={() => handleCategoryClick("mobile")}
              className="text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center"
            >
              Explore category
              <ChevronRightIcon className="ml-1" fontSize="small" />
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                <BrushIcon className="text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                30+ Courses
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Learn UI/UX and graphic design
            </p>
            <button
              onClick={() => handleCategoryClick("design")}
              className="text-purple-600 dark:text-purple-400 text-sm font-medium flex items-center"
            >
              Explore category
              <ChevronRightIcon className="ml-1" fontSize="small" />
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-700">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg">
                <BarChartIcon className="text-teal-600 dark:text-teal-400" />
              </div>
              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                20+ Courses
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Data Science
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Analyze and visualize data
            </p>
            <button
              onClick={() => handleCategoryClick("data")}
              className="text-teal-600 dark:text-teal-400 text-sm font-medium flex items-center"
            >
              Explore category
              <ChevronRightIcon className="ml-1" fontSize="small" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Course List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10" ref={courseRef}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
              {selectedCategory === "all"
                ? "All Courses"
                : `${categories.find((e) => e.id === selectedCategory)?.name}`}
            </h2>

            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center">
                <span className="mr-2 text-sm text-gray-600 dark:text-gray-400">
                  Sort:
                </span>
                <select className="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Newest</option>
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex overflow-x-auto space-x-2 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex-none whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          {allLoading || searchLoading ? (
            <div className="flex flex-col justify-center items-center h-64 md:h-96">
              <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-200 dark:border-indigo-900 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
              <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
                Loading courses...
              </p>
            </div>
          ) : (
            <>
              {courses && courses.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleCourses.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col transform hover:-translate-y-1"
                      >
                        <div className="relative">
                          {index % 3 === 0 && (
                            <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-md z-10">
                              Featured
                            </div>
                          )}
                          {index % 7 === 0 && (
                            <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-md z-10">
                              New
                            </div>
                          )}
                        </div>
                        <CourseCard item={item} />
                      </div>
                    ))}
                  </div>

                  {visibleCourses.length < courses.length && (
                    <div className="flex justify-center mt-12">
                      <button
                        onClick={loadMoreCourses}
                        className="group bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200"
                      >
                        <span>Load More Courses</span>
                        <ArrowDownwardIcon className="group-hover:translate-y-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-10 text-center shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-6">
                    <WarningIcon
                      className="text-gray-500 dark:text-gray-400"
                      sx={{ fontSize: 32 }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {searchTitle
                      ? "No matching courses found"
                      : "No courses available"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                    {searchTitle
                      ? "We couldn't find any courses matching your criteria. Try adjusting your search or browse other categories."
                      : "We're working on adding new courses to this category. Please check back soon or explore other categories."}
                  </p>
                  <button
                    onClick={() => handleCategoryClick("all")}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium"
                  >
                    Browse all courses
                    <ArrowForwardIcon className="ml-1" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import CourseCard from "../Course/CourseCard";
// import {
//   useGetUsersCoursesQuery,
//   useSearchCoursesQuery,
// } from "@/redux/features/courses/coursesApi";
// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import { 
//   Code, 
//   Smartphone, 
//   Palette, 
//   BarChart2, 
//   ChevronRight, 
//   ChevronDown, 
//   AlertCircle, 
//   Sparkles, 
//   BookOpen, 
//   ArrowRight, 
//   Search, 
//   Zap, 
//   Clock, 
//   Star,
//   ChevronUp,
//   Filter,
//   Brain
// } from "lucide-react";

// const categories = [
//   { id: "all", name: "All Courses", icon: <BookOpen size={18} /> },
//   { id: "web", name: "Web Development", icon: <Code size={18} /> },
//   { id: "mobile", name: "Mobile Development", icon: <Smartphone size={18} /> },
//   { id: "design", name: "Design", icon: <Palette size={18} /> },
//   { id: "data", name: "Data Science", icon: <BarChart2 size={18} /> },
//   { id: "ai/ml", name: "AI/ML", icon: <Brain size={18} /> },
// ];

// const AllCourses = () => {
//   const searchParams = useSearchParams();
//   const searchTitle = searchParams?.get("title");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [courses, setCourses] = useState([]);
//   const [visibleCourses, setVisibleCourses] = useState([]);
//   const [page, setPage] = useState(1);
//   const [sortOption, setSortOption] = useState("newest");
//   const coursesPerPage = 6;
//   const courseRef = useRef(null);

//   const { data: allCoursesData, isLoading: allLoading } = useGetUsersCoursesQuery(
//     {},
//     {
//       skip: !!searchTitle,
//     }
//   );

//   const { data: searchData, isLoading: searchLoading } = useSearchCoursesQuery(
//     searchTitle,
//     {
//       skip: !searchTitle,
//     }
//   );

//   useEffect(() => {
//     const courseData = searchTitle
//       ? searchData?.courses
//       : allCoursesData?.courses;

//     if (courseData) {
//       let filteredCourses = courseData;

//       if (selectedCategory !== "all") {
//         filteredCourses = courseData.filter(
//           (course) => course.category?.toLowerCase() === selectedCategory
//         );
//       }

//       setCourses(filteredCourses);
//       setPage(1);
//       setVisibleCourses(filteredCourses.slice(0, coursesPerPage));
//     }
//   }, [allCoursesData, searchData, searchTitle, selectedCategory]);

//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategory(categoryId);

//     if (courseRef.current) {
//       courseRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const loadMoreCourses = () => {
//     const nextPage = page + 1;
//     const nextCourses = courses.slice(0, nextPage * coursesPerPage);
//     setVisibleCourses(nextCourses);
//     setPage(nextPage);
//   };

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//   };

//   return (
//     <div className="bg-[#FAF9F6] dark:bg-[#383838] min-h-screen">
//       {/* Hero Section - Modernized with overlay and cleaner design */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 opacity-90"></div>
//         <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center mix-blend-overlay"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//           <div className="max-w-2xl">
//             <div className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/20">
//               <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
//               <span className="text-sm font-medium text-white">
//                 {searchTitle ? "Search Results" : "Explore Our Collection"}
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
//               {searchTitle ? (
//                 <>Results for <span className="text-blue-200">"{searchTitle}"</span></>
//               ) : (
//                 <>Elevate Your <span className="text-blue-200">Skills</span> & Career</>
//               )}
//             </h1>

//             <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-xl leading-relaxed">
//               Access expert-led courses designed to accelerate your career and 
//               help you master the most in-demand skills for today's market.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={() => handleCategoryClick("all")}
//                 className="group px-6 py-3.5 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 focus:ring-4 focus:ring-white/30 focus:outline-none"
//               >
//                 <span className="flex items-center">
//                   Browse All Courses
//                   <ChevronRight className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300" size={18} />
//                 </span>
//               </button>
//               <button className="group px-6 py-3.5 bg-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-white/30 focus:outline-none">
//                 <span className="flex items-center">
//                   Start Learning Free
//                   <Zap className="ml-1.5 group-hover:scale-110 transition-transform duration-300" size={18} />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search Bar - New Addition */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-10 relative z-10">
//         <div className="bg-white dark:bg-[#2d2d2d] rounded-xl shadow-xl p-4 flex flex-col md:flex-row gap-4">
//           <div className="flex-1 relative">
//             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//               <Search size={20} className="text-gray-400 dark:text-gray-500" />
//             </div>
//             <input 
//               type="text" 
//               placeholder="Search for courses, topics, or skills..." 
//               className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-transparent dark:text-white"
//             />
//           </div>
//           <div className="flex-none">
//             <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
//               Find Courses
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section - Refined with better spacing and visual hierarchy */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-16">
//         <div className="text-center mb-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
//             Popular Categories
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Explore our most sought-after learning paths tailored for today's in-demand skills
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           <div className="group bg-white dark:bg-[#2d2d2d] rounded-xl shadow-sm hover:shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
//             <div className="flex items-center justify-between mb-4">
//               <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
//                 <Code className="text-blue-600 dark:text-blue-400" />
//               </div>
//               <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 py-1 px-2 rounded-full">
//                 40+ Courses
//               </span>
//             </div>
//             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//               Web Development
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               Master modern frameworks, APIs, and full-stack development
//             </p>
//             <button
//               onClick={() => handleCategoryClick("web")}
//               className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
//             >
//               Explore category
//               <ChevronRight className="ml-1" size={16} />
//             </button>
//           </div>

//           <div className="group bg-white dark:bg-[#2d2d2d] rounded-xl shadow-sm hover:shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
//             <div className="flex items-center justify-between mb-4">
//               <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg">
//                 <Smartphone className="text-indigo-600 dark:text-indigo-400" />
//               </div>
//               <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 py-1 px-2 rounded-full">
//                 25+ Courses
//               </span>
//             </div>
//             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//               Mobile Development
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               Build iOS, Android & cross-platform applications
//             </p>
//             <button
//               onClick={() => handleCategoryClick("mobile")}
//               className="text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
//             >
//               Explore category
//               <ChevronRight className="ml-1" size={16} />
//             </button>
//           </div>

//           <div className="group bg-white dark:bg-[#2d2d2d] rounded-xl shadow-sm hover:shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
//             <div className="flex items-center justify-between mb-4">
//               <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
//                 <Palette className="text-purple-600 dark:text-purple-400" />
//               </div>
//               <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 py-1 px-2 rounded-full">
//                 30+ Courses
//               </span>
//             </div>
//             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//               Design
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               Master UI/UX, brand, and product design principles
//             </p>
//             <button
//               onClick={() => handleCategoryClick("design")}
//               className="text-purple-600 dark:text-purple-400 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
//             >
//               Explore category
//               <ChevronRight className="ml-1" size={16} />
//             </button>
//           </div>

//           <div className="group bg-white dark:bg-[#2d2d2d] rounded-xl shadow-sm hover:shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
//             <div className="flex items-center justify-between mb-4">
//               <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-lg">
//                 <BarChart2 className="text-teal-600 dark:text-teal-400" />
//               </div>
//               <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 py-1 px-2 rounded-full">
//                 20+ Courses
//               </span>
//             </div>
//             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//               Data Science
//             </h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               Learn data analysis, visualization & machine learning
//             </p>
//             <button
//               onClick={() => handleCategoryClick("data")}
//               className="text-teal-600 dark:text-teal-400 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
//             >
//               Explore category
//               <ChevronRight className="ml-1" size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Featured Courses Highlight - New Addition */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-lg">
//           <div className="px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between">
//             <div className="text-center md:text-left mb-8 md:mb-0">
//               <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
//                 <Sparkles className="text-yellow-300 mr-2" size={16} />
//                 <span className="text-sm font-medium text-white">Featured Collection</span>
//               </div>
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Latest AI & ML Specialization</h2>
//               <p className="text-blue-100 md:max-w-lg mb-6">
//                 Master the fundamentals of artificial intelligence and machine learning with our expert-crafted curriculum and hands-on projects.
//               </p>
//               <button 
//                 onClick={() => handleCategoryClick("ai/ml")}
//                 className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 inline-flex items-center"
//               >
//                 Explore AI Courses
//                 <ArrowRight className="ml-2" size={18} />
//               </button>
//             </div>
//             <div className="flex-none hidden md:block">
//               <div className="relative w-64 h-64">
//                 <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-blue-500/30 rounded-full blur-2xl"></div>
//                 <div className="absolute -left-8 -top-8 w-32 h-32 bg-indigo-500/30 rounded-full blur-xl"></div>
//                 <div className="relative z-10">
//                   <Image 
//                     src="/api/placeholder/300/300" 
//                     alt="AI Learning" 
//                     width={300} 
//                     height={300}
//                     className="object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content - Course List with refined UI */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
//         <div className="mb-10" ref={courseRef}>
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                 {selectedCategory === "all"
//                   ? "All Courses"
//                   : `${categories.find((e) => e.id === selectedCategory)?.name}`}
//               </h2>
//               <p className="text-gray-600 dark:text-gray-400">
//                 {courses?.length || 0} courses available to help you grow
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
//               <div className="relative inline-block">
//                 <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                   <Filter size={16} className="text-gray-500 dark:text-gray-400" />
//                 </div>
//                 <select 
//                   value={sortOption}
//                   onChange={handleSortChange}
//                   className="appearance-none bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 rounded-lg pl-10 pr-8 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:text-white"
//                 >
//                   <option value="newest">Newest</option>
//                   <option value="popular">Most Popular</option>
//                   <option value="rated">Highest Rated</option>
//                   <option value="priceAsc">Price: Low to High</option>
//                   <option value="priceDesc">Price: High to Low</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                   <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-6 -mx-2 px-2">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => handleCategoryClick(category.id)}
//                 className={`flex-none whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center ${
//                   selectedCategory === category.id
//                     ? "bg-blue-600 text-white shadow-md"
//                     : "bg-white text-gray-700 dark:bg-[#2d2d2d] dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#353535]"
//                 }`}
//               >
//                 <span className="mr-2">{category.icon}</span>
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div>
//           {allLoading || searchLoading ? (
//             <div className="flex flex-col justify-center items-center h-64 md:h-80">
//               <div className="relative w-16 h-16">
//                 <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-100 dark:border-blue-900/30 rounded-full"></div>
//                 <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
//               </div>
//               <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
//                 Loading courses...
//               </p>
//             </div>
//           ) : (
//             <>
//               {courses && courses.length > 0 ? (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//                     {visibleCourses.map((item, index) => (
//                       <div
//                         key={index}
//                         className="group bg-white dark:bg-[#2d2d2d] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col transform hover:-translate-y-1"
//                       >
//                         <div className="relative">
//                           {index % 3 === 0 && (
//                             <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-md z-10 flex items-center">
//                               <Sparkles size={14} className="mr-1" />
//                               Featured
//                             </div>
//                           )}
//                           {index % 7 === 0 && (
//                             <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-md z-10 flex items-center">
//                               <Zap size={14} className="mr-1" />
//                               New
//                             </div>
//                           )}
//                         </div>
//                         <CourseCard item={item} />
                        
//                         {/* Additional course info badges - New Addition */}
//                         <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] flex items-center justify-between">
//                           <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
//                             <div className="flex items-center">
//                               <Clock size={14} className="mr-1" />
//                               <span>{10 + index} hours</span>
//                             </div>
//                             <div className="flex items-center">
//                               <Star size={14} className="mr-1 text-yellow-500" />
//                               <span>{(4 + index % 1.5).toFixed(1)}/5.0</span>
//                             </div>
//                           </div>
//                           <span className="text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 py-1 px-2 rounded">
//                             {index % 2 === 0 ? "Beginner" : "Intermediate"}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {visibleCourses.length < courses.length && (
//                     <div className="flex justify-center mt-12">
//                       <button
//                         onClick={loadMoreCourses}
//                         className="group bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200"
//                       >
//                         <span>Load More Courses</span>
//                         <ChevronDown className="ml-1 group-hover:translate-y-1 transition-transform" size={18} />
//                       </button>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <div className="bg-white dark:bg-[#2d2d2d] rounded-xl p-10 text-center shadow-md border border-gray-100 dark:border-gray-700">
//                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-6">
//                     <AlertCircle
//                       className="text-gray-500 dark:text-gray-400"
//                       size={32}
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                     {searchTitle
//                       ? "No matching courses found"
//                       : "No courses available yet"}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
//                     {searchTitle
//                       ? "We couldn't find any courses matching your criteria. Try adjusting your search or browse other categories."
//                       : "We're working on adding new courses to this category. Please check back soon or explore other categories."}
//                   </p>
//                   <button
//                     onClick={() => handleCategoryClick("all")}
//                     className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
//                   >
//                     Browse all courses
//                     <ArrowRight className="ml-1" size={18} />
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
      
//       {/* Newsletter Section - New Addition */}
//       <div className="bg-[#F1F0EB] dark:bg-[#303030] py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
//             <div className="md:w-1/2">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
//                 Stay Updated with New Courses
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 mb-6 md:pr-12">
//                 Join our newsletter to receive notifications about new courses, special offers, and expert tips to advance your skills.
//               </p>
//             </div>
//             <div className="md:w-1/2">
//               <div className="bg-white dark:bg-[#2d2d2d] p-6 rounded-xl shadow-sm">
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <input 
//                     type="email" 
//                     placeholder="Your email address" 
//                     className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-transparent dark:text-white"
//                   />
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex-none">
//                     Subscribe
//                   </button>
//                 </div>
//                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
//                   By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Back to Top Button - New Addition */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
//         >
//           <ChevronUp size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AllCourses;