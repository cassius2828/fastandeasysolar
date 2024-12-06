/* eslint-disable react/prop-types */

import { useProgramContext } from "../../context/useProgramContext";

import {
  UilEstate,
  UilFileContract,
  UilBoltAlt,
} from "@iconscout/react-unicons";
const colData = [
  {
    icon: <UilEstate className="text-center" size="100" color="#1e3a8a" />,
    pros: [
      "No out-of-pocket cost",
      "Tax Rebate 30%",
      "More savings long term",
      "Cheaper than PG&E",
    ],
    cons: ["Debt to income", "Maintenance and monitoring", "Resale of home"],
  },
  {
    icon: (
      <UilFileContract className="text-center" size="100" color="#1e3a8a" />
    ),
    pros: ["No out-of-pocket cost", "Cheaper than PG&E", "Lien", "True-up"],
    cons: ["No tax rebate", "Sales tax", "System size"],
  },
  {
    icon: <UilBoltAlt className="text-center" size="100" color="#1e3a8a" />,
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
///////////////////////////
// Program Content
///////////////////////////
export const ProgramContent = ({ isMobile }) => {
  const { selectedProgram } = useProgramContext();

  return (
    <>
      {isMobile ? (
        <div className="w-full grid grid-cols-1 grid-rows-1 items-center justify-around">
          {selectedProgram === 1 && (
            <ColCard
              icon={colData[0].icon}
              pros={colData[0].pros}
              cons={colData[0].cons}
            />
          )}

          {selectedProgram === 2 && (
            <ColCard
              icon={colData[1].icon}
              pros={colData[1].pros}
              cons={colData[1].cons}
            />
          )}

          {selectedProgram === 3 && (
            <ColCard
              icon={colData[2].icon}
              pros={colData[2].pros}
              cons={colData[2].cons}
            />
          )}
        </div>
      ) : (
        <AllPrograms colData={colData} />
      )}
    </>
  );
};

///////////////////////////
// All Programs
///////////////////////////
export const AllPrograms = ({ colData }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 items-center justify-around">
      {colData.map((data, index) => (
        <ColCard
          key={index}
          icon={data.icon}
          pros={data.pros}
          cons={data.cons}
        />
      ))}
    </div>
  );
};
///////////////////////////
// Col Card
///////////////////////////
export const ColCard = ({ icon, pros, cons }) => {
  return (
    <div className="text-4xl flex flex-col items-center justify-center h-full w-full border-r-2">
      {icon}
      {/* Pros */}
      <div className="flex-col flex items-center justify-start w-full md:h-300px px-4">
        <h2 className="mt-8 mb-20 text-5xl">Pros</h2>
        <ul>
          {pros.map((pro, index) => (
            <li key={index} className="list-disc m-5">
              {pro}
            </li>
          ))}
        </ul>
      </div>
      {/* Cons */}
      <div className="flex-col flex items-center justify-start border-t-2 w-full md:h-300px px-4 mt-12">
        <h2 className="mt-8 mb-20 text-5xl">Cons</h2>
        <ul className="mb-20 md:mb-0">
          {cons.map((con, index) => (
            <li key={index} className="list-disc m-5">
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
