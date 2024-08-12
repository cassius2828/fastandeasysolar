import React from 'react';

const FAQItem = ({ question, answer }) => {
  return (
    <div className="w-full px-4 py-2">
      <h3 className="text-3xl font-semibold text-blue-800 mb-2">{question}</h3>
      <p className="text-2xl text-gray-700">{answer}</p>
    </div>
  );
};

export const FAQList = () => {
  const faqs = [
    {
      question: "What happens if I move?",
      answer: "Simply put us in touch with the new homeowner and we will facilitate the transfer of service."
    },
    {
      question: "What is the catch?",
      answer: "The catch is, not every home qualifies. Every home must meet the minimum criteria to be eligible for this program."
    },
    {
      question: "How much will this cost?",
      answer: "There are generally no upfront costs to homeowners. You are simply paying for power at a rate that is lower than what your local electric utility can offer."
    },
    {
      question: "What if something happens to my system?",
      answer: "We maintain and insure the entire system. If there is a problem with the system, we will fix it at no cost to you."
    },
    {
      question: "How much will I save?",
      answer: "Once we verify usage information, shading, and space availability, we can provide estimates on savings."
    },
    {
      question: "What if I want to own my solar?",
      answer: "If you have your heart set on ownership, we have purchase options with all of the major finance companies. We can absolutely find the right solution for you."
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 mt-20 relative z-20 bg-gray-100">
      <h2 className="text-6xl font-bold mb-20 text-blue-900">Frequently Asked Questions</h2>
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center ">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};
