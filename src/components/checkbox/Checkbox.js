import React from "react";
import classNames from "utils/classNames";

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = "",
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={classNames(
          "inline-flex items-center p-1 justify-center  w-5 h-5 border rounded cursor-pointer text-white select-none",
          checked
            ? "bg-primary border-primary"
            : "border-strock dark:border-text3"
        )}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          name={name}
        />
        <span className={classNames(checked ? "" : "opacity-0 invisible")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && (
        <div
          className="font-medium cursor-pointer text-text3"
          onClick={onClick}
        >
          ${children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
