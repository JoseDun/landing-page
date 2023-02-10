import React from "react";

import classes from "./statusCard.module.css";

const StatusCard = ({ title, label }) => {
  return (
    <div className={`${classes.status}`}>
      <h2>{title}</h2>
      <p> {label}</p>
    </div>
  );
};

export default StatusCard;
