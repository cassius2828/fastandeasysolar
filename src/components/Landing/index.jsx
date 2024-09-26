const Landing = () => {
  return (
    <div
      id="landing"
      className="flex flex-col items-center justify-center absolute z-30 top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2"
    >
      <h1 className="text-6xl lg:text-8xl  w-screen text-center font-bold text-gray-200 my-12 fade-in-scale-down ">
        Fast and Easy Solar
      </h1>
      <p className=" text-2xl lg:text-4xl font-bold text-gray-200 my-12 fade-in-scale-down ">
        find out how much you can save today!
      </p>
      <a href="#contact">
        <button className="text-xl lg:text-3xl font-bold text-gray-200 border p-4 fade-in-scale-down rounded-lg mb-24 md:mb-0">
          See Savings
        </button>
      </a>
    </div>
  );
};
export default Landing;
