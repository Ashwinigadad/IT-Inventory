"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#6C63FF] text-white px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Image src="/logo.png" alt="logo" width={50} height={50} className="rounded-full bg-white p-1" />
          <p className="text-sm leading-relaxed">
            In today’s digital-first world, managing IT assets efficiently is essential. Our platform simplifies and centralizes asset tracking covering hardware, software, licenses, and lifecycles. Designed for startups to enterprises, it ensures nothing is lost or overlooked. With modern architecture and enterprise-grade security, we help you stay compliant, audit-ready, and in control.
          </p>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          {['Home', 'About', 'Features', 'Pricing', 'Contact'].map(link => (
            <p key={link} className="hover:underline cursor-pointer">{link}</p>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2"
        >
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p><strong>Email:</strong> contact@yourdomain.com</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Website:</strong> www.domain.com</p>
          <p><strong>Office Location:</strong></p>
          <p>XYZ Technologies Pvt. Ltd.<br/>3rd Floor, Tech Park, Indiranagar,<br/>Bengaluru – 560038, India</p>
        </motion.div>

        {/* Column 4 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-2"
        >
          <h3 className="font-bold text-lg mb-2">Privacy</h3>
          {['Privacy policy', 'Terms of service', 'Support'].map(link => (
            <p key={link} className="hover:underline cursor-pointer">{link}</p>
          ))}
        </motion.div>
      </div>

      <hr className="my-8 border-white/20" />

      <div className="mt-6 text-right">
        <h4 className="font-semibold text-lg mb-2">Follow us on</h4>
        <div className="flex justify-end gap-4 text-xl">
          <FaWhatsapp className="hover:scale-110 transition-transform" />
          <FaInstagram className="hover:scale-110 transition-transform" />
          <FaLinkedin className="hover:scale-110 transition-transform" />
          <FaYoutube className="hover:scale-110 transition-transform" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center text-lg text-center">
        <p>
          © 2025 XYZ Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center text-xs text-center">
        <p className="mt-2 md:mt-0">
          Built for modern IT teams. |
          <span className="underline mx-1 cursor-pointer">Privacy Policy</span>|
          <span className="underline mx-1 cursor-pointer">Terms of Service</span>|
          <span className="underline mx-1 cursor-pointer">Support</span>
        </p>
      </div>
    </footer>
  );
}
