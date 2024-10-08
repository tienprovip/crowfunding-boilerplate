import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const CampCategory = ({ text = "Education", className = "text-xs" }) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex items-baseline font-medium mb-4  gap-x-3 text-text3",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
