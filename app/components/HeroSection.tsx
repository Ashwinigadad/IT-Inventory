"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div id="home" className="text-center text-white max-w-3xl mt-10 mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Stop Losing Track of Your IT - Start Gaining Control!
      </motion.h1>

      <motion.p
        className="text-lg mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Tired of spreadsheets, guesswork, and outdated tools?
      </motion.p>

      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Welcome to the smarter way to manage your IT assets — effortless,
        accurate, and lightning-fast.
      </motion.p>
    </div>
  );
}
