const Alert = ({ message, success, handleClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-50 w-1/2 p-8 flex justify-center items-center fadeIn">
      <span
        onClick={handleClose}
        className="absolute top-0 right-2 text-2xl cursor-pointer"
      >
        x
      </span>
      <span
        className={`${
          success ? "text-green-500" : "text-red-500"
        } text-xl text-center`}
      >
        {message}
      </span>
    </div>
  );
};
export default Alert;
