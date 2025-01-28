import ApplicationForm from "./ApplicationForm";
import JobDescription from "./JobDescription";

const Careers = () => {
  return (
    <section id="careers" className="w-4/5 md:w-1/2 flex flex-col items-center justify-center py-20 my-96 mx-auto relative z-20 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-8">Careers</h1>
      {/* Open Positions */}
      <div className="text-left w-full px-6 mb-10">
        <p className="text-2xl w-full md:w-3/4 mx-auto my-6 text-gray-700 text-center px-4">
          Join our innovative team at Fast & Easy Solar! We are always looking
          for passionate individuals who are eager to make a difference in the
          renewable energy sector.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  ">
        <JobDescription />
        {/* Job Application Form */}
        <ApplicationForm />
      </div>
    </section>
  );
};
// lead setter | knocking doors to set appointments. commission based, avg 50 to 100k , as a lead setter you specialize in going door to door and setting appointments
export default Careers;
