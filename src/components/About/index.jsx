
import { ContactBtnLight } from "../Reusables/Buttons";

const About = () => {
  // //////////////////////
  // // State Management
  // //////////////////////
  // const [carouselStep, setCarouselStep] = useState(1);

  // //////////////////////
  // // Handle Next Step
  // //////////////////////
  // const handleNextStep = () => {
  //   if (carouselStep === 3) {
  //     setCarouselStep(1);
  //   } else {
  //     setCarouselStep((prev) => prev + 1);
  //   }
  // };

  // //////////////////////
  // // Handle Previous Step
  // //////////////////////
  // const handlePrevStep = () => {
  //   if (carouselStep === 1) {
  //     setCarouselStep(3);
  //   } else {
  //     setCarouselStep((prev) => prev - 1);
  //   }
  // };

  return (
    <section
      id="about"
      className="h-screen relative z-30 flex flex-col lg:flex-row items-center justify-center my-96 lg:mt-48"
    >
      <div className="flex flex-col items-center justify-around lg:w-1/2 w-full py-12 lg:mr-12 rounded-lg bg-blue-900">
        <h1 className="text-7xl text-gray-200 text-center p-4">
          About Us: What is Fast and Easy Solar?
        </h1>
        <p className="text-3xl text-gray-200 p-12 lg:mr-8 leading-10">
          At Fast and Easy Solar, we specialize in making your switch to solar
          energy quick and effortless. As a direct dealer with all the major
          solar companies, we focus on securing the best savings for you. Our
          streamlined process involves inputting your bill information into our
          advanced portals, enabling us to identify the most competitive rates
          and deals tailored for your home. With our expertise and dedication to
          finding the best programs available, we ensure you save money on your
          monthly bills while embracing sustainable energy solutions.
        </p>
        <ContactBtnLight text=" learn more about us today"  />
      </div>
      {/* carousel was here */}
    </section>
  );
};

export default About;

/*
CAROUSEL
 <div className="rounded-xl lg:w-1/3 w-full flex items-center justify-between gap-4 mt-12 lg:mt-0">
       Previous Step Button 
        <div
          onClick={handlePrevStep}
          className="flex items-center justify-center text-blue-900 bg-gray-200 hover:text-gray-200 hover:bg-blue-900 transition-all duration-200 ease-in-out cursor-pointer rounded-full p-2 ml-5 lg:ml-0"
        >
          <UilAngleLeft size="24" />
        </div>
      Carousel Images 
        {carouselStep === 1 ? (
          <img
            id="about-carousel-1"
            className="rounded-lg w-9/12 lg:w-full"
            src="https://www.prysmian.com/sites/www.prysmian.com/files/2024-01/header-solar-energy-photovoltaics-1150x650.png"
            alt=""
          />
        ) : carouselStep === 2 ? (
          <img
            id="about-carousel-2"
            className="rounded-lg w-9/12 lg:w-full"
            src="https://chintglobal.com/blog/wp-content/uploads/solar-power-plant-knowledge-important-featured-banner.jpg"
            alt=""
          />
        ) : (
          <img
            id="about-carousel-3"
            className="rounded-lg w-9/12 lg:w-full"
            src="https://www.ecowatch.com/wp-content/uploads/2022/10/what-is-solar-energy-and-how-does-it-work.jpg"
            alt=""
          />
        )}
        Next Step Button 
        <div
          onClick={handleNextStep}
          className="flex items-center justify-center text-blue-900 bg-gray-200 hover:text-gray-200 hover:bg-blue-900 transition-all duration-200 ease-in-out cursor-pointer rounded-full p-2 mr-5 lg:mr-0"
        >
          <UilAngleRight size="24" />
        </div>
      </div>


*/
