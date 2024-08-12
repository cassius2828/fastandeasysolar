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
      <div className="p-12 text-2xl flex flex-col items-center justify-center h-full w-full">
        <div className="flex-col flex items-center justify-center border p-4">
          <h2>Pros</h2>
          <ul>
            <li> No out-of-pocket cost</li>
            <li>Tax Rebate 30%</li>
            <li>More savings long term</li>
            <li> cheaper than PG&E</li>
          </ul>
        </div>

        <div className="flex-col flex items-center justify-center border p-4">
          <h2>Pros</h2>
          <ul>
            <li> No out-of-pocket cost</li>
            <li>Tax Rebate 30%</li>
            <li>More savings long term</li>
            <li> cheaper than PG&E</li>
          </ul>
        </div>


        <ContactBtn text="consult an expert today" propColor={`blue`} topPos />
      </div>
    </div>
  );
};
