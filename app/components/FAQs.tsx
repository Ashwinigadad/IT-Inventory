"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "What is IT asset management?",
      answer:
        "It’s a system to track and manage all your IT assets—hardware, software, licenses in one place.",
    },
    {
      question: "Does your platform auto-detect devices?",
      answer:
        "Yes, it auto-discovers and updates assets across your network in real-time.",
    },
    {
      question: "Can I get alerts for license renewals?",
      answer:
        "Absolutely! Set reminders for expiring licenses, warranties, and maintenance.",
    },
    {
      question: "Is my data secure on this platform?",
      answer:
        "Yes, we use enterprise-grade security and role-based access controls.",
    },
    {
      question: "What tools can I integrate with?",
      answer: "We support Active Directory, Azure, GSuite, and more.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 max-w-5xl mx-auto text-black">
      <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-[#6C63FF]">
            Your Questions, Answered with Clarity and Confidence
          </h4>
          <p className="text-[#6C63FF]">
            We're dedicated to supporting every aspect of your IT journey from
            onboarding to optimization.
          </p>
          <br />
          <h4 className="font-semibold text-lg mb-4 text-[#6C63FF]">
            Can’t find what you're looking for?
            <br />
            Let’s Talk. We’d love to have a conversation tailored to your needs.
          </h4>
        </div>

        {/* Accordion Section */}
        <div className="bg-[#6C63FF] rounded-xl p-4 text-white">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-white/20"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
