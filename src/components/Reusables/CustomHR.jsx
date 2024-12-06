const CustomHR = ({ bgColor = "#374151",gsapSelector }) => {
  return (
    <div className={` ${gsapSelector} inline-flex items-center justify-center w-full relative`}>
      <hr
        style={{ backgroundColor: bgColor }}
        className="w-64 h-1 my-8 border-0 rounded "
      />
      <div
        style={{ backgroundColor: bgColor }}
        className="h-3 w-12  absolute z-30 left-1/2 -translate-x-1/2 top-1/2 "
      ></div>
    </div>
  );
};

export default CustomHR;
