import React from "react";
import classes from "../../styles/button.module.css";

const Button = ({ text, padding }) => {
  return (
    <div className={`${classes.button}`} style={{ padding: padding }}>
      {text}
    </div>
  );
};

export default Button;
