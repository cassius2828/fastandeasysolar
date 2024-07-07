export const ContactBtn = ({
  propColor,
  text ,
  topPos,
}) => {
  let color = "";
  let bgColor = "";
  if (propColor === "white") {
    color = "gray-200";
    bgColor = "blue-900";
  } else {
    color = "blue-900";
    bgColor = "gray-200";
  }
  return (
    <a href="#contact">
      <button
        className={`p-4 ${
          topPos ? "relative top-5 lg:top-56" : ""
        } border border-${color} text-${color} hover:opacity-90 hover:bg-${color} hover:text-${bgColor} transition-all duration-300 ease-in-out text-3xl rounded-lg`}
      >
        {text}
      </button>
    </a>
  );
};

