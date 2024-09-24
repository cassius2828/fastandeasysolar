export const MobileNav = ({ scrollToTop, setIsOpen }) => {
  return (
    <ul
      id="mobile-nav"
      className="lg:hidden absolute top-0 left-0 z- w-screen h-screen bg-blue-900 text-gray-200 capitalize flex flex-col items-center justify-start gap-32 text-2xl"
    >
      <li
        className="mt-40"
        onClick={() => {
          setIsOpen(false);
          scrollToTop();
        }}
      >
        <a href="">home</a>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <a href="#scroll-to-services">services</a>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <a href="#scroll-to-programs">programs</a>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <a href="#book">book</a>
      </li>{" "}
      <li onClick={() => setIsOpen(false)}>
        <a href="#careers">careers</a>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <a href="#contact">contact</a>
      </li>{" "}
      <li onClick={() => setIsOpen(false)}>
        <a href="#about">about</a>
      </li>
    </ul>
  );
};
