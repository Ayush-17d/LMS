// import { useUpdateUserRoleMutation } from "@/redux/features/user/userApi";
// import React, { FC, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";

// type Props = {
//   user: any;
// };

// const Teacher: FC<Props> = ({ user }) => {
//   const [role, setRole] = useState(user.role);
//   const [open, setOpen] = useState(false);
//   const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();

//   const handleRoleUpdate = async () => {
//     try {
//       await updateUserRole({
//         userId: user._id,
//         role: "admin",
//       }).unwrap();
//       setRole("admin");
//       setOpen(false);
//       toast.success(
//         <div className="flex items-center space-x-2">
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//           <span>Role upgraded to Admin successfully!</span>
//         </div>,
//         {
//           duration: 4000,
//           position: "top-right",
//           style: {
//             background: "#059669",
//             color: "#fff",
//             padding: "12px 20px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           },
//         }
//       );
//     } catch (err) {
//       console.error("Failed to update role:", err);
//       toast.error(
//         <div className="flex items-center space-x-2">
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//           <span>Failed to upgrade role. Try again!</span>
//         </div>,
//         {
//           duration: 4000,
//           position: "top-right",
//           style: {
//             background: "#DC2626",
//             color: "#fff",
//             padding: "12px 20px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           },
//         }
//       );
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-12">
//       {/* Toaster Component */}
//       <Toaster />

//       {/* Card Container */}
//       <div className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl p-8 transform hover:shadow-3xl transition-all duration-300">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <div className="bg-indigo-100 p-3 rounded-full">
//               <svg
//                 className="w-6 h-6 text-indigo-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                 />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-2xl font-extrabold text-gray-900">
//                 Role Status
//               </h3>
//               <p className="text-gray-600 mt-1">
//                 Current:{" "}
//                 <span className="font-semibold text-indigo-700 capitalize">
//                   {role}
//                 </span>
//               </p>
//             </div>
//           </div>
//           {role !== "admin" && (
//             <button
//               onClick={() => setOpen(true)}
//               className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               Upgrade to Admin
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div
//             className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
//             style={{
//               animation: "fadeIn 0.3s ease-in-out",
//               keyframes: `
//                 @keyframes fadeIn {
//                   from { opacity: 0; transform: translateY(-10px); }
//                   to { opacity: 1; transform: translateY(0); }
//                 }
//               `,
//             }}
//           >
//             <div className="flex items-center space-x-3 mb-4">
//               <svg
//                 className="w-6 h-6 text-indigo-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <h4 className="text-xl font-bold text-gray-900">
//                 Confirm Role Upgrade
//               </h4>
//             </div>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to upgrade to Admin? This will unlock
//               advanced permissions and features.
//             </p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-full font-medium transition-all duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleRoleUpdate}
//                 disabled={isLoading}
//                 className={`bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 ${
//                   isLoading
//                     ? "opacity-60 cursor-not-allowed"
//                     : "hover:shadow-xl"
//                 }`}
//               >
//                 {isLoading ? (
//                   <span className="flex items-center space-x-2">
//                     <svg
//                       className="w-5 h-5 animate-spin"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       />
//                     </svg>
//                     <span>Updating...</span>
//                   </span>
//                 ) : (
//                   "Confirm"
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Teacher;
import { useUpdateUserRoleMutation } from "@/redux/features/user/userApi";
import React, { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  user: any;
};

const Teacher: FC<Props> = ({ user }) => {
  const [role, setRole] = useState(user.role);
  const [open, setOpen] = useState(false);
  const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();

  // State for questions and answers
  const [answers, setAnswers] = useState({
    teachingYears: "",
    favoriteTopic: "",
    rewardingMoment: "",
    engagementStrategy: "",
    experienceLevel: "", // Dropdown selection
  });

  // Check if all questions are answered
  const allQuestionsAnswered =
    answers.teachingYears.trim() &&
    answers.favoriteTopic.trim() &&
    answers.rewardingMoment.trim() &&
    answers.engagementStrategy.trim() &&
    answers.experienceLevel;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleUpdate = async () => {
    try {
      await updateUserRole({
        userId: user._id,
        role: "admin",
      }).unwrap();
      setRole("admin");
      setOpen(false);
      toast.success("Role upgraded to Admin successfully!", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#10B981",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
        },
      });
    } catch (err) {
      console.error("Failed to update role:", err);
      toast.error("Failed to upgrade role. Try again!", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#EF4444",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
        },
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12">
      {/* Toaster Component */}
      <Toaster />

      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Teacher Questionnaire
        </h3>

        {/* Questions with Input Fields */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              How many years have you been teaching?
            </label>
            <input
              type="text"
              name="teachingYears"
              value={answers.teachingYears}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 5 years"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              What’s your favorite topic to teach?
            </label>
            <input
              type="text"
              name="favoriteTopic"
              value={answers.favoriteTopic}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Mathematics"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              What’s the most rewarding part of your teaching career?
            </label>
            <input
              type="text"
              name="rewardingMoment"
              value={answers.rewardingMoment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Seeing students succeed"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              How do you keep your courses engaging?
            </label>
            <input
              type="text"
              name="engagementStrategy"
              value={answers.engagementStrategy}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Interactive quizzes"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              What’s your experience level?
            </label>
            <select
              name="experienceLevel"
              value={answers.experienceLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="beginner">Beginner (0-2 years)</option>
              <option value="intermediate">Intermediate (2-5 years)</option>
              <option value="expert">Expert (5+ years)</option>
            </select>
          </div>
        </div>

        {/* Role Status and Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600">
              Current Role:{" "}
              <span className="font-semibold text-blue-600 capitalize">
                {role}
              </span>
            </p>
          </div>
          {role !== "admin" && (
            <button
              onClick={() => setOpen(true)}
              disabled={!allQuestionsAnswered}
              className={`px-4 py-2 rounded-lg font-medium text-white transition-colors duration-200 ${
                allQuestionsAnswered
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Change Role to Admin
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Confirm Role Change
            </h4>
            <p className="text-gray-600 mb-5">
              Are you sure you want to upgrade your role to Admin? This will
              grant additional privileges.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleRoleUpdate}
                disabled={isLoading}
                className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Updating..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacher;