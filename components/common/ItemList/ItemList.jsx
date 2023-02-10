import React from "react";

import classes from "./ItemList.module.css";

const ItemList = ({ icon, text }) => {
  return (
    <li>
      <span className={`${classes.span}`}>
        {icon}
        <p>{text} </p>
      </span>
    </li>
  );
};

export default ItemList;
