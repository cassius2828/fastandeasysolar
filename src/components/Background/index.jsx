//////////////////////
// Background Component
////////////////////
const Background = () => {
  return (
    <section
      id="Background"
      className="h-screen w-screen flex items-center justify-center fixed top-0 z-20 bg-[#130a28]"
    >
      {/* Gradient Background */}
      <div className="absolute z-0 h-full w-full inset-0 bg-gradient-vertical fade-in-and-up-sky"></div>

      {/* Background Image using srcSet */}
      <picture className="absolute z-0 h-full w-full">
        <source
          media="(max-width: 425px)"
          srcSet={`${
            import.meta.env.VITE_S3_OBJECT_BASE_URL
          }faes/city-bg-tall-w425.webp`}
        />
        <source
          media="(max-width: 599px)"
          srcSet={`${
            import.meta.env.VITE_S3_OBJECT_BASE_URL
          }faes/city-bg-no-sky-w599.webp`}
        />
        <source
          media="(max-width: 1440px)"
          srcSet={`${
            import.meta.env.VITE_S3_OBJECT_BASE_URL
          }faes/city-bg-no-sky-w1440.webp`}
        />
        <img
          className="fade-in-and-up-land absolute top-0 left-0"
          src={`${import.meta.env.VITE_S3_OBJECT_BASE_URL}faes/city-bg-no-sky-w2400.webp`}
          alt="City Background"
          width="2400"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute w-full h-full bg-gray-800 opacity-40"></div>
    </section>
  );
};

export default Background;
