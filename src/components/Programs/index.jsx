import { useState } from "react";

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(1);
  return (
    <>
      {" "}
      <h2 id="scroll-to-programs" className="text-5xl relative z-30 text-center -top-20 text-gray-200 font-bold my-40 lf:my-0">Click Each Button to Learn More</h2>
      <section id="programs" className="bg-gray-100 w-full lg:w-9/12 lg:h-[50rem] flex flex-col justify-center items-center mx-auto rounded-lg relative z-30 shadow-lg my-12">
        <span
          onClick={() => setSelectedProgram(1)}
          className={` cursor-pointer absolute -top-10 left-20 lg:left-96 shadow-lg p-4 text-gray-200 bg-blue-500 rounded-full flex justify-center items-center text-3xl font-bold ${
            selectedProgram !== 1 && "bg-gray-600"
          }`}
        >
          Purchase
        </span>{" "}
        <span
          onClick={() => setSelectedProgram(2)}
          className={` cursor-pointer absolute -top-10 shadow-lg p-4 text-gray-200 bg-blue-500 rounded-full flex justify-center items-center text-3xl font-bold ${
            selectedProgram !== 2 && "bg-gray-600"
          }`}
        >
          Lease
        </span>{" "}
        <span
          onClick={() => setSelectedProgram(3)}
          className={` cursor-pointer absolute -top-10 right-32 lg:right-96  shadow-lg p-4 text-gray-200 bg-blue-500 rounded-full flex justify-center items-center text-3xl font-bold ${
            selectedProgram !== 3 && "bg-gray-600"
          }`}
        >
          PPA
        </span>
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

export const Purchase = () => {
  return <div>Purchase</div>;
};

export const Lease = () => {
  return <div>Lease</div>;
};

export const PPA = () => {
  return <div>PPA</div>;
};

export const ProgramContent = ({ title, text, img }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around">
      <div className="flex flex-col justify-center items-center p-12">
        <h1 className="text-6xl my-12">{title}</h1>
        <img
          className=""
          src="https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg"
          alt=""
        />
      </div>
      <div className="p-12 text-2xl ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          odit voluptatibus nobis. Ducimus, dignissimos quo. Delectus
          perferendis vel in nesciunt illo quaerat dolorum, dolor rerum maxime,
          vitae possimus velit mollitia.lorem Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Atque qui debitis, sapiente unde
          nesciunt laboriosam autem, enim aliquid est illum, ab similique!
          Tempore repellat facere, obcaecati consequatur nisi sunt mollitia.
        </p>
      </div>
    </div>
  );
};
