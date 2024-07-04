const InfoCard = () => {
  return (
    <div style={{maxWidth:'40rem'}} className="w-full px-8 py-12 mb-8 lg:mb-0  bg-blue-900 rounded-2xl relative z-40 lg:-left-24 left-0">
      <div className="flex flex-col text-white">
        <h1 className="font-bold uppercase text-4xl my-4">
          Drop in our office
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur vitae
          nibh viverra, auctor turpis sed, scelerisque ex.
        </p>

        <div className="flex my-4 w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <i className="fas fa-map-marker-alt pt-2 pr-2" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">Main Office</h2>
            <p className="text-gray-400">
              5555 Tailwind RD, Pleasant Grove, UT 73533
            </p>
          </div>
        </div>

        <div className="flex my-4 w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <i className="fas fa-phone-alt pt-2 pr-2" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">Call Us</h2>
            <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
            <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
          </div>
        </div>

        <div className="flex my-4 w-2/3 lg:w-1/2">
          <a
            href="https://www.facebook.com/ENLIGHTENEERING/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
          >
            <i className="fab fa-facebook-f text-blue-900" />
          </a>
          <a
            href="https://www.linkedin.com/company/enlighteneering-inc-"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
          >
            <i className="fab fa-linkedin-in text-blue-900" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
