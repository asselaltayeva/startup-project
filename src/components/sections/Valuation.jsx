import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const valuationMethods = [
  {
    title: "Discounted Cash Flow (DCF)", 
    description:
      "Calculates the present value of expected future cash flows, adjusted for risk and time.", 
    example: "Estimate cash flows over 5 years, discount at your cost of capital.", 
    value: "dcf",
  },
  {
    title: "Comparable Company Analysis",
    description:
      "Values a startup by comparing it to similar companies using multiples like EV/Revenue.",
    example:
      "If similar companies trade at 5x revenue, multiply your startup’s revenue by 5.",
    value: "comp",
  },
  {
    title: "Venture Capital Method",
    description:
      "Estimates exit value based on projected earnings and desired ROI, then discounts to present value.",
    example:
      "Project exit value in 5 years and discount by your target return rate.",
    value: "vc",
  },
  {
    title: "Scorecard Valuation Method",
    description:
      "Starts with average valuation, adjusting for team, product, market size, and other factors.",
    example: "Adjust +10% for a strong team, -5% for a small market size.",
    value: "scorecard",
  },
];

export default function ValuationChooser() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = valuationMethods[activeIndex];

  return (
    <section className="py-16 px-6 md:px-50 bg-[#0E1D1C] text-gray-50 min-h-[600px]">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Understanding Valuation Methods
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Explore how investors assess startup value using common financial and market-based techniques.
        </p>
      </div>


      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {valuationMethods.map((method, index) => (
          <button
            key={method.value}
            onClick={() => setActiveIndex(index)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition 
              ${
                index === activeIndex
                  ? "bg-lime-500 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {method.title}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="relative max-w-3xl mx-auto h-[280px]">
        <LayoutGroup>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.value}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute inset-0 p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-md bg-[#1a2928]/90"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{active.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{active.description}</p>
              <div className="text-sm text-gray-400 bg-gray-900/50 border border-gray-700 px-4 py-3 rounded-lg font-mono">
                Example: {active.example}
              </div>
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}


