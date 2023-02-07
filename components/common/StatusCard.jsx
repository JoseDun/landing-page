import React from "react";

import classes from "../../styles/statusCard.module.css";

const StatusCard = () => {
  return (
    <div className={`${classes.status}`}>
      <h2>2m + </h2>
      <p> Downloaded</p>
    </div>
  );
};

export default StatusCard;
