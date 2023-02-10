import React from "react";

import classes from "./list.module.css";

const List = ({ icon, text }) => {
  return (
    <li>
      <span className={`${classes.span}`}>
        {icon}
        <p>{text} </p>
      </span>
    </li>
  );
};

export default List;
