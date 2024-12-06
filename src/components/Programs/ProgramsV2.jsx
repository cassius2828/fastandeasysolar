
import {
  UilEstate,
  UilFileContract,
  UilBoltAlt,
} from "@iconscout/react-unicons";
import useWindowWidth from "../../customHooks/useWindowWidth";
const colData = [
  {
    title: "Ownership",
    icon: <UilEstate className="text-center" size="40" color="#f2f2f2" />,
    pros: [
      "No out-of-pocket cost",
      "Tax Rebate 30%",
      "More savings long term",
      "Cheaper than PG&E",
    ],
    cons: ["Debt to income", "Maintenance and monitoring", "Resale of home"],
  },
  {
    title: "Lease",
    icon: <UilFileContract className="text-center" size="40" color="#f2f2f2" />,
    pros: ["No out-of-pocket cost", "Cheaper than PG&E", "Lien", "True-up"],
    cons: ["No tax rebate", "Sales tax", "System size"],
  },
  {
    title: "Hybrid",
    icon: <UilBoltAlt className="text-center" size="40" color="#f2f2f2" />,
    pros: [
      "No out-of-pocket cost",
      "Grandfathers to next buyer",
      "Homeowners choose size",
      "30% to 50% immediate savings",
      "Bumper to bumper warranty",
    ],
    cons: ["No tax rebate", "Home must qualify"],
  },
];
export default function Programs() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;
  return (
    <section
      style={{ backgroundColor: "#0b4bb3" }}
      id="scroll-to-programs"
      className=" py-24 sm:py-32 relative z-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-30">
        <div className="mx-auto max-w-6xl lg:mx-0">
          {/* title */}
          <h2 className="text-pretty text-5xl font-semibold tracking-wide text-gray-100 sm:text-7xl pb-5">
            Solar Options at a Glance: Ownership, Lease, or Hybrid?
          </h2>
          <hr style={{ height: "2px" }} className=" w-full bg-deepblue" />
          {/* paragraph */}
          <p className="mt-6 text-xl md:text-2xl text-gray-100">
            In the following section, you’ll find an easy-to-read breakdown of
            the pros and cons for three popular solar program options:
            Ownership, Lease, and Hybrid. Each card highlights the benefits and
            trade-offs to help you make an informed decision based on your
            priorities, such as long-term savings, upfront costs, tax rebates,
            and maintenance. Use this guide to quickly understand what each
            option offers and which might be the best fit for your needs.
          </p>
        </div>
        {/* pros and cons section list */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:items-center">
          {colData.map((data) => (
            <ProsAndConsSection key={data.title} data={data} />
          ))}
        </div>
      </div>
      <svg
        style={{
          top: isMobile ? "0" : "-110rem",
          right: isMobile ? "" : "-140rem",
        }}
        className=" opacity-50 absolute top-0 md:-top-[110rem] md:-right-[140rem] scale-150 md:scale-125  h-full md:h-auto  animate-slow-spin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1500"
      >
        <rect fill="#1F33EE" width="2000" height="1500" />
        <defs>
          <radialGradient id="a" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#ADD0FF" />
            <stop offset="1" stopColor="#1F33EE" />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="750"
            x2="1550"
            y2="750"
          >
            <stop offset="0" stopColor="#6682f7" />
            <stop offset="1" stopColor="#1F33EE" />
          </linearGradient>
          <path
            id="s"
            fill="url(#b)"
            d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z"
          />
          <g id="g">
            <use href="#s" transform="scale(0.12) rotate(60)" />
            <use href="#s" transform="scale(0.2) rotate(10)" />
            <use href="#s" transform="scale(0.25) rotate(40)" />
            <use href="#s" transform="scale(0.3) rotate(-20)" />
            <use href="#s" transform="scale(0.4) rotate(-30)" />
            <use href="#s" transform="scale(0.5) rotate(20)" />
            <use href="#s" transform="scale(0.6) rotate(60)" />
            <use href="#s" transform="scale(0.7) rotate(10)" />
            <use href="#s" transform="scale(0.835) rotate(-40)" />
            <use href="#s" transform="scale(0.9) rotate(40)" />
            <use href="#s" transform="scale(1.05) rotate(25)" />
            <use href="#s" transform="scale(1.2) rotate(8)" />
            <use href="#s" transform="scale(1.333) rotate(-60)" />
            <use href="#s" transform="scale(1.45) rotate(-30)" />
            <use href="#s" transform="scale(1.6) rotate(10)" />
          </g>
        </defs>
        <g transform="translate(1020 0)">
          <g transform="translate(0 735)">
            <circle fill="url(#a)" r="3000" />
            <g opacity="0.5">
              <circle fill="url(#a)" r="2000" />
              <circle fill="url(#a)" r="1800" />
              <circle fill="url(#a)" r="1700" />
              <circle fill="url(#a)" r="1651" />
              <circle fill="url(#a)" r="1450" />
              <circle fill="url(#a)" r="1250" />
              <circle fill="url(#a)" r="1175" />
              <circle fill="url(#a)" r="900" />
              <circle fill="url(#a)" r="750" />
              <circle fill="url(#a)" r="500" />
              <circle fill="url(#a)" r="380" />
              <circle fill="url(#a)" r="250" />
            </g>
            <g transform="rotate(-79.2 0 0)">
              <use href="#g" transform="rotate(10)" />
              <use href="#g" transform="rotate(120)" />
              <use href="#g" transform="rotate(240)" />
            </g>
            <circle fill-opacity="0.01" fill="url(#a)" r="3000" />
          </g>
        </g>
      </svg>
      {/* <svg
        className="absolute top-0 z-20 animate-[pulse_10s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1500"
      >
        <rect fill="#1F33EE" width="2000" height="1500" />
        <defs>
          <radialGradient id="a" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#ADD0FF" />
            <stop offset="1" stopColor="#1F33EE" />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="750"
            x2="1550"
            y2="750"
          >
            <stop offset="0" stopColor="#6682f7" />
            <stop offset="1" stopColor="#1F33EE" />
          </linearGradient>
          <path
            id="s"
            fill="url(#b)"
            d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z"
          />
          <g id="g">
            <use href="#s" transform="scale(0.12) rotate(60)" />
            <use href="#s" transform="scale(0.2) rotate(10)" />
            <use href="#s" transform="scale(0.25) rotate(40)" />
            <use href="#s" transform="scale(0.3) rotate(-20)" />
            <use href="#s" transform="scale(0.4) rotate(-30)" />
            <use href="#s" transform="scale(0.5) rotate(20)" />
            <use href="#s" transform="scale(0.6) rotate(60)" />
            <use href="#s" transform="scale(0.7) rotate(10)" />
            <use href="#s" transform="scale(0.835) rotate(-40)" />
            <use href="#s" transform="scale(0.9) rotate(40)" />
            <use href="#s" transform="scale(1.05) rotate(25)" />
            <use href="#s" transform="scale(1.2) rotate(8)" />
            <use href="#s" transform="scale(1.333) rotate(-60)" />
            <use href="#s" transform="scale(1.45) rotate(-30)" />
            <use href="#s" transform="scale(1.6) rotate(10)" />
          </g>
        </defs>
        <g transform="translate(2000 0)">
          <g transform="translate(0 195)">
            <circle fill="url(#a)" r="3000" />
            <g opacity="0.5">
              <circle fill="url(#a)" r="2000" />
              <circle fill="url(#a)" r="1800" />
              <circle fill="url(#a)" r="1700" />
              <circle fill="url(#a)" r="1651" />
              <circle fill="url(#a)" r="1450" />
              <circle fill="url(#a)" r="1250" />
              <circle fill="url(#a)" r="1175" />
              <circle fill="url(#a)" r="900" />
              <circle fill="url(#a)" r="750" />
              <circle fill="url(#a)" r="500" />
              <circle fill="url(#a)" r="380" />
              <circle fill="url(#a)" r="250" />
            </g>
            <g transform="rotate(-43.2 0 0)">
              <use href="#g" transform="rotate(10)" />
              <use href="#g" transform="rotate(120)" />
              <use href="#g" transform="rotate(240)" />
            </g>
            <circle fill-opacity="0.01" fill="url(#a)" r="3000" />
          </g>
        </g>
      </svg> */}
      {/* <svg
        className="absolute opacity-50 bottom-0 object-cover z-20"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
      >
        <rect fill="#330000" width="800" height="1400" />
        <defs>
          <radialGradient
            id="a"
            cx="396"
            cy="281"
            r="514"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#0b4bb3" />
            <stop offset="1" stopColor="#0b4bb3" />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="400"
            y1="148"
            x2="400"
            y2="333"
          >
            <stop offset="0" stopColor="#FA3" stopOpacity="0" />
            <stop offset="1" stopColor="#FA3" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect fill="url(#a)" width="1800" height="1400" />
        <g fillOpacity="0.4">
          <circle fill="url(#b)" cx="267.5" cy="61" r="300" />
          <circle fill="url(#b)" cx="532.5" cy="61" r="300" />
          <circle fill="url(#b)" cx="400" cy="30" r="300" />
        </g>
      </svg> */}
    </section>
  );
}

export const ProsAndConsComponent = ({ type, list }) => {
  return (
    <div className="flex flex-col justify-start gap-x-16 gap-y-2 rounded-2xl bg-gray-100 shadow-lg p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none h-80 lg:flex-auto lg:flex-col lg:items-start lg:gap-y-2">
      <p className="flex-none text-3xl font-bold tracking-tight text-gray-800">
        {type}
      </p>
      <hr style={{ height: "2px" }} className=" w-full bg-deepblue" />
      <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
        <ul className="text-gray-800 text-xl md:text-2xl mt-3">
          {list.map((item) => (
            <li className="list-disc" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ProsAndConsSection = ({ data }) => {
  return (
    <>
      <h4 className="text-pretty text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl flex flex-col md:flex-row items-center gap-4 mt-12">
        {data.title}
        {data.icon}
      </h4>
      <div className="flex flex-col md:flex-row w-full gap-12">
        <ProsAndConsComponent type="Pros" list={data.pros} />
        <ProsAndConsComponent type="Cons" list={data.cons} />
      </div>
    </>
  );
};
