import { InputGroupContact } from "./ContactForm";

const Form = () => {
  return (
    <div className="flex flex-col items-center relative mt-12 lg:mt-0">
      {/* form */}
      <form
        style={{ maxWidth: "80rem" }}
        className="w-full  p-8 my-4 md:px-12  lg:pl-20 lg:pr-40  rounded-2xl shadow-2xl bg-white flex flex-col items-center"
      >
        <div className="flex">
          {/* title */}
          <h2 className="font-bold text-4xl">
            Ready to power your home with solar energy? Call now to get started
            or fill out the form
          </h2>
        </div>
        <div className="mt-5 w-full min-h-500px ">
          <InputGroupContact />
        </div>
      </form>
    </div>
  );
};
export default Form;
