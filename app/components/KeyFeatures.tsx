"use client";

import { FaDatabase, FaSyncAlt, FaClipboardCheck, FaUserShield, FaFileAlt, FaPuzzlePiece } from "react-icons/fa";

export default function KeyFeatures() {
  const features = [
    {
      label: "Unified Asset Repository",
      icon: <FaDatabase size={30} className="text-[#6C63FF]" />,
    },
    {
      label: "Real-Time Sync & Auto-Discovery",
      icon: <FaSyncAlt size={30} className="text-[#6C63FF]" />,
    },
    {
      label: "License & Warranty Monitoring",
      icon: <FaClipboardCheck size={30} className="text-[#6C63FF]" />,
    },
    {
      label: "Role-Based Access Control",
      icon: <FaUserShield size={30} className="text-[#6C63FF]" />,
    },
    {
      label: "Compliance Ready Reporting",
      icon: <FaFileAlt size={30} className="text-[#6C63FF]" />,
    },
    {
      label: "Integration Friendly",
      icon: <FaPuzzlePiece size={30} className="text-[#6C63FF]" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 text-center w-full text-black">
      <h2 className="text-3xl font-bold mb-10">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <p className="font-medium">{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
