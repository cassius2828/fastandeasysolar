import { useGlobalContext } from "../../context/useGlobalContext";

const InfoCard = () => {
  const { handleConversion, freeAssessmentCalendlyUrl } = useGlobalContext();

  return (
    <div
      style={{ maxWidth: "40rem" }}
      className="w-full px-8 py-12 mb-8 lg:mb-0 mt-96 md:mt-0 bg-blue-900 rounded-2xl"
    >
      <div className="flex flex-col text-white">
        {/* Header */}
        <h1 className="font-bold uppercase text-4xl my-4">
          Contact Us Directly
        </h1>

        {/* Contact Information */}
        <div className="flex my-4 w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <i className="fas fa-phone-alt pt-2 pr-2" />
          </div>
          <div className="flex flex-col text-3xl text-gray-50">
            <p>
              <span className="flex items-center mb-2">
                Tel:{" "}
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  id="phone"
                >
                  <path d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 0 0-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 0 0 .722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 0 0 .26-.766z"></path>
                </svg>
              </span>
              (916)-320-7022
            </p>

            <p className="mt-8">
              <span className="flex items-center mb-2">
                Email:{" "}
                <svg
                  fill="#fff"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                  id="email"
                >
                  <g>
                    <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path>
                  </g>
                </svg>
              </span>
              contact@fastandeasysolar.com
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col text-gray-100 mt-8">
          <h3 className="font-bold uppercase text-3xl my-4">Business Hours</h3>
          <ul className="space-y-2 text-xl md:text-2xl">
            <li>Monday: 8am - 8pm</li>
            <li>Tuesday: 8am - 8pm</li>
            <li>Wednesday: 8am - 8pm</li>
            <li>Thursday: 8am - 8pm</li>
            <li>Friday: 8am - 8pm</li>
            <li>Saturday: 10am - 4pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-8 mt-12">
          <h3 className="text-2xl">Book An Appointment Now</h3>
          <a
            onClick={() => handleConversion()}
            href={freeAssessmentCalendlyUrl}
          >
            <button className="flex items-center justify-center text-blue-900 bg-gray-200 hover:bg-gray-300 text-xl w-48 transition-all duration-200 ease-in-out cursor-pointer rounded-md p-2 mr-5 lg:mr-0">
              book
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
