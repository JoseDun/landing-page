import React from "react";
import classes from "../../styles/button.module.css";

const SecondaryButton = ({ text, icon }) => {
  return (
    <div className={`${classes.SecondaryButton}`}>
      {text} {icon}
    </div>
  );
};

export default SecondaryButton;
