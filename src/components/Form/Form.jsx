import { useEffect } from "react";
import { useFormContext } from "../../context/useFormContext";
import { InputGroupContact } from "./ContactForm";
import { InputGroupQualifications } from "./QualForm";

const Form = () => {
  const { form } = useFormContext();

  return (
    <div className="flex flex-col items-center relative">
      {/* form step status */}
      <span className=" absolute -top-10 shadow-lg w-20 h-20 bg-blue-500 rounded-full flex justify-center items-center text-3xl font-bold">
        1/2
      </span>
      {/* form */}
      <form
        style={{ maxWidth: "80rem" }}
        className="w-9/12  p-8 my-4 md:px-12  lg:pl-20 lg:pr-40  rounded-2xl shadow-2xl bg-white flex flex-col items-center"
      >
        <div className="flex">
          {/* title */}
          <h1 className="font-bold uppercase text-5xl">
            find out how much you can save today
          </h1>
        </div>
        <div className="mt-5 w-full">
          {form.formStep === 1 ? (
            <InputGroupQualifications />
          ) : (
            <InputGroupContact />
          )}
        </div>


      </form>
    </div>
  );
};
export default Form;
