import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CaretUp from '../../icons/CaretUp';

function FAQ({ question, activeQuestion, handleQuestionClick }) {
  const isActive = activeQuestion === question.id;
  const Icon = question.icon;

  return (
    <li
      className={`
        bg-gradient-to-br from-[#0f1f1d] to-[#142a27]/90 
        backdrop-blur-sm
        border border-white/10 rounded-2xl p-5 cursor-pointer
        transition-shadow duration-300
        ${isActive ? 'shadow-[0_0_12px_2px_rgba(132,204,22,0.6)]' : ''}
        hover:shadow-[0_0_8px_2px_rgba(132,204,22,0.4)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400
        focus-visible:ring-offset-2 focus-visible:ring-offset-[#142a27]
      `}
      onClick={() => handleQuestionClick(question.id)}
      aria-expanded={isActive}
      aria-controls={`faq-answer-${question.id}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleQuestionClick(question.id)}
      role="button"
    >
      <div className="flex items-center gap-5">
        <div
          className={`
            flex h-12 w-12 items-center justify-center rounded-full
            bg-lime-500 text-black text-xl font-bold shadow-inner
            ${isActive ? 'animate-pulse shadow-[0_0_8px_2px_rgba(132,204,22,0.7)]' : ''}
          `}
        >
          {Icon ? <Icon className="w-6 h-6" aria-hidden="true" /> : question.id}
        </div>

        <p
          className={`
            flex-1 text-left text-lg font-semibold transition-colors duration-300
            ${isActive ? 'text-lime-400' : 'text-white'}
          `}
        >
          {question.question}
        </p>

        <CaretUp
          className={`
            w-6 h-6 text-lime-400 transition-transform duration-400 ease-in-out
            ${isActive ? 'rotate-0' : 'rotate-180'}
          `}
          aria-hidden="true"
        />
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            id={`faq-answer-${question.id}`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: 16 },
              collapsed: { opacity: 0, height: 0, marginTop: 0 },
            }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pl-16 pr-6 text-lime-300 text-base font-light leading-relaxed">
              {question.answer}
            </p>
            {question.seeMore && question.seeMore.length > 0 && (
              <div className="pl-16 pr-6 pt-2 mt-2 space-y-1">
                {question.seeMore.map((item, idx) => (
                  <p key={idx} className="text-lime-400 text-sm font-medium">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-lime-600 transition-colors"
                    >
                      {item.text}
                    </a>
                  </p>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default FAQ;
