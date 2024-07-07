export const MobileNav = ({scrollToTop}) => {
  return (
    <ul
      id="mobile-nav"
      className="lg:hidden absolute top-0 left-0 z- w-screen h-screen bg-blue-900 text-gray-200 capitalize flex flex-col items-center justify-around text-2xl"
    >
      <li onClick={scrollToTop}>
        <a href="">home</a>
      </li>
      <li>
        <a href="#scroll-to-services">services</a>
      </li>
      <li>
        <a href="#scroll-to-programs">programs</a>
      </li>
      <li>
        <a href="#contact">contact</a>
      </li>{" "}
      <li>
        <a href="#about">about</a>
      </li>
    </ul>
  );
};
