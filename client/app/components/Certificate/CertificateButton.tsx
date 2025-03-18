"use client";
import React from "react";
import { generateCertificate } from "./CertificateGenerator";

interface CertificateButtonProps {
  studentName: string;
  courseName: string;
}

const CertificateButton: React.FC<CertificateButtonProps> = ({
  studentName,
  courseName,
}) => {
  const handleDownload = () => {
    generateCertificate({
      studentName,
      courseName,
      completionDate: new Date().toLocaleDateString(),
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-xl text-sm"
    >
      Download Certificate
    </button>
  );
};

export default CertificateButton;
