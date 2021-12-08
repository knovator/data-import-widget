import React from "react";

let Spinner = ({ loader = false, children }) => {
  return (
    <React.Fragment>
      {loader && (
        <div className="flex justify-center items-center">
          <div
            className=" animate-spin
            rounded-full
            h-3
            w-3
        border-t-2 border-b-2 border-white-500 m-2"
          ></div>
        </div>
      )}
      {children}
    </React.Fragment>
  );
};
export default Spinner;
