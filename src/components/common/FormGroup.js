import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col mb-4 md:mb-5 gap-y-2 md:gap-y-3">
      {children}
    </div>
  );
};

export default FormGroup;
