"use client";

import Navbar from "./components/navbar";
import Hero from "./components/HeroSection";
import Dashboard from "./components/DashboardCard";
import About from "./components/AboutSection";
import WhyWeBuilt from "./components/WhyWeBuiltThis";
import IndustriesSection from "./components/IndustriesSection";
import KeyFeatures from "./components/KeyFeatures";
import PricingOverview from "./components/PricingOverview";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#6C63FF] min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <Dashboard />
      <About />
      <WhyWeBuilt />
      <IndustriesSection />
      <KeyFeatures />
      <PricingOverview />
      <Testimonials />
      <FAQs />
      <ContactSection />
      <Footer />
    </div>
  );
}
