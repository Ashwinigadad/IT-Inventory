"use client";
import React from "react";

export default function WhyWeBuilt() {
  return (
    <section className="bg-white px-6 md:px-16 w-full h-120">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
      Why We Built This
    </h2>
    <p className="text-gray-700 text-base leading-relaxed text-center mb-8">
          We’ve seen how chaotic IT environments can become scattered
          spreadsheets, manual tracking, missed renewals, and compliance issues.
          We built this platform to change that. Our mission is to give IT teams
          the tools they need to:
        </p>
    <div className="border border-[#6C63FF] rounded-lg p-6 max-w-3xl mx-auto space-y-4">
          {["Gain complete visibility into their assets",
            "Eliminate redundancy and reduce risk",
            "Save time and streamline operations",
            "Make data-driven decisions with confidence"].map((point, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-[#6C63FF] text-white p-3 rounded-full font-semibold shadow-md"
            >
              <span className="text-lg">•</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}