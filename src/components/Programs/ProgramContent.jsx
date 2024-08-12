import { useProgramContext } from "../../context/useProgramContext";
import { ContactBtnDark } from "../Reusables/Buttons";
import {
  UilEstate,
  UilFileContract,
  UilBoltAlt,
} from "@iconscout/react-unicons";
export const ProgramContent = ({ title, text, img }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 items-center justify-around">
      {/* col 1 */}
      <div
        className={`text-4xl flex flex-col items-center justify-center h-full w-full border-r-2`}
      >
        <UilEstate className="text-center" size="100" color="#1e3a8a" />
        {/* pros */}
        <div
          className={`flex-col flex items-center justify-start w-full h-[30rem] px-4`}
        >
          <h2 className="mt-8 mb-20 text-5xl">Pros</h2>
          <ul>
            <li className="list-disc m-5">No out-of-pocket cost</li>
            <li className="list-disc m-5">Tax Rebate 30%</li>
            <li className="list-disc m-5">More savings long term</li>
            <li className="list-disc m-5">Cheaper than PG&E</li>
          </ul>
        </div>
        {/* cons */}
        <div className="flex-col flex items-center justify-start border-t-2 w-full h-[30rem] px-4 mt-12">
          <h2 className="mt-8 mb-20 text-5xl">Cons</h2>
          <ul>
            <li className="list-disc m-5">Debt to income</li>
            <li className="list-disc m-5">Maintenance and monitoring</li>
            <li className="list-disc m-5 mb-20">Resale of home</li>
          </ul>
        </div>
      </div>

      {/* col 2 */}
      <div
        className={`text-4xl flex flex-col items-center justify-center h-full w-full`}
      >
        <UilFileContract className="text-center" size="100" color="#1e3a8a" />

        {/* pros */}
        <div className="flex-col flex items-center justify-start w-full h-[30rem] px-4">
          <h2 className="mt-8 mb-20 text-5xl">Pros</h2>
          <ul>
            <li className="list-disc m-5">No out-of-pocket cost</li>
            <li className="list-disc m-5">Cheaper than PG&E</li>
            <li className="list-disc m-5">Lien</li>
            <li className="list-disc m-5">True-up</li>
          </ul>
        </div>
        {/* cons */}
        <div className="flex-col flex items-center justify-start border-t w-full h-[30rem] px-4 mt-12">
          <h2 className="mt-8 mb-20 text-5xl">Cons</h2>
          <ul>
            <li className="list-disc m-5">No tax rebate</li>
            <li className="list-disc m-5">Sales tax</li>
            <li className="list-disc m-5 mb-20">System size</li>
          </ul>
        </div>
      </div>

      {/* col 3 */}
      <div
        className={`text-4xl flex flex-col items-center justify-center h-full w-full border-l-2`}
      >
        <UilBoltAlt className="text-center" size="100" color="#1e3a8a" />

        {/* pros */}
        <div className="flex-col flex items-center justify-start w-full h-[30rem] px-4">
          <h2 className="mt-8 mb-20 text-5xl">Pros</h2>
          <ul>
            <li className="list-disc m-5">No out-of-pocket cost</li>
            <li className="list-disc m-5">Grandfathers to next buyer</li>
            <li className="list-disc m-5">Homeowners choose size</li>
            <li className="list-disc m-5">30% to 50% immediate savings</li>
            <li className="list-disc m-5">Bumper to bumper warranty</li>
          </ul>
        </div>
        {/* cons */}
        <div className="flex-col flex items-center justify-start border-t w-full h-[30rem] px-4 mt-12">
          <h2 className="mt-8 mb-20 text-5xl">Cons</h2>
          <ul>
            <li className="list-disc m-5">No tax rebate</li>
            <li className="list-disc m-5 mb-20">Home must qualify</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
