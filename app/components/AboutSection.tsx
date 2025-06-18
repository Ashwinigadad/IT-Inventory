"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
<section id="about" className="bg-white px-6 md:px-16 w-full">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
      About Platform
    </h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-gray-700 text-base leading-relaxed md:w-1/2">
            <p>
              In today’s digital-first world, managing IT assets efficiently is
              essential. Our platform simplifies and centralizes asset tracking
              covering hardware, software, licenses, and lifecycles. Designed
              for startups to enterprises, it ensures nothing is lost or
              overlooked. With modern architecture and enterprise-grade
              security, we help you stay compliant, audit-ready, and in control.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/aboutgraphic.png"
              alt="About Platform Graphic"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
