const Landing = () => {
  return (
    <div
      id="landing"
      className="flex flex-col items-center justify-center absolute z-40 top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2"
    >
      <h1 className="text-8xl font-bold text-gray-200 my-12 fade-in-scale-down ">Fast and Easy Solar</h1>
      <p className="text-4xl font-bold text-gray-200 my-12 fade-in-scale-down ">
        find out how much you can save today!
      </p>
      <button className="text-3xl font-bold text-gray-200 border p-4 fade-in-scale-down ">See Savings</button>
    </div>
  );
};
export default Landing;
