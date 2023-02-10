import React from "react";

import classes from "./button.module.css";

const Button = ({ children, text, secondary, insideButton, icon = "" }) => {
  const buttonClasses = secondary
    ? classes.SecondaryButton
    : insideButton
    ? classes.insideButton
    : classes.button;

  return (
    <button type="button" className={`${buttonClasses}`}>
      {children} {text} {icon}
    </button>
  );
};

export default Button;
