import React from "react";

let Spinner = ({ loading = false, children }) => {
  return (
    <React.Fragment>
      {loading && (
        <div className="flex items-center justify-center">
          <div className="w-3 h-3 m-2 border-t-2 border-b-2 rounded-full animate-spin border-white-500"></div>
        </div>
      )}
      {children}
    </React.Fragment>
  );
};
export default Spinner;
