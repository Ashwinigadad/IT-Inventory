"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyWeBuilt() {
  const points = [
    "Gain complete visibility into their assets",
    "Eliminate redundancy and reduce risk",
    "Save time and streamline operations",
    "Make data-driven decisions with confidence",
  ];

  return (
    <motion.section
      className="bg-white px-6 md:px-16 w-full h-120"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Why We Built This
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base leading-relaxed text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          We’ve seen how chaotic IT environments can become — scattered
          spreadsheets, manual tracking, missed renewals, and compliance issues.
          We built this platform to change that. Our mission is to give IT teams
          the tools they need to:
        </motion.p>

        <motion.div
          className="border border-[#6C63FF] rounded-lg p-6 max-w-3xl mx-auto space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 bg-[#6C63FF] text-white p-3 rounded-full font-semibold shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-lg">•</span>
              <span>{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
