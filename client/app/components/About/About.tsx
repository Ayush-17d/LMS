import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div>About</div>
  )
}

export default About

// import React from 'react';
// import { motion } from 'framer-motion';

// type Props = {};

// const About = (props: Props) => {
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//   };

//   const staggerChildren = {
//     visible: { transition: { staggerChildren: 0.2 } },
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 text-white py-24 md:py-36 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-64f36b3d2c37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="text-center">
//             <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
//               About LearnifyHub
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
//               Transforming education by connecting teachers and learners through innovative technology.
//             </motion.p>
//             <motion.a
//               href="/courses"
//               variants={fadeInUp}
//               className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
//             >
//               Explore Our Courses
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 md:py-28">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               LearnifyHub was born from a passion for education and a vision to make learning accessible to everyone, everywhere.
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1516321318423-8b392d6c16c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//                 alt="LearnifyHub Journey"
//                 className="rounded-xl shadow-lg w-full object-cover h-80 md:h-96"
//               />
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerChildren}
//               className="space-y-6"
//             >
//               <motion.p variants={fadeInUp} className="text-gray-700 text-lg">
//                 Founded in 2023, LearnifyHub started as a small project to bridge the gap between educators and students. Today, it’s a thriving platform hosting thousands of courses across diverse subjects.
//               </motion.p>
//               <motion.p variants={fadeInUp} className="text-gray-700 text-lg">
//                 Our mission is simple: empower teachers to share their expertise and enable students to pursue their passions with flexible, high-quality learning experiences.
//               </motion.p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="bg-white py-20 md:py-28">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
//           >
//             Our Core Values
//           </motion.h2>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {[
//               {
//                 icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
//                 title: "Accessibility",
//                 desc: "Education for all, anytime, anywhere.",
//               },
//               {
//                 icon: "M13 10V3L4 14h7v7l9-11h-7z",
//                 title: "Innovation",
//                 desc: "Pushing the boundaries of e-learning.",
//               },
//               {
//                 icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 1.857h5M12 6v6h4",
//                 title: "Community",
//                 desc: "Fostering collaboration and growth.",
//               },
//               {
//                 icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
//                 title: "Excellence",
//                 desc: "Delivering top-tier learning experiences.",
//               },
//             ].map((value, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
//               >
//                 <svg
//                   className="w-12 h-12 mx-auto text-blue-600 mb-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon} />
//                 </svg>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
//                 <p className="text-gray-600">{value.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Milestones Section */}
//       <section className="py-20 md:py-28 bg-gray-100">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
//           >
//             Our Milestones
//           </motion.h2>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//             className="relative max-w-4xl mx-auto"
//           >
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
//             {[
//               { year: "2023", event: "LearnifyHub Founded" },
//               { year: "2024", event: "Launched 100+ Courses" },
//               { year: "2025", event: "Reached 10K Students" },
//             ].map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
//               >
//                 <div className="w-1/2 px-6">
//                   <div className="bg-white p-4 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold text-gray-800">{milestone.year}</h3>
//                     <p className="text-gray-600">{milestone.event}</p>
//                   </div>
//                 </div>
//                 <div className="w-1/2 flex justify-center">
//                   <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
//         <div className="container mx-auto px-4 md:px-6 text-center">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-3xl md:text-4xl font-bold mb-6"
//           >
//             Start Your Learning Journey Today
//           </motion.h2>
//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
//           >
//             Join thousands of learners and educators on LearnifyHub. Discover courses that inspire and empower.
//           </motion.p>
//           <motion.a
//             href="/signup"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="inline-block bg-white text-indigo-600 font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
//           >
//             Sign Up Now
//           </motion.a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;