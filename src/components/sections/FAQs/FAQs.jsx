import React, { useState } from 'react'
import FAQList from './FAQList'
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const frequentlyAskedQuestions = [
  {
    category: "Basics",
    id: 1,
    questions: [
      {
        id: 1,
        question: "What is a seed round?",
        answer:
          "Today, we consider a seed round to be an investment amount typically above $500,000 and below $3,000,000. That's a rough estimate. Each situation is different. In time, those numbers will change as they already have in the last decade.In seed rounds, companies typically raise using SAFEs as opposed to issuing direct equity via a priced round.",
          seeMore: 
          [
            {
            text: "Learn more about Seed Rounds.",
            url: "https://www.investopedia.com/articles/personal-finance/102015/series-b-c-funding-what-it-all-means-and-how-it-works.asp",
          },
         {
            text: "Startup Funding Stages Explained — Y Combinator",
            url: "https://www.ycombinator.com/library/4A-startup-funding-stages"
          }
      ]
    },
      {
        id: 2,
        question: "What is the value of an accelerator?",
        answer:
          "Accelerators offer mentorship, resources, and investor access in exchange for equity. They can fast-track your fundraising, refine your pitch, and connect you with key players in the startup ecosystem.",
      },
      {
        id: 3,
        question: "Can I raise money pre-product?",
        answer:
          "Yes, it's possible to raise a pre-product seed round, especially if you have a compelling vision, strong team, or domain expertise. However, it’s more challenging and usually involves raising from angels or early believers.",
      },
      {
        id: 4,
        question: "What metrics should I hit to raise a round?",
        answer:
          "Metrics vary by sector, but early signs of product-market fit—such as user growth, retention, engagement, and revenue—can help justify a seed round. Pre-seed rounds may not require hard metrics but should show strong narrative and team potential.",
      },
      {
        id: 5,
        question: "When should I not fundraise?",
        answer:
          "Avoid fundraising if your product isn’t validated, your story isn’t clear, or if you're doing it purely out of fear of missing out (FOMO). Fundraising is time-consuming—timing and focus matter.",
      },
    ],
  },

  {
    category: "The Pitch",
    id: 2,
    questions: [
      {
        id: 6,
        question: "How do I craft an effective pitch deck?",
        answer:
          "An effective pitch deck clearly explains your problem, solution, market size, business model, traction, team, and vision. Keep it under 15 slides and focus on storytelling over fluff.",
      },
      {
        id: 7,
        question: "How do I pitch my company?",
        answer:
          "Focus on clarity, conviction, and momentum. Begin with the problem, tell a story, and show why your team is uniquely suited to solve it. Investors invest in belief as much as data.",
      },
      {
        id: 8,
        question: "How do you pitch a big mission?",
        answer:
          "Start with a relatable pain point and then zoom out to the global impact. Show how your early product is a wedge into something transformative. Make the investor feel part of something bigger.",
      },
      {
        id: 9,
        question: "How do I build a product moat & communicate it to an investor?",
        answer:
          "Product moats include network effects, data advantages, brand, or unique tech. Show how your approach compounds over time and becomes defensible as you scale.",
      },
      {
        id: 10,
        question: "What were the early pitches from Figma, Replit, and Instagram?",
        answer:
          "Each had concise pitches focused on big visions: Figma emphasized collaboration, Replit highlighted accessibility in coding, and Instagram focused on simple photo sharing with social virality. Study their decks to understand how narrative, clarity, and momentum shaped investor interest.",
      },
    ],
  },

  {
    category: "Terms of the Round",
    id: 3,
    questions: [
      {
        id: 11,
        question: "How do I value my company at the seed stage?",
        answer:
          "Valuation at seed is more art than science. It's based on team strength, market size, traction, and investor interest. Use benchmarks, but focus more on what the round enables than just the number.",
      },
      {
        id: 12,
        question: "How should I think about equity and dilution?",
        answer:
          "Expect to give up 10–25% in a seed round. Balance short-term valuation with long-term ownership. Prioritize high-quality investors over maximizing valuation at all costs.",
      },
      {
        id: 13,
        question: "Should I optimize for valuation or the right investor?",
        answer:
          "Pick investors who will help you win, not just those offering the highest valuation. Great partners add long-term value and can be pivotal in future rounds and hiring.",
      },
    ],
  },

  {
    category: "The Fundraising Process",
    id: 4,
    questions: [
      {
        id: 14,
        question: "Is it better to raise from a founder or a VC?",
        answer:
          "Founders can offer tactical advice and empathy; VCs bring capital, networks, and signaling. Ideally, get both—a few strong founders on your cap table and a lead VC to anchor the round.",
      },
      {
        id: 15,
        question: "How should I split time between fundraising and building?",
        answer:
          "Fundraising is a sprint. Block off 4–6 weeks, go all-in, and avoid dragging it out. Balance by having one cofounder stay heads-down on product while the other leads fundraising.",
      },
      {
        id: 16,
        question: "How do I logistically go about fundraising?",
        answer:
          "Create a list of ~50 target investors, warm intro where possible, send a concise deck, and schedule first calls in a tight window. Use a CRM tool or spreadsheet to track progress and follow-ups.",
      },
      {
        id: 17,
        question: "What questions should I ask VCs in first meetings?",
        answer:
          "Ask how they support founders, what their check size and process is, and what recent investments they’ve made. You're evaluating them as much as they’re evaluating you.",
      },
      {
        id: 18,
        question: "What does a typical seed round timeline look like?",
        answer:
          "Seed rounds often involve 30–100 investor conversations over 4–8 weeks. Warm intros and early commitments speed things up. You’ll typically close within 6–10 weeks if things go well.",
      },
      {
        id: 19,
        question: "This is my first VC meeting. What should I expect?",
        answer:
          "Expect a 30-minute conversation focused on your story, traction, and market. Come prepared, stay concise, and bring energy. They'll likely test your vision, product insight, and team dynamics.",
      },
    ],
  },

  {
    category: "Understanding Venture",
    id: 5,
    questions: [
      {
        id: 20,
        question: "What is the math of venture capital?",
        answer:
          "VCs invest knowing most companies will fail. They seek outsized returns from a few breakout winners. This means they optimize for potential scale and massive markets.",
      },
      {
        id: 21,
        question: "What is the underlying game of venture capital?",
        answer:
          "Venture is a power-law game. VCs need to believe your startup has the chance to return their entire fund. Understanding this helps you tailor your pitch and target the right investors.",
      },
    ],
  },
];

const categories = [...new Set(frequentlyAskedQuestions.map((q) => q.category))]

function FAQs() {
  const [category, setCategory] = useState(categories[0]);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const filteredCategory = frequentlyAskedQuestions.find(
    (q) => q.category === category
  );
  const filteredQuestions = filteredCategory ? filteredCategory.questions : [];

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
    setActiveQuestion(null);
  };

  const handleQuestionClick = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <section className="pt-26 py-16 px-6 md:px-12 bg-[#0E1D1C] text-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-50/70 mb-12 max-w-3xl mx-auto">
            Answers to common questions about startup funding and investment.
          </p>
        </div>
  
        {/* Categories */}
        <ul className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => handleCategoryClick(cat)}
                className={`px-8 py-2 text-base font-medium transition-all ease-in-out rounded-full
                  ${
                      cat === category
                        ? 'bg-lime-300 text-[#0E1D1C] border border-lime-200 shadow-sm'
                        : 'text-gray-50 border border-gray-50/10 bg-[#1a2928] hover:ring-2 hover:ring-lime-200 hover:scale-[1.01] active:scale-[0.98]'
                   }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
  
        {/* FAQ List */}
        <div className="max-w-5xl px-4 md:px-0 w-full space-y-4 mx-auto">
          {filteredQuestions.map(({ id, question, answer, seeMore }) => {
            const isActive = activeQuestion === id;
  
            return (
              <div
                key={id}
                className="bg-[#1a2928] rounded-xl p-5 cursor-pointer shadow-lg hover:shadow-lime-400/40 transition-shadow"
              >
                <button
                  onClick={() => handleQuestionClick(id)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${id}`}
                  className="flex justify-between items-center w-full text-left font-medium text-lime-300 text-lg"
                >
                  <span className="text-gray-50">{question}</span>
                  {isActive ? (
                      <ChevronUp className="w-6 h-6 text-lime-400" />
                   ) : (
                      <ChevronDown className="w-6 h-6 text-lime-400" />
                   )}
  
                </button>
  
                <AnimatePresence initial={false}>
                  {isActive && (
                      <motion.div
                        id={`faq-answer-${id}`}
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{ 
                          open: {opacity: 1, height:'auto'}, 
                          collapsed: {opacity: 0, height: 0},
                        }}
                        transition={{duration: 0.1, ease:'easeInOut'}} 
                        className="overflow-hidden mt-3 text-gray-50/90 text-[17px] leading-7 break-words">
                        <p>{answer}</p>
                        {seeMore && seeMore.length > 0 && (
                          <ul className="mt-2 list-disc list-inside text-lime-300 text-xs space-y-2">
                            {seeMore.map(({ text, url }, idx) => (
                              <li key={idx}>
                               <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline hover:text-lime-300">
                                  {text}
                               </a>
                              </li>
                             ))}
                          </ul>
                        )}
                      </motion.div>
                   )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
  }
  
  export default FAQs;
  