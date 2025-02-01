import {
  UilInstagram,
  UilLinkedin,
  UilFacebookF,
  UilYoutube,
} from "@iconscout/react-unicons";

const SocialList = ({ size = "24" }) => {
  return (
    <div>
      <h4 className="text-3xl text-blue-400 mb-8">Social</h4>
      <ul className="text-xl flex flex-col justify-center items-center relative space-y-2 gap-4">
        <li className="flex items-center justify-between  w-1/2">
          <div className="flex items-center">
            <UilInstagram size={size} className="mr-2" />
            Instagram:
          </div>
          <span className="hover:text-blue-300 transition-all duration-200 ease-in-out cursor-pointer ml-1">
            @solarsolutionnv
          </span>
        </li>
        <li className="flex items-center justify-between  w-1/2">
          <div className="flex items-center">
            <UilFacebookF size={size} className="mr-2" />
            Facebook:
          </div>
          <span className="hover:text-blue-300 transition-all duration-200 ease-in-out cursor-pointer ml-1">
            fastandeasysolar
          </span>
        </li>
        <li className="flex items-center justify-between  w-1/2">
          <div className="flex items-center">
            <UilLinkedin size={size} className="mr-2" />
            LinkedIn:
          </div>
          <span className="hover:text-blue-300 transition-all duration-200 ease-in-out cursor-pointer ml-1">
            fastandeasysolar
          </span>
        </li>
        <li className="flex items-center justify-between w-1/2">
          <div className="flex items-center">
            <UilYoutube size={size} className="mr-2" />
            YouTube:
          </div>
          <span className="hover:text-blue-300 transition-all duration-200 ease-in-out cursor-pointer ml-1">
            fastandeasysolar
          </span>
        </li>
      </ul>
    </div>
  );
};
export default SocialList;
