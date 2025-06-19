"use client";

export default function FAQs() {
  const questions = [
    "What is IT asset management?",
    "Does your platform auto-detect devices?",
    "Can I get alerts for license renewals?",
    "Are my devices secure on this platform?",
    "What tools can I integrate with?",
  ];

  return (
    <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-black">
      <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h4 className="font-semibold text-lg mb-4">Your Questions, Answered with Clarity and Confidence</h4>
          <p className="text-gray-600">We're dedicated to supporting every aspect of your IT journey from onboarding to optimization.</p>
        </div>
        <div className="space-y-3">
          {questions.map((q, i) => (
            <button key={i} className="block w-full bg-[#E8E8FF] text-[#6C63FF] font-medium text-left p-4 rounded hover:bg-[#dcdcff] transition">
              {q}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
