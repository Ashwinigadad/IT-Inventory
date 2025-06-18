"use client";

import { motion } from "framer-motion";
import {
  FaDatabase,
  FaSyncAlt,
  FaClipboardCheck,
  FaUserShield,
  FaFileAlt,
  FaPuzzlePiece,
} from "react-icons/fa";

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
      <motion.h1
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <p className="font-medium">{feature.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
