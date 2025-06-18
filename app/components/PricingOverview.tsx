"use client";

import { motion } from "framer-motion";

export default function PricingOverview() {
  const plans = [
    {
      title: "Starter",
      price: "₹499/month",
      features: [
        "Manage up to 50 assets.",
        "Basic dashboard & asset tracking.",
        "License & warranty alerts.",
        "Role-based access.",
        "Email support.",
      ],
      button: "Get Started",
    },
    {
      title: "Professional",
      price: "₹1499/month",
      features: [
        "Manage up to 500 assets.",
        "All Starter features.",
        "Advanced reporting & audit logs.",
        "Real-time sync & auto-discovery.",
        "Priority support.",
      ],
      button: "Request Demo",
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited assets.",
        "Full suite of features.",
        "Advanced access controls.",
        "API & custom integrations.",
        "Dedicated success manager.",
        "24/7 premium support.",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="bg-white py-16 text-center w-full overflow-hidden">
      <h1 className="text-4xl font-bold text-black mb-3">Pricing Overview</h1>
      <p className="text-[#6C63FF] mb-10 text-2xl">
        Simple, scalable plans designed to fit your organization’s needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            className="bg-[#6C63FF] text-white rounded-[2rem] p-8 shadow-lg flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>

            <div className="flex justify-center mb-6">
              <span className="bg-white text-black px-6 py-2 rounded-lg text-xl font-bold">
                {plan.price}
              </span>
            </div>

            <ul className="text-left mb-8 list-none space-y-2 text-base">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{idx + 1}. {feature}</li>
              ))}
            </ul>

            <div className="flex justify-center">
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:opacity-90 transition">
                {plan.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
