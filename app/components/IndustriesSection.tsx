"use client";

export default function IndustriesSection() {
  return (
    <section className="w-full bg-[#6C63FF] py-12 px-4 flex flex-col items-center">
      <h2 className="text-white text-3xl font-bold mb-10 text-center">Industry we Serve</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="border border-white text-white text-center px-6 py-4 rounded-md text-sm sm:text-base font-medium"
          >
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}
