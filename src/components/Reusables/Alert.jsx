import { useEffect } from "react";


export function TwUIAlert({ message, success, handleClose }) {
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 3000);
  }, []);
  return (
    <div className="rounded-md bg-gray-50 p-5 absolute left-1/2 bottom-0 -translate-x-1/2  z-50 alert-bounce">
      <div className="flex">
        <div className="shrink-0">
        </div>
        <div className="ml-3">
          <h3
            className={`text-xl font-medium ${
              success ? "text-green-500" : "text-red-500"
            }`}
          >
            {success ? "Success!" : "Attention Needed!"}
          </h3>
          <div
            className={`mt-2 text-xl ${
              success ? "text-green-500" : "text-red-500"
            }`}
          >
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
