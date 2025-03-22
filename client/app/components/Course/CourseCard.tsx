import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { MdOutlineSchool } from "react-icons/md";
import { motion } from "framer-motion";
import imagethumbnail from "../../../public/assests/charlesdeluvio-Lks7vei-eAg-unsplash.jpg";
import { FiShare2 } from "react-icons/fi";

type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
    >
      <motion.div className="w-full min-h-[40vh] bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.03]">
        {/* Thumbnail Section */}
        <div className="relative h-64">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-t-2xl" />
          )}
          <Image
            src={item.thumbnail?.url || imagethumbnail}
            fill
            objectFit="cover"
            className={`rounded-t-2xl transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            alt={item.name}
            onLoadingComplete={() => setImageLoaded(true)}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center text-white bg-gray-800/80 px-3 py-1 rounded-lg">
              <MdOutlineSchool size={18} />
              <span className="ml-2 text-sm font-medium">
                {item.courseData?.length} Lessons
              </span>
            </div>
          </motion.div>
          {item.price === 0 && (
            <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
              Free
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
            {item.name}
          </h2>
          <div className="flex items-center justify-between">
            <Ratings rating={item.ratings} />
            <span
              className={`text-sm text-gray-600 dark:text-gray-400 ${
                isProfile ? "hidden sm:inline" : ""
              }`}
            >
              {item.purchased} Students
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-yellow-600 dark:text-yellow-400">
                {item.price === 0 ? "Free" : `${item.price} ₹`}
              </span>
              {item.price !== 0 && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  {item.estimatedPrice} ₹
                </span>
              )}
            </div>
            <FiShare2
              size={18}
              className="text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
