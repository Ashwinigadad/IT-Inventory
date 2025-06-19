"use client";

import { motion } from "framer-motion";

export default function IndustriesSection() {
  const industries = [
    "IT Administrators and System Engineers",
    "Educational Institutions",
    "Healthcare Providers",
    "Government Agencies",
    "Startups",
    "Enterprises",
  ];

  return (
    <section className="w-full bg-[#6C63FF] py-16 px-6 flex flex-col items-center">
      <motion.h1
        className="text-white text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Industry we Serve
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {industries.map((industry) => (
          <motion.div
            key={industry}
            className="border border-white text-white text-center px-6 py-6 rounded-xl text-sm sm:text-base font-medium shadow-md hover:shadow-xl transition-all duration-300 bg-[#6C63FF]/80 backdrop-blur-sm"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {industry}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
