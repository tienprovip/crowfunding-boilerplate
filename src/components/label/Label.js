import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
import classNames from "utils/classNames";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "inline-block text-sm font-medium cursor-pointer text-text2 dark:text-text3",
        className
      )}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default withErrorBoundary(Label, {
  FallbackComponent: ErrorComponent,
});
