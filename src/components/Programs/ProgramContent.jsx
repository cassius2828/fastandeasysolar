import { ContactBtn } from "../Reusables/Buttons";

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
      <div className="p-12 text-2xl flex flex-col items-center justify-center h-full">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          odit voluptatibus nobis. Ducimus, dignissimos quo. Delectus
          perferendis vel in nesciunt illo quaerat dolorum, dolor rerum maxime,
          vitae possimus velit mollitia.lorem Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Atque qui debitis, sapiente unde
          nesciunt laboriosam autem, enim aliquid est illum, ab similique!
          Tempore repellat facere, obcaecati consequatur nisi sunt mollitia.
        </p>
        <ContactBtn text="consult an expert today" propColor={`blue`} topPos />
      </div>
    </div>
  );
};
