import React from "react";

import List from "../list/List";
import { MOCK_ITEM_LIST } from "@/constants/data";

import classes from "./table.module.css";

const Table = ({ title, cost, label }) => {
  return (
    <div className={`${classes.boxLeft}`}>
      <div className={`${classes.boxLeft__title}`}>{title}</div>
      <div className={`${classes.boxLeft__center}`}>
        <div className={`${classes.boxLeft__center_container}`}>
          <div className={`${classes.boxLeft__center_title}`}>
            <h2>{cost}</h2>
            <p>{label}</p>
          </div>
          <ul>
            {MOCK_ITEM_LIST.map(({ id, icon, text }) => {
              return <List key={id} icon={icon} text={text} />;
            })}
          </ul>
        </div>
      </div>

      <div className={`${classes.boxLeft__down}`}>Purchase Now</div>
    </div>
  );
};

export default Table;
