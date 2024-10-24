export const Hamburger = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col justify-between items-center lg:hidden fixed z-50 top-10 right-5 h-6"
    >
      <span
        style={{ height: ".125rem" }}
        className={`block transition-all duration-300 ease-out 
             w-12 rounded-sm ${
               isOpen
                 ? "rotate-45 translate-y-3 bg-gray-200 "
                 : "-translate-y-0.5 bg-blue-700 "
             }`}
      ></span>
      <span
        style={{ height: ".125rem" }}
        className={`block transition-all duration-300 ease-out 
             w-12 rounded-sm my-0.5 ${
               isOpen ? "opacity-0 bg-gray-200 " : "opacity-100 bg-blue-700 "
             }`}
      ></span>
      <span
        style={{
          height: ".125rem",

        }}
        className={`block transition-all duration-300 ease-out 
             w-12 rounded-sm ${
               isOpen
                 ? "-rotate-45 -translate-y-[.625rem] bg-gray-200 "
                 : "translate-y-0.5 bg-blue-700 "
             }`}
      ></span>
    </button>
  );
};
