import React from 'react'
import CaretUp from '../../icons/CaretUp'

function FAQ({ question, activeQuestion, handleQuestionClick }) {
  const isActive = activeQuestion === question.id
  const Icon = question.icon

  return (
    <li className="mb-6">
      <button
        onClick={() => handleQuestionClick(question.id)}
        className="flex w-full cursor-pointer items-center gap-6 rounded-xl border-2 border-lime-500 bg-lime-50 px-6 py-4 transition-shadow duration-300 hover:shadow-lg"
        aria-expanded={isActive}
        aria-controls={`faq-answer-${question.id}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-black text-xl font-bold shadow-inner">
          {Icon ? <Icon className="w-6 h-6" aria-hidden="true" /> : question.id}
        </div>

        <p className="flex-1 text-left text-lg font-semibold tracking-tight text-lime-700">
          {question.question}
        </p>

        <CaretUp
          className={`w-6 h-6 text-lime-600 transition-transform duration-300 ${isActive ? 'rotate-0' : 'rotate-180'}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-answer-${question.id}`}
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? 'max-h-96 pt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pl-16 pr-6 text-lime-900 text-base font-light leading-relaxed">
          {question.answer}
        </p>
        {question.seeMore && question.seeMore.length > 0 && (
  <div className="pl-16 pr-6 pt-2 mt-2 space-y-1">
    {question.seeMore.map((item, idx) => (
      <p key={idx} className="text-lime-700 text-sm font-medium">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-lime-900"
        >
          {item.text}
        </a>
      </p>
    ))}
  </div>
)}
      </div>
    </li>
  )
}

export default FAQ
