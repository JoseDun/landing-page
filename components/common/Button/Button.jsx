import React from "react";

import classes from "./button.module.css";

const Button = ({ text, secondary, icon = "" }) => {
  const buttonClasses = secondary ? classes.SecondaryButton : classes.button;

  return (
    <button type="button" className={`${buttonClasses}`}>
      {text} {icon}
    </button>
  );
};

export default Button;
