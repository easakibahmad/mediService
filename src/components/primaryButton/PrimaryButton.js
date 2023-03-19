import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
