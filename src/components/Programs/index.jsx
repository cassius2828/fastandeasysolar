import { useState } from "react";
import { ProgramBtn } from "./ProgramBtn";
import { ProgramContent } from "./ProgramContent";
import { useProgramContext } from "../../context/useProgramContext";
import useWindowWidth from "../../customHooks/useWindowWidth";

const Programs = () => {
  //////////////////////
  // Context
  //////////////////////
  const { selectedProgram, setSelectedProgram } = useProgramContext();
  //////////////////////
  // Get Window Width
  //////////////////////
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;
  return (
    <>
      <h2
        id="scroll-to-programs"
        className="text-5xl relative z-30 text-center -top-32 text-gray-200 font-bold mt-96"
      >
        {isMobile && "Click Each Button to Learn More"}
      </h2>
      <section
        id="programs"
        className="bg-gray-100 w-full lg:w-9/12  flex flex-col justify-center items-center mx-auto rounded-lg relative z-30 shadow-lg my-20"
      >
        <div className="flex justify-around w-full">
          {/* Program Buttons */}
          <ProgramBtn
            selectedProgram={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            programNum={1}
            title={`Ownership`}
          />
          <ProgramBtn
            selectedProgram={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            programNum={2}
            title={`Lease`}
          />
          <ProgramBtn
            selectedProgram={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            programNum={3}
            title={`Hybrid Utility`}
          />
        </div>

        {/* Program Content */}

        <ProgramContent isMobile={isMobile} />
      </section>
    </>
  );
};

export default Programs;
