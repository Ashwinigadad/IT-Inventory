"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white px-6 md:px-16 w-full py-16">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Platform
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="text-[#6C63FF] text-base leading-relaxed md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              In today’s digital-first world, managing IT assets efficiently is
              essential. Our platform simplifies and centralizes asset tracking
              covering hardware, software, licenses, and lifecycles. Designed
              for startups to enterprises, it ensures nothing is lost or
              overlooked. With modern architecture and enterprise-grade
              security, we help you stay compliant, audit-ready, and in control.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/aboutgraphic.png"
              alt="About Platform Graphic"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
