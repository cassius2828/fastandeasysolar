import { useState } from "react";
import { ProgramBtn } from "./ProgramBtn";
import { ProgramContent } from "./ProgramContent";
import { useProgramContext } from "../../context/useProgramContext";

const Programs = () => {
  //////////////////////
  // Context
  //////////////////////
  const { selectedProgram, setSelectedProgram } = useProgramContext();

  return (
    <>
      <h2
        id="scroll-to-programs"
        className="text-5xl relative z-30 text-center -top-20 text-gray-200 font-bold mt-96"
      >
        Click Each Button to Learn More
      </h2>
      <section
        id="programs"
        className="bg-gray-100 w-full lg:w-9/12 lg:h-[50rem] flex flex-col justify-center items-center mx-auto rounded-lg relative z-30 shadow-lg my-12"
      >
        <div className="flex justify-evenly w-full">
          {/* Program Buttons */}
          <ProgramBtn
            selectedProgram={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            programNum={1}
            title={`Purchase`}
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
            title={`PPA`}
          />
        </div>

        {/* Program Content */}
        {selectedProgram === 1 ? (
          <ProgramContent title="title 1" />
        ) : selectedProgram === 2 ? (
          <ProgramContent title="title 2" />
        ) : (
          <ProgramContent title="title 3" />
        )}
      </section>
    </>
  );
};

export default Programs;
