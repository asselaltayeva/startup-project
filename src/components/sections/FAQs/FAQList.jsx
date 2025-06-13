import React from 'react';
import FAQ from './FAQ';

function FAQList({ questions, activeQuestion, handleQuestionClick }) {
  return (
    <ul className="mx-auto max-w-5xl space-y-6 px-6 md:px-12">
      {questions.map((question) => (
        <FAQ
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </ul>
  );
}

export default FAQList;
