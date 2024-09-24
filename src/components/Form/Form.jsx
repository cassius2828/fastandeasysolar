import { useEffect } from "react";
import { useFormContext } from "../../context/useFormContext";
import { InputGroupContact } from "./ContactForm";
import { InputGroupQualifications } from "./QualForm";

const Form = () => {
  const { form } = useFormContext();

  return (
    <div className="flex flex-col items-center relative mt-12 lg:mt-0">
   
      {/* form */}
      <form
        style={{ maxWidth: "80rem" }}
        className="w-9/12  p-8 my-4 md:px-12  lg:pl-20 lg:pr-40  rounded-2xl shadow-2xl bg-white flex flex-col items-center"
      >
        <div className="flex">
          {/* title */}
          <h3 className="font-bold text-4xl">
           Ready to power your home with solar energy? Call now to get started or fill out the form
          </h3>
        </div>
        <div className="mt-5 w-full min-h-[50rem]">
       
            <InputGroupContact />
       
        </div>
      </form>
    </div>
  );
};
export default Form;
