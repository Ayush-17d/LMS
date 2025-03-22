import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import webimage from "../../../public/assests/webcam-7109621_1280.png";
import { TbBulb } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { TiGroupOutline } from "react-icons/ti";
import { BsStars } from "react-icons/bs";
import { TbFlag } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
import { PiStudentDuotone } from "react-icons/pi";
import image1 from "../../../public/assests/mission.png";
import image2 from "../../../public/assests/premium_vector-1725434523138-8dbce19c0e45.avif";
import image3 from "../../../public/assests/classroom.avif";
import image4 from "../../../public/assests/team.avif";

type Props = {};

const About = (props: Props) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-[#FAF9F6] dark:bg-[#383838] py-16 md:py-24 overflow-hidden border-b border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gray-200 dark:bg-gray-700 transform -skew-x-12"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gray-200 dark:bg-gray-700 transform skew-x-12"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white"
            >
              About{" "}
              <span className="text-blue-600 dark:text-blue-400">
                LearnifyHub
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-700 dark:text-gray-300"
            >
              Transforming education by connecting teachers and learners through
              innovative technology.
            </motion.p>
            <motion.a
              href="/courses"
              variants={fadeInUp}
              className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-md shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
            >
              Explore Our Courses
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              LearnifyHub was born from a passion for education and a vision to
              make learning accessible to everyone, everywhere.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={webimage}
                  alt="LearnifyHub Journey"
                  className="w-full object-cover h-80 md:h-96 transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-4"
            >
              <motion.p
                variants={fadeInRight}
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Founded in 2023, LearnifyHub started as a small project to
                bridge the gap between educators and students. Today, it's a
                thriving platform hosting thousands of courses across diverse
                subjects.
              </motion.p>
              <motion.p
                variants={fadeInRight}
                className="text-gray-700 dark:text-gray-300 text-lg"
              >
                Our mission is simple: empower teachers to share their expertise
                and enable students to pursue their passions with flexible,
                high-quality learning experiences.
              </motion.p>
              <motion.div variants={fadeInRight} className="pt-2">
                <a
                  href="/mission"
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                >
                  Learn more about our mission
                  <IoArrowForward className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white dark:bg-[#2D2D2D] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <FiBookOpen className="w-10 h-10" />,
                title: "Accessibility",
                desc: "Education for all, anytime, anywhere.",
              },
              {
                icon: <TbBulb className="w-10 h-10" />,
                title: "Innovation",
                desc: "Pushing the boundaries of e-learning.",
              },
              {
                icon: <TiGroupOutline className="w-10 h-10" />,
                title: "Community",
                desc: "Fostering collaboration and growth.",
              },
              {
                icon: <BsStars className="w-10 h-10" />,
                title: "Excellence",
                desc: "Delivering top-tier learning experiences.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#FAF9F6] dark:bg-[#2A2A2A] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-700"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="bg-gradient-to-r text-blue-600 dark:text-blue-400 w-full h-full transform -skew-y-6"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:pr-12"
            >
              <motion.div variants={fadeIn} className="mb-4">
                <span className="inline-block py-1 px-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-md text-sm font-medium tracking-wide">
                  OUR MISSION
                </span>
              </motion.div>
              <motion.h1
                variants={slideUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className={""}>Education</span> Without{" "}
                <span className={""}>Boundaries</span>
              </motion.h1>
              <motion.p
                variants={slideUp}
                className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-xl"
              >
                We're breaking down barriers to knowledge and creating a world
                where quality education is accessible to everyone, regardless of
                location or background.
              </motion.p>
              <motion.div variants={slideUp} className="flex flex-wrap gap-4">
                <a
                  href="/mission"
                  className={`px-8 py-3 ${""} text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center group`}
                >
                  Join Our Mission{" "}
                  <IoArrowForward className="ml-2 group-hover:translate-x-1 transition-all duration-300" />
                </a>
                <a
                  href="/mission"
                  className="px-8 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-md shadow-md hover:shadow-lg border border-gray-300 dark:border-gray-700 transition-all duration-300"
                >
                  Our Story
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideRight}
              className="hidden lg:block"
            >
              <div className="relative h-full w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={image1}
                  alt="Students engaged in digital learning"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Reimagined */}
      <section className="py-20 bg-[#F5F7FA] dark:bg-[#1F2937] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image2}
                      alt="Team collaboration"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={image3}
                      alt="Digital classroom"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="h-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image4}
                    alt="Educators working together"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeIn} className="mb-4">
                <span className="inline-block py-1 px-4 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-sm font-medium tracking-wide">
                  OUR TEAM
                </span>
              </motion.div>
              <motion.h2
                variants={slideUp}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Passionate Educators & Innovators
              </motion.h2>
              <motion.div
                variants={fadeIn}
                className="w-16 h-1 bg-purple-600 dark:bg-purple-500 mb-6"
              ></motion.div>
              <motion.p
                variants={slideUp}
                className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              >
                Our diverse team of educators, technologists, and learning
                designers are united by a shared passion for transforming how
                people learn and grow.
              </motion.p>
              <motion.p
                variants={slideUp}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              >
                Together, we're building a future where quality education is not
                a privilege but a fundamental right accessible to everyone.
              </motion.p>
              <motion.a
                variants={slideUp}
                href="/our-team"
                className={`px-8 py-3 ${""} text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center group`}
              >
                Meet Our Team{" "}
                <IoArrowForward className="ml-2 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-12 md:py-16 bg-[#FAF9F6] dark:bg-[#383838]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Our Milestones
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex justify-between items-center relative">
                {[
                  {
                    year: "2023",
                    event: "LearnifyHub Founded",
                    icon: <TbFlag className="w-8 h-8" />,
                  },
                  {
                    year: "2024",
                    event: "Launched 100+ Courses",
                    icon: <FiBookOpen className="w-8 h-8" />,
                  },
                  {
                    year: "2025",
                    event: "Reached 10K Students",
                    icon: <PiStudentDuotone className="w-8 h-8" />,
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="w-1/3 px-4"
                  >
                    <div
                      className={`flex flex-col ${
                        index % 2 === 0 ? "items-center" : "items-center"
                      }`}
                    >
                      <div className="w-14 h-14 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10 mb-3 shadow-lg">
                        <div className="text-white">{milestone.icon}</div>
                      </div>
                      <div
                        className={`text-center ${
                          index % 2 === 0 ? "mt-0" : "mt-0"
                        }`}
                      >
                        <div className="bg-white dark:bg-[#2D2D2D] p-5 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl">
                          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            {milestone.year}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 font-medium">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-8">
                {[
                  {
                    year: "2023",
                    event: "LearnifyHub Founded",
                    icon: <TbFlag className="w-5 h-5" />,
                  },
                  {
                    year: "2024",
                    event: "Launched 100+ Courses",
                    icon: <FiBookOpen className="w-5 h-5" />,
                  },
                  {
                    year: "2025",
                    event: "Reached 10K Students",
                    icon: <PiStudentDuotone className="w-5 h-5" />,
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                    className="flex items-start"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10 mt-1 mr-5 shadow-md">
                      <div className="text-white">{milestone.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white dark:bg-[#2D2D2D] p-3 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {milestone.year}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2D2D2D] dark:bg-[#1A1A1A] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Start Your Learning Journey Today
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-300"
            >
              Join thousands of learners and educators on LearnifyHub. Discover
              courses that inspire and empower.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
              >
                Join LearnifyHub
              </a>
              <a
                href="/teachers"
                className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
              >
                Become a Teacher
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
