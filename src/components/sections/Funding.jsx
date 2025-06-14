import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Rocket,
  DollarSign,
  Briefcase,
  TrendingUp,
  Globe,
  X,
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const fundingRounds = [
  {
    title: 'Pre-Seed',
    icon: <CheckCircle className="text-lime-400 w-6 h-6" />, 
    description: 'Idea stage, minimal product. Funds often come from founders, friends, or small angels.',
    details:
      'This round typically involves a small amount of capital to cover product development or research. Investors are betting on the team more than the traction.',
    video: 'https://www.youtube.com/embed/9u_0C1M8nYg',
    sources: [
      {
        label: 'Y Combinator on Pre-Seed',
        href: 'https://www.ycombinator.com/library/6G-a-pre-seed-round',
      },
    ],
  },
  {
    title: 'Seed',
    icon: <Rocket className="text-green-400 w-6 h-6" />, 
    description: 'MVP is live. Funding to validate product-market fit and grow early users.',
    details:
      'Seed capital helps develop the product further and acquire early customers. Angel investors and early-stage VCs often participate.',
    video: 'https://www.youtube.com/embed/TJbE4aH3ihc',
    sources: [
      {
        label: 'Seed Funding Explained',
        href: 'https://www.investopedia.com/terms/s/seed-capital.asp',
      },
    ],
  },
  {
    title: 'Series A',
    icon: <DollarSign className="text-blue-400 w-6 h-6" />, 
    description: 'Product traction is proven. Capital used to scale core team and operations.',
    details:
      'Investors look for strong metrics and early signs of scalability. Funds go to hiring, marketing, and refining the product.',
    video: 'https://www.youtube.com/embed/BpAw4ClwRTo',
    sources: [
      {
        label: 'What is Series A?',
        href: 'https://www.crunchbase.com/learn/funding-rounds/series-a',
      },
    ],
  },
  {
    title: 'Series B',
    icon: <Briefcase className="text-purple-400 w-6 h-6" />, 
    description: 'Business model is working. Funds go toward expansion, marketing, and hiring.',
    details:
      'The company is past the initial growth phase and focuses on scaling across new markets or verticals. Larger VCs may lead.',
    video: 'https://www.youtube.com/embed/zWhWCEdZ5Lk',
    sources: [
      {
        label: 'Understanding Series B',
        href: 'https://www.cbinsights.com/research/what-is-series-b-funding/',
      },
    ],
  },
  {
    title: 'Series C+',
    icon: <TrendingUp className="text-pink-400 w-6 h-6" />, 
    description: 'Late-stage growth. Investors seek mature operations and large-scale opportunity.',
    details:
      'Rounds C, D, E, etc., are used for aggressive expansion, acquisitions, or prep for IPO. Investors expect clear paths to exit.',
    video: 'https://www.youtube.com/embed/7T7a-3IMX3Q',
    sources: [
      {
        label: 'Late-Stage Funding Overview',
        href: 'https://medium.com/swlh/understanding-startup-funding-series-c-and-beyond-9ce4ab0f08b3',
      },
    ],
  },
  {
    title: 'IPO',
    icon: <Globe className="text-yellow-400 w-6 h-6" />, 
    description: 'Going public. The company offers shares to the public market.',
    details:
      'An IPO allows a company to raise capital from public investors. This stage involves regulatory scrutiny, underwriters, and a liquidity event for investors.',
    video: 'https://www.youtube.com/embed/hf7dcGJyO2c',
    sources: [
      {
        label: 'What is an IPO?',
        href: 'https://www.investopedia.com/terms/i/ipo.asp',
      },
    ],
  },
];


export default function Funding() {
  const [activeIndex, setActiveIndex] = useState(null);
  const modalRef = useRef(null);

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (activeIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const goNext = () => {
    setActiveIndex((prev) => (prev === fundingRounds.length - 1 ? 0 : prev + 1));
  };
  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? fundingRounds.length - 1 : prev - 1));
  };

  return (
    <section className="pt-26 py-16 px-6 md:px-12 bg-[#0E1D1C] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Everything You Need to Know About Funding Rounds
        </h2>
        <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
          From early-stage ideas to IPOs, explore how startups raise capital at every stage.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundingRounds.map((round, index) => (
            <SpotlightCard
              key={index}
              onClick={() => openModal(index)}
              spotlightColor="rgba(255, 255, 255, 0.07)"
              className="cursor-pointer border border-gray-900 bg-[#1a2928] hover:ring-2 hover:ring-lime-200 hover:scale-[1.01] active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                {round.icon}
                <h3 className="text-xl font-semibold">{round.title}</h3>
              </div>
              <p className="text-white/80 text-[17px] leading-relaxed">{round.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <motion.div
            ref={modalRef}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            className="bg-gradient-to-br from-[#0d1b1a] via-[#0f2723] to-[#0c1615] border border-white/10 rounded-xl p-6 relative shadow-xl max-w-4xl w-full max-h-[80vh] flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="max-w-3xl mx-auto h-full flex flex-col gap-4">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-lime-400 transition z-20"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
                <button
                  onClick={goPrev}
                  aria-label="Previous"
                  className="bg-[#162d28] hover:bg-[#1f4239] text-lime-100 rounded-full p-3  transition-all duration-300 ease-in-out"
                >
                  <span className="text-2xl leading-none">‹</span>
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
                <button
                  onClick={goNext}
                  aria-label="Next"
                  className="bg-[#162d28] hover:bg-[#1f4239] text-lime-100 rounded-full p-3  transition-all duration-300 ease-in-out"
                >
                  <span className="text-2xl leading-none">›</span>
                </button>
              </div>

              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                {fundingRounds[activeIndex].icon}
                {fundingRounds[activeIndex].title}
              </h3>
              <p className="text-white/90 text-[17px] md:text-lg leading-relaxed">
                {fundingRounds[activeIndex].details}
              </p>

              <div className="flex-grow overflow-y-auto pr-2">
                <iframe
                  className="w-full aspect-video rounded-md mb-4"
                  src={fundingRounds[activeIndex].video}
                  title={`${fundingRounds[activeIndex].title} video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="text-xs text-white/70">
                  <strong>Sources:</strong>
                  <ul className="list-disc list-inside">
                    {fundingRounds[activeIndex].sources.map((source, i) => (
                      <li key={i}>
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lime-300 hover:underline"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}