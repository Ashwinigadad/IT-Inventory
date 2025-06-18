"use client";

export default function IndustriesSection() {
  return (
    <section className="w-full bg-[#6C63FF] py-16 px-6 flex flex-col items-center h-100">
      <h2 className="text-white text-3xl font-bold mb-12 text-center">
        Industry we Serve
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          "IT Administrators and System Engineers",
          "Educational Institutions",
          "Healthcare Providers",
          "Government Agencies",
          "Startups",
          "Enterprises",
        ].map((industry) => (
          <div
            key={industry}
            className="border border-white text-white text-center px-6 py-6 rounded-xl text-sm sm:text-base font-medium shadow-md hover:shadow-xl transition-all duration-300 bg-[#6C63FF]/80 backdrop-blur-sm"
          >
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}
