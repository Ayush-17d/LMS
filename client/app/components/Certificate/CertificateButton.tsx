// "use client";
// import React from "react";
// import { generateCertificate } from "./CertificateGenerator";

// interface CertificateButtonProps {
//   studentName: string;
//   courseName: string;
// }

// const CertificateButton: React.FC<CertificateButtonProps> = ({
//   studentName,
//   courseName,
// }) => {
//   const handleDownload = () => {
//     generateCertificate({
//       studentName,
//       courseName,
//       completionDate: new Date().toLocaleDateString(),
//     });
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       className="bg-green-600 hover:bg-green-800 text-white mt-6 px-4 py-2 rounded-xl text-sm"
//     >
//       Download Certificate
//     </button>
//   );
// };

// export default CertificateButton;
"use client";
import React from "react";
import { generateCertificate } from "./CertificateGenerator";

interface CertificateButtonProps {
  studentName: string;
  courseName: string;
  disabled?: boolean; // Added disabled prop
}

const CertificateButton: React.FC<CertificateButtonProps> = ({
  studentName,
  courseName,
  disabled,
}) => {
  const handleDownload = () => {
    if (!disabled) {
      generateCertificate({
        studentName,
        courseName,
        completionDate: new Date().toLocaleDateString(),
      });
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      className={`mt-6 px-4 py-2 uppercase rounded-xl text-sm text-white font-semibold transition-all duration-300 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed opacity-50"
          : "bg-green-600 hover:bg-green-800 active:bg-green-900"
      }`}
    >
      get Certificate
    </button>
  );
};

export default CertificateButton;
