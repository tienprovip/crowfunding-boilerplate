import React from "react";
import PropTypes from "prop-types";

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 border rounded-lg gap-x-3 border-strock dark:border-darkStroke"
      onClick={onClick}
    >
      <img src="./Google.png" alt="icon-google" />
      <span className="text-base font-semibold text-text2 dark:text-white">
        {text}
      </span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonGoogle;
