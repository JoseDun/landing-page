import React from "react";
import classes from "../../styles/button.module.css";

const Button = ({ text }) => {
  return <div className={`${classes.button}`}>{text}</div>;
};

export default Button;
