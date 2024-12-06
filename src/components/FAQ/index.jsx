import CustomHR from "../Reusables/CustomHR";


const FAQItem = ({ question, answer }) => {
  return (
    <div className="w-full px-4 py-2 my-4 bg-gray-100 rounded-md h-40">
      <h3 className="text-3xl font-bold text-blue-900 p-3">{question}</h3>
   
      <p className="text-2xl text-gray-600">{answer}</p>
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
    <div
    style={{
      background: "linear-gradient(180deg, #0b4bb3, #051c42)",
    }}
    className="w-full flex flex-col items-center justify-center py-20  relative z-20">
      <h2 className="text-6xl font-bold p-3 pb-0 text-gray-100">Frequently Asked Questions</h2>
      <CustomHR bgColor="white"/>
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center gap-12 mt-5">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <svg className="relative top-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f6"
          fillOpacity="1"
          d="M0,224L60,192C120,160,240,96,360,80C480,64,600,96,720,128C840,160,960,192,1080,202.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
