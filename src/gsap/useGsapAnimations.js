import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const fadeInFromSide = (targetClass, options = {}) => {
  const {
    start = "top 80%",
    duration = 1,
    scrub = false,
    stagger = 0.2, // Default stagger between elements
    side,
  } = options;

  // Target all elements of the same class
  const elements = gsap.utils.toArray(targetClass);

  elements.forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: side }, // Initial state
      {
        opacity: 1,
        x: 0,
        duration,
        delay: (index + 2) * stagger, // Apply stagger delay for each element
        scrollTrigger: {
          trigger: element,
          start, // When animation starts
          scrub, // Smoothly link animation to scroll
        },
      }
    );
  });
};

export const fadeInFromBottom = (target, options = {}) => {
  const { start = "top 80%", duration = 1, scrub = false } = options;
  gsap.fromTo(
    target,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration,
      scrollTrigger: {
        trigger: target,
        start,
        scrub,
      },
    }
  );
};

export const fadeInFromBottomStagger = (targetClass, options = {}) => {
  const {
    start = "top 80%",
    duration = .75,
    scrub = false,
    stagger = 0.2,
  } = options;
  const elements = gsap.utils.toArray(targetClass);
  elements.forEach((element, index) =>
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay: index * stagger,
        scrollTrigger: {
          trigger: element,
          start,
          scrub,
        },
      }
    )
  );
};
