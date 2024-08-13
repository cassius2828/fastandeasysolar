/* eslint-disable react/prop-types */
export const ContactBtnDark = ({ text, topPos }) => {
  return (
    <a href="#contact">
      <button
        className={`p-4 ${
          topPos ? "relative top-5 lg:top-56" : ""
        } border-2 border-blue-900 text-blue-900 bg-gray-100 hover:opacity-90 hover:bg-blue-900 hover:text-gray-100 transition-all duration-300 ease-in-out text-3xl rounded-lg`}
      >
        {text}
      </button>
    </a>
  );
};

/* eslint-disable react/prop-types */
export const ContactBtnLight = ({ text, topPos }) => {
  return (
    <a href="#contact">
      <button
        className={`p-4 ${
          topPos ? "relative top-5 lg:top-56" : ""
        } border-2 border-gray-100 text-gray-100 bg-blue-900 hover:opacity-90 hover:bg-gray-100 hover:text-blue-900 transition-all duration-300 ease-in-out text-3xl rounded-lg`}
      >
        {text}
      </button>
    </a>
  );
};