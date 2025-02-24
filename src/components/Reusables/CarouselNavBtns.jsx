const CarouselNavBtns = ({
  array,
  currentIndex,
  setCurrentIndex,
  typeOfCarousel,
}) => {
  return (
    <>
      {Array.from({ length: array.length }).map((_, idx) => (
        <button
          onClick={() => setCurrentIndex(idx)}
          className={`${
            idx === currentIndex ? "bg-gray-500" : "bg-gray-300"
          } rounded-full p-2 w-2 h-2`}
          key={idx + typeOfCarousel}
        ></button>
      ))}
    </>
  );
};
export default CarouselNavBtns;
