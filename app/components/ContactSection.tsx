"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 px-6 w-full">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Connect with us
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Left Text Section */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#6C63FF]">
            Ready to Elevate Your IT Asset Management?
          </h4>
          <p className="text-[#6C63FF] font-semibold">
            Discover how our platform brings unmatched structure, efficiency, and control to your IT operations. From unifying your entire IT inventory into a single intelligent dashboard to automating asset discovery and reducing manual errors we help you manage smarter, not harder. Stay ahead of renewals with proactive license and warranty alerts, enforce role-based access for enhanced security, and generate compliance-ready reports in just a few clicks. With seamless integration capabilities for Active Directory, GSuite, Azure, and more, our platform adapts to your workflows while ensuring enterprise-grade data security. Whether you&#39;re a growing business or a large enterprise, we&#39;re here to transform your IT visibility and compliance with confidence.
          </p>
        </div>

        {/* Form Section */}
        <form className="bg-[#6C63FF] text-white rounded-lg p-6 space-y-4">
          <Input placeholder="Full Name" className="border border-gray-300 bg-white text-black" />
          <Input placeholder="Work Email" className="border border-gray-300 bg-white text-black" />
          <Input placeholder="Phone" className="border border-gray-300 bg-white text-black" />
          <Textarea placeholder="Enter your message" className="border border-gray-300 bg-white text-black" />
          <Button
            type="submit"
            className="bg-white text-[#6C63FF] hover:opacity-90 font-medium"
          >
            Submit
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
