import {
  UilDashboard,
  UilBolt,
  UilBuilding,
  UilEstate,
  UilBatteryBolt,
  UilPlug,
} from "@iconscout/react-unicons";

const OverviewGrid = () => {
  return (
    <>
    <h1 className="relative z-20 mb-12 text-gray-100 text-5xl md:text-8xl text-center">Overview</h1>
    <div className="grid grid-cols-2 grid-rows-2 rounded-md overflow-hidden relative z-20 w-full md:w-1/2 max-w-[70rem] mx-auto mb-64 bg-gray-100 text-4xl">
      {/* sqr 1-1 */}
      <div className="border p-8 col-span-1 col-start-1 row-span-1">
        <h3 className=" text-blue-950 mb-16">Now</h3>
        <div className="flex items-center justify-around mb-10">
          <UilDashboard color="#1e40af" size="50" className="mr-4" />{" "}
          <UilBolt color="#1e40af"  size="50" className="mr-4" />{" "}
          <div className="relative">
            <span className="absolute -top-10 right-2 text-blue-800">PG&E</span>
            <UilBuilding color="#1e40af"  size="50" className="mr-4" />
          </div>
        </div>
        <div className="flex items-center justify-around mb-2 text-blue-950">
          <span>$0.37/</span>

          <span>$0.44/</span>

          <span>$0.54</span>
        </div>{" "}
        <div className="text-center w-full mt-24 md:mt-12 text-blue-950">
          <span>+5-10%/yr</span>
        </div>
      </div>

      {/* sqr 2-1 */}
      <div className="border p-8 col-span-1 col-start-2 row-span-1">
        <h3 className="mb-4 text-blue-950">Program</h3>
        <div className="flex items-center justify-center mb-2">
          <UilEstate color="#1e40af"  size="100" className="mr-4" />
        </div>

        <div className="flex items-center text-blue-950">
          <div className="flex items-center gap-2 w-full">
            <span>$0.18</span>
            <div className="h-[1px] w-full bg-gray-950 flex-1"></div>
            <span>$0.35</span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-12 mb-2 mt-16 md:mt-5 text-blue-950">
          <span>+3.9%/yr</span> <span className="border-2 p-2">25 years</span>
        </div>
      </div>

      {/* sqr 1-2 */}
      <div className="border p-8 col-span-1 col-start-1 row-span-1">
        <h3 className="text-blue-950">Qualifications</h3>
        <ul className="text-xl md:text-2xl  md:ml-10 mt-4 text-blue-950">
          <li className="list-decimal uppercase my-8">homeowner</li>{" "}
          <li className="list-decimal uppercase my-8">roof/electrical</li>{" "}
          <li className="list-decimal uppercase my-8">usage</li>{" "}
          <li className="list-decimal uppercase my-8">phc</li>
        </ul>
      </div>

      {/* sqr 2-2 */}
      <div className="border p-8 col-span-1 col-start-2 row-span-1">
        <h3 className="text-blue-950">Questions</h3>
        <ul className="text-xl md:text-2xl md:ml-10 mt-4 text-blue-950">
          <li className="list-decimal uppercase my-8">what happens if i move?</li>{" "}
          <li className="list-decimal uppercase my-8">can my rate ever change?</li>{" "}
          <li className="list-decimal uppercase my-8">repairs/maintainance/<br/>monitoring</li>{" "}
          <li className="list-decimal uppercase my-8">how do we make money?</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default OverviewGrid;
