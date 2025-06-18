"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-[#6C63FF] py-16 text-center text-white">
      <motion.h1
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h1>

      <motion.div
        className="bg-[#7e76f4] text-white p-8 rounded-lg max-w-xl mx-auto shadow"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-[#ccc] mx-auto mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.h4
          className="font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
        >
          Kiran N
        </motion.h4>
        <motion.p
          className="text-sm mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
        >
          Infrastructure lead, Softlane Technologies
        </motion.p>
        <motion.p
          className="text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          viewport={{ once: true }}
        >
          With this platform, we streamlined our IT operations and reduced
          untracked assets by 70%.
        </motion.p>
      </motion.div>
    </section>
  );
}
