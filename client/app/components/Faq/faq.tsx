import React, { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[][] = [
  [
    {
      question: "What makes this LMS unique?",
      answer:
        "Our LMS stands out with its intuitive design, advanced analytics, and seamless integration of interactive tools.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "Sign up, browse our course library, click 'Enroll,' and complete payment for premium courses.",
    },
    {
      question: "Can I track my progress?",
      answer:
        "Yes, track completion rates, quiz scores, and personalized milestones.",
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 7-day free trial for select courses.",
    },
  ],
  [
    {
      question: "Who can create courses?",
      answer:
        "Anyone can sign up and use our course builder to create content.",
    },
    {
      question: "What tools are available for instructors?",
      answer: "Multimedia uploads, quiz generators, and real-time analytics.",
    },
    {
      question: "How are courses priced?",
      answer: "Instructors set prices with options for free or paid access.",
    },
    {
      question: "Can I collaborate?",
      answer: "Yes, co-authoring features enable teamwork.",
    },
  ],
  [
    {
      question: "Is it mobile-friendly?",
      answer: "Yes, fully responsive with a mobile app in development.",
    },
    {
      question: "What learner support is available?",
      answer: "24/7 support, forums, and live Q&A sessions.",
    },
    {
      question: "Are certificates provided?",
      answer: "Yes, earn verifiable digital certificates.",
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Self-paced courses with lifetime access.",
    },
  ],
  [
    {
      question: "How secure is my data?",
      answer: "Top-tier encryption and global privacy standards.",
    },
    {
      question: "What payment methods?",
      answer: "Cards, PayPal, and select cryptocurrencies.",
    },
    {
      question: "Can I request custom courses?",
      answer: "Contact us for tailored course development.",
    },
    {
      question: "How often is content updated?",
      answer: "Regularly updated by instructors.",
    },
  ],
];

const FAQSection = ({ items }: { items: FAQItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-6 w-full space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="faq-item bg-white dark:bg-[#292929] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-5 py-4 flex items-center justify-between bg-white dark:bg-[#292929] hover:bg-gray-100 dark:hover:bg-[#3a3a3a] transition-colors duration-300 rounded-lg focus:outline-none"
          >
            <div className="flex items-center space-x-3">
              <FaQuestionCircle className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <span
                className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                  activeIndex === index
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {item.question}
              </span>
            </div>
            <span className="text-blue-500 dark:text-blue-400 transition-transform duration-300">
              {activeIndex === index ? (
                <FaMinus className="w-5 h-5" />
              ) : (
                <FaPlus className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="px-5 py-4 bg-gray-50 dark:bg-[#3a3a3a] text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm sm:text-base leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FAQ = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const sections = [
    "Getting Started",
    "For Instructors",
    "Learning Experience",
    "Platform Details",
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#1f1f1f] py-12 px-6 sm:px-10 flex items-center justify-center transition-colors duration-500">
      <div className="w-full max-w-4xl lg:max-w-5xl">
        <div className="text-center relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2d2d2d] dark:text-[#f3f4f6] tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="mt-2 w-24 h-1 mx-auto bg-[#2a67ea] dark:bg-[#2a67ea] rounded-full" />
          <p className="mt-3 text-lg text-[#4B4B4B] dark:text-[#D1D5DB] font-medium max-w-2xl mx-auto">
            Explore key insights about our Learning Management System.
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap justify-center mt-6 gap-2 sm:gap-3 mb-10">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-md transition-all duration-300 w-full sm:w-auto ${
                activeSection === index
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-white dark:bg-[#292929] text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-100 dark:hover:bg-[#3a3a3a]"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        {faqData[activeSection] ? (
          <FAQSection items={faqData[activeSection]} />
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No FAQs available.
          </p>
        )}

        {/* Contact Us Section */}
        <div className="text-center mt-10">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Need more help?{" "}
            <a
              href="mailto:learnifyhubplatform@gmail.com?subject=Query%20About%20Learnify%20LMS"
              className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 shadow-md"
            >
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
