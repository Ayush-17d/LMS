// import Image from 'next/image';
// import React from 'react';
// import img1 from "../../../public/assests/about3.webp"

// type Props = {};

// const Teachers = (props: Props) => {
//   const teachers = [
//     {
//       name: 'Marques Brownlee',
//       profession: 'Youtuber, Podcaster',
//       image: img1,
//     },
//     {
//       name: 'Marques Brownlee',
//       profession: 'Youtuber, Podcaster',
//       image: img1,
//     },
//     {
//       name: 'Marques Brownlee',
//       profession: 'Youtuber, Podcaster',
//       image: img1,
//     },
//     {
//       name: 'Marques Brownlee',
//       profession: 'Youtuber, Podcaster',
//       image: img1,
//     },
//     {
//       name: 'Marques Brownlee',
//       profession: 'Youtuber, Podcaster',
//       image: img1,
//     },
//     {
//       name: 'Marques Brownlee',
//       profession: 'Youtuber, Podcaster',
//       image: img1,
//     },
    
//   ];

//   return (
//     <div className="bg-white text-black py-10 px-5 text-center mt-[8%]">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn from Creative Experts</h1>
//       <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
//         LearnifyHub classes are taught by industry leaders excited to share their
//         tools, techniques, and professional journeys with you.
//       </p>
//       <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
//         {teachers.map((teacher, index) => (
//           <div key={index} className="relative overflow-hidden h-52">
//             <Image
//               src={teacher.image}
//               alt={teacher.name}
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full"
//             />
//             <div className="absolute bottom-3 left-3 text-left">
//               <h3 className="text-lg font-bold uppercase text-white">{teacher.name}</h3>
//               <p className="text-sm text-white">{teacher.profession}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Teachers;
import Image from 'next/image';
import React from 'react';
import img1 from "../../../public/assests/about3.webp"

type Props = {};

const Teachers = (props: Props) => {
  const teachers = [
    {
      name: 'om',
      profession: 'Youtuber, Podcaster',
      image: img1,
    },
    {
      name: 'ayush',
      profession: 'Youtuber, Podcaster',
      image: img1,
    },
    {
      name: 'gotu',
      profession: 'Youtuber, Podcaster',
      image: img1,
    },
    {
      name: 'vraj',
      profession: 'Youtuber, Podcaster',
      image: img1,
    },
    {
      name: 'bhikho',
      profession: 'Youtuber, Podcaster',
      image: img1,
    },
    {
      name: 'kalu',
      profession: 'Youtuber, Podcaster',
      image: img1,
    },
  ];

  return (
    <div className="bg-white text-black py-12 px-6 text-center mt-[8%] relative overflow-hidden">
      {/* Skillshare-inspired SVG Background */}
      <svg 
        className="absolute top-0 left-0 w-full h-full z-0" 
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        {/* Subtle angled line - Top Left */}
        <line
          x1="0"
          y1="0"
          x2="400"
          y2="200"
          stroke="#E5E7EB"
          strokeWidth="4"
          opacity="0.6"
        />
        {/* Diagonal rectangle - Bottom Right */}
        <path
          d="M1000,600 L1440,500 L1440,800 L900,800 Z"
          fill="#F3F4F6"
          opacity="0.5"
        />
        {/* Small circle accent - Middle */}
        <circle
          cx="720"
          cy="400"
          r="40"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="2"
          opacity="0.7"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Learn from Creative Experts
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          LearnifyHub classes are taught by industry leaders excited to share their
          tools, techniques, and professional journeys with you.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teachers.map((teacher, index) => (
            <div key={index} className="relative overflow-hidden h-64 rounded-lg shadow-sm">
              <Image
                src={teacher.image}
                alt={teacher.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">{teacher.name}</h3>
                <p className="text-sm text-gray-200">{teacher.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;