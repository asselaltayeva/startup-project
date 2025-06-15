import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import valuationMethods from "./ValuationMethods";

export default function Valuation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = valuationMethods[activeIndex];

  return (
    <section className="pt-26 py-16 px-6 md:px-12 bg-[#0E1D1C] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Everything You Need to Know About Valuation
        </h2>
        <p className="text-lg text-gray-50/70 mb-12 max-w-3xl mx-auto">
          From early-stage ideas to IPOs, explore how startups are evaluated by VCs.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5">
        {/* Sidebar */}
        <aside className="md:w-1/3 pr-6">
          <div className="h-full p-4 rounded-2xl">
            <h2 className="text-gray-400 uppercase text-sm font-semibold mb-4 tracking-widest">
              Valuation Methods:
            </h2>
            <nav className="flex flex-col gap-2">
              {valuationMethods.map((method, index) => (
                <button
                  key={method.value}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-4 py-2 text-base font-medium rounded-full transition-all duration-200 ${
                    index === activeIndex ? "text-lime-300" : "text-gray-400"
                  }`}
                >
                  {method.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article Content */}
        <article className="md:w-3/4 relative min-h-[400px]">
          <LayoutGroup>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.value}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-md bg-[#1a2928]/90"
              >
                <h3 className="text-xl font-semibold mb-5">{active.title}</h3>
                <div className="prose prose-invert max-w-none">
                  {active.content}
                </div>
              </motion.div>
            </AnimatePresence>
          </LayoutGroup>
        </article>
      </div>
    </section>
  );
}
