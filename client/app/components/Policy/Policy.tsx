// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaShieldAlt,
//   FaUserLock,
//   FaClipboardCheck,
//   FaCookieBite,
// } from "react-icons/fa";
// import {
//   MdSecurity,
//   MdPrivacyTip,
//   MdGppGood,
//   MdPeopleAlt,
// } from "react-icons/md";
// import { BiSolidMessageDetail } from "react-icons/bi";

// type Props = {};

// const Policy = (props: Props) => {
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const staggerChildren = {
//     visible: { transition: { staggerChildren: 0.2 } },
//   };

//   const policyItems = [
//     {
//       id: 1,
//       title: "Privacy Policy",
//       icon: <FaUserLock className="text-blue-600 dark:text-blue-400 w-6 h-6" />,
//       summary: "How we collect, use, and protect your personal information.",
//       details: [
//         "Information we collect and why",
//         "How we use your data",
//         "Your privacy rights",
//         "Data retention policies",
//       ],
//     },
//     {
//       id: 2,
//       title: "Terms of Service",
//       icon: <MdGppGood className="text-blue-600 dark:text-blue-400 w-7 h-7" />,
//       summary: "Rules and guidelines for using LearnifyHub's platform.",
//       details: [
//         "User responsibilities",
//         "Content guidelines",
//         "Account termination policies",
//         "Intellectual property rights",
//       ],
//     },
//     {
//       id: 3,
//       title: "Cookie Policy",
//       icon: (
//         <FaCookieBite className="text-blue-600 dark:text-blue-400 w-6 h-6" />
//       ),
//       summary: "How we use cookies and similar technologies.",
//       details: [
//         "Types of cookies we use",
//         "How to manage cookies",
//         "Third-party cookies",
//         "Cookie consent",
//       ],
//     },
//     {
//       id: 4,
//       title: "Community Guidelines",
//       icon: (
//         <MdPeopleAlt className="text-blue-600 dark:text-blue-400 w-7 h-7" />
//       ),
//       summary: "Standards for interacting with others on LearnifyHub.",
//       details: [
//         "Respectful communication",
//         "Content sharing rules",
//         "Prohibited behaviors",
//         "Reporting violations",
//       ],
//     },
//     {
//       id: 5,
//       title: "Data Security",
//       icon: <MdSecurity className="text-blue-600 dark:text-blue-400 w-7 h-7" />,
//       summary: "How we protect your data and maintain platform security.",
//       details: [
//         "Security measures",
//         "Data encryption",
//         "Breach notification policy",
//         "Security certifications",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-800 dark:text-gray-200">
//       {/* Hero Section */}
//       <section className="relative bg-[#FAF9F6] dark:bg-[#383838] py-20 md:py-28 overflow-hidden border-b border-gray-200 dark:border-gray-700">
//         <div className="absolute inset-0 opacity-10 dark:opacity-20">
//           <div className="absolute inset-y-0 left-1/4 w-1/2 bg-gray-200 dark:bg-gray-700 transform rotate-12"></div>
//         </div>
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerChildren}
//             className="text-center"
//           >
//             <motion.div variants={fadeInUp} className="inline-block mb-6">
//               <FaShieldAlt className="w-16 h-16 mx-auto text-blue-600 dark:text-blue-400" />
//             </motion.div>
//             <motion.h1
//               variants={fadeInUp}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
//             >
//               Our{" "}
//               <span className="text-blue-600 dark:text-blue-400">Policies</span>
//             </motion.h1>
//             <motion.p
//               variants={fadeInUp}
//               className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300"
//             >
//               We're committed to transparency, security, and protecting your
//               rights as you learn and teach on LearnifyHub.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Key Policies
//             </h2>
//             <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
//             <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//               These policies help create a safe, respectful, and productive
//               learning environment for everyone.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//             {policyItems.map((item) => (
//               <motion.div
//                 key={item.id}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className="bg-white dark:bg-[#2D2D2D] rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex items-start mb-4">
//                   <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                       {item.summary}
//                     </p>
//                   </div>
//                 </div>
//                 <ul className="space-y-2">
//                   {item.details.map((detail, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center text-gray-700 dark:text-gray-300"
//                     >
//                       <FaClipboardCheck className="text-blue-600 dark:text-blue-400 w-4 h-4 mr-2 flex-shrink-0" />
//                       <span>{detail}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-6">
//                   <a
//                     href={`/policies/${item.title
//                       .toLowerCase()
//                       .replace(/\s+/g, "-")}`}
//                     className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
//                   >
//                     Read full policy
//                     <svg
//                       className="w-4 h-4 ml-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 5l7 7-7 7"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Last Updated Section */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="bg-gray-100 dark:bg-[#2A2A2A] p-6 rounded-lg mb-16 max-w-3xl mx-auto"
//           >
//             <div className="flex items-center mb-2">
//               <MdPrivacyTip className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-2" />
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                 Last Updated
//               </h3>
//             </div>
//             <p className="text-gray-700 dark:text-gray-300 mb-4">
//               Our policies were last updated on{" "}
//               <span className="font-medium">March 1, 2025</span>. We review our
//               policies regularly to ensure they remain clear, comprehensive, and
//               compliant with relevant laws and regulations.
//             </p>
//             <p className="text-gray-700 dark:text-gray-300">
//               When we make significant changes, we'll notify you via email or
//               through an announcement on our platform.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="bg-white dark:bg-[#2D2D2D] py-16 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Frequently Asked Questions
//             </h2>
//             <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
//           </motion.div>

//           <div className="max-w-3xl mx-auto">
//             {[
//               {
//                 question: "How do I request my data be deleted?",
//                 answer:
//                   "You can request data deletion through your account settings under 'Privacy & Data' or by contacting our support team. We'll process your request within 30 days in accordance with applicable laws.",
//               },
//               {
//                 question: "How are my payment details protected?",
//                 answer:
//                   "We use industry-standard encryption and never store your full payment details on our servers. All payment processing is handled by trusted third-party payment processors compliant with PCI DSS standards.",
//               },
//               {
//                 question:
//                   "Can I use LearnifyHub content for my own courses or materials?",
//                 answer:
//                   "Content on LearnifyHub is protected by copyright. You may use content for personal educational purposes, but redistribution or commercial use requires explicit permission from the content creator or LearnifyHub.",
//               },
//               {
//                 question: "How do I report a policy violation?",
//                 answer:
//                   "You can report policy violations through the 'Report' button available on all content pages, or by contacting our Trust & Safety team directly at trust@learnifyhub.com.",
//               },
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//                 className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0"
//               >
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 md:py-24 bg-[#FAF9F6] dark:bg-[#383838]">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <motion.div variants={fadeInUp} className="mb-6">
//               <BiSolidMessageDetail className="w-16 h-16 mx-auto text-blue-600 dark:text-blue-400" />
//             </motion.div>
//             <motion.h2
//               variants={fadeInUp}
//               className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
//             >
//               Still Have Questions?
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-lg text-gray-700 dark:text-gray-300 mb-8"
//             >
//               Our dedicated team is here to help you understand our policies and
//               answer any questions you might have.
//             </motion.p>
//             <motion.div variants={fadeInUp}>
//               <a
//                 href="mailto:learnifyhubplatform@gmail.com?subject=Query%20About%20Learnify%20LMS&body=Hello%20Learnify%20Team,%0D%0A%0D%0AI%20have%20a%20question%20about%20your%20LMS%20platform.%20Could%20you%20please%20assist%20me%20with%20[insert%20your%20query%20here]?%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]"
//                 className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300 inline-block"
//               >
//                 Contact Our Team
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Policy;
import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserLock,
  FaClipboardCheck,
  FaCookieBite,
} from "react-icons/fa";
import {
  MdSecurity,
  MdPrivacyTip,
  MdGppGood,
  MdPeopleAlt,
} from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";

type Props = {};

const Policy = (props: Props) => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const policyItems = [
    {
      id: 1,
      title: "Privacy Policy",
      icon: <FaUserLock className="text-blue-600 dark:text-blue-400 w-6 h-6" />,
      summary: "How we collect, use, and protect your personal information.",
      details: [
        "Information we collect and why",
        "How we use your data",
        "Your privacy rights",
        "Data retention policies",
      ],
    },
    {
      id: 2,
      title: "Terms of Service",
      icon: <MdGppGood className="text-blue-600 dark:text-blue-400 w-7 h-7" />,
      summary: "Rules and guidelines for using LearnifyHub's platform.",
      details: [
        "User responsibilities",
        "Content guidelines",
        "Account termination policies",
        "Intellectual property rights",
      ],
    },
    {
      id: 3,
      title: "Cookie Policy",
      icon: (
        <FaCookieBite className="text-blue-600 dark:text-blue-400 w-6 h-6" />
      ),
      summary: "How we use cookies and similar technologies.",
      details: [
        "Types of cookies we use",
        "How to manage cookies",
        "Third-party cookies",
        "Cookie consent",
      ],
    },
    {
      id: 4,
      title: "Community Guidelines",
      icon: (
        <MdPeopleAlt className="text-blue-600 dark:text-blue-400 w-7 h-7" />
      ),
      summary: "Standards for interacting with others on LearnifyHub.",
      details: [
        "Respectful communication",
        "Content sharing rules",
        "Prohibited behaviors",
        "Reporting violations",
      ],
    },
    {
      id: 5,
      title: "Data Security",
      icon: <MdSecurity className="text-blue-600 dark:text-blue-400 w-7 h-7" />,
      summary: "How we protect your data and maintain platform security.",
      details: [
        "Security measures",
        "Data encryption",
        "Breach notification policy",
        "Security certifications",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#383838] text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-[#FAF9F6] dark:bg-[#383838] py-12 md:py-16 overflow-hidden border-b border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-y-0 left-1/4 w-1/2 bg-gray-200 dark:bg-gray-700 transform rotate-12"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <FaShieldAlt className="w-16 h-16 mx-auto text-blue-600 dark:text-blue-400" />
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white"
            >
              Our{" "}
              <span className="text-blue-600 dark:text-blue-400">Policies</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-4 text-gray-700 dark:text-gray-300"
            >
              We're committed to transparency, security, and protecting your
              rights as you learn and teach on LearnifyHub.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Key Policies
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              These policies help create a safe, respectful, and productive
              learning environment for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {policyItems.map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white dark:bg-[#2D2D2D] rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {item.summary}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <FaClipboardCheck className="text-blue-600 dark:text-blue-400 w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a
                    href={`/policies/${item.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                  >
                    Read full policy
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Last Updated Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gray-100 dark:bg-[#2A2A2A] p-5 rounded-lg mb-10 max-w-3xl mx-auto"
          >
            <div className="flex items-center mb-2">
              <MdPrivacyTip className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Last Updated
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Our policies were last updated on{" "}
              <span className="font-medium">March 1, 2025</span>. We review our
              policies regularly to ensure they remain clear, comprehensive, and
              compliant with relevant laws and regulations.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When we make significant changes, we'll notify you via email or
              through an announcement on our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-[#2D2D2D] py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I request my data be deleted?",
                answer:
                  "You can request data deletion through your account settings under 'Privacy & Data' or by contacting our support team. We'll process your request within 30 days in accordance with applicable laws.",
              },
              {
                question: "How are my payment details protected?",
                answer:
                  "We use industry-standard encryption and never store your full payment details on our servers. All payment processing is handled by trusted third-party payment processors compliant with PCI DSS standards.",
              },
              {
                question:
                  "Can I use LearnifyHub content for my own courses or materials?",
                answer:
                  "Content on LearnifyHub is protected by copyright. You may use content for personal educational purposes, but redistribution or commercial use requires explicit permission from the content creator or LearnifyHub.",
              },
              {
                question: "How do I report a policy violation?",
                answer:
                  "You can report policy violations through the 'Report' button available on all content pages, or by contacting our Trust & Safety team directly at trust@learnifyhub.com.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-5 border-b border-gray-200 dark:border-gray-700 pb-5 last:border-0"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-14 bg-[#FAF9F6] dark:bg-[#383838]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <BiSolidMessageDetail className="w-16 h-16 mx-auto text-blue-600 dark:text-blue-400" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Still Have Questions?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
            >
              Our dedicated team is here to help you understand our policies and
              answer any questions you might have.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="mailto:learnifyhubplatform@gmail.com?subject=Query%20About%20Learnify%20LMS&body=Hello%20Learnify%20Team,%0D%0A%0D%0AI%20have%20a%20question%20about%20your%20LMS%20platform.%20Could%20you%20please%20assist%20me%20with%20[insert%20your%20query%20here]?%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300 inline-block"
              >
                Contact Our Team
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Policy;