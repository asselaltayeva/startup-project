import React from 'react'
import FAQ from './FAQ'

function FAQList({ questions, activeQuestion, handleQuestionClick }) {
  return (
    <ul className="mx-auto max-w-4xl space-y-8 px-6">
      {questions.map((question) => (
        <FAQ
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </ul>
  )
}

export default FAQList
