'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DCF from '../../assets/DCF.jpeg';
import WACC from '../../assets/WACC.jpeg';
import VC from '../../assets/VC.jpeg';

const valuationMethods = [
  {
    title: 'Discounted Cash Flow (DCF)',
    description:
      'Calculates the present value of expected future cash flows, adjusted for risk and time. Ideal for startups with predictable revenue streams.',
    image: DCF,
    example: 'Estimate cash flows over 5 years, discount at your cost of capital.',
  },
  {
    title: 'Comparable Company Analysis',
    description:
      'Values a startup by comparing it to similar public companies or recent transactions. Uses multiples like EV/Revenue or EV/EBITDA.',
    image: WACC,
    example: 'If similar companies trade at 5x revenue, multiply your startup’s revenue by 5.',
  },
  {
    title: 'Venture Capital Method',
    description:
      'Estimates exit value based on projected earnings and desired ROI, then discounts back to present value.',
    image: VC,
    example: 'Project exit value in 5 years and discount by target return rate.',
  },
  {
    title: 'Scorecard Valuation Method',
    description:
      'Adjusts average valuation of comparable startups based on qualitative factors like team, product, market size.',
    image: DCF,
    example: 'Start with average valuation, then adjust scores (+/-) for strengths and weaknesses.',
  },
];

export default function Valuation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  const handleIntersect = useCallback(
    (entries) => {
      let mostVisible = { index: -1, ratio: 0 };
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.intersectionRatio > mostVisible.ratio) {
          mostVisible = { index, ratio: entry.intersectionRatio };
        }
      });
      if (mostVisible.index !== -1 && mostVisible.index !== activeIndex) {
        setActiveIndex(mostVisible.index);
      }
    },
    [activeIndex]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
    });

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, [handleIntersect]);

  return (
    <div className="relative bg-[#0E1D1C] text-white w-full min-h-screen px-4 py-25 md:px-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center max-w-3xl mx-auto">
        Understanding Valuation Methods
      </h2>
      <p className="text-lg text-white/70 mb-12 text-center max-w-3xl mx-auto">
        Explore common startup valuation methods with interactive examples. Scroll to reveal matching visuals.
      </p>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-10">
       
       {/* Sticky Visual Panel */}
        <div className="hidden lg:flex lg:flex-col lg:w-1/2 sticky top-35 h-[30rem] justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={valuationMethods[activeIndex].image}
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2}}
              className="w-full flex flex-col items-center"
              aria-live="polite"
            >
              <motion.img
                src={valuationMethods[activeIndex].image}
                alt={valuationMethods[activeIndex].title}
                className="w-full max-w-md max-h-[20rem] md:max-h-[28rem] object-contain"
              />
              <motion.div
                className="mt-4 text-center text-lime-300 text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {valuationMethods[activeIndex].title}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scrollable Content */}
        <div className="lg:w-1/2 flex flex-col gap-12 overflow-y-auto no-scrollbar pt-8 pb-20">
          {valuationMethods.map(({ title, description, example }, idx) => (
            <motion.section
              key={title}
              ref={(el) => (sectionRefs.current[idx] = el)}
              data-index={idx}
              className={`rounded-xl p-6 border transition-all duration-500 snap-start scroll-mt-24 ${
                activeIndex === idx
                  ? 'border-lime-400 bg-[#142624] shadow-[0_0_15px_#a3e63540]'
                  : 'border-transparent bg-[#0f1f1e]'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-lime-300">{title}</h3>
              <p className="text-white/90 mb-4 leading-relaxed">{description}</p>
              <div className="bg-[#0f3129] p-4 rounded-lg border border-lime-600 max-w-md">
                <strong className="text-lime-400 block mb-1">Example:</strong>
                <p className="text-white/80 italic">{example}</p>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Mobile Image Fallback */}
      <div className="lg:hidden mt-10 w-full max-w-md mx-auto" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={valuationMethods[activeIndex].image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={valuationMethods[activeIndex].image}
              alt={valuationMethods[activeIndex].title}
              className="w-full max-w-md max-h-[20rem] md:max-h-[28rem] object-contain"
              loading="lazy"
            />
            <div className="mt-2 text-center text-lime-300 font-medium">
              {valuationMethods[activeIndex].title}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}


