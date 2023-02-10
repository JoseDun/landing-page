import React from "react";

import { MOCK_ITEM_LIST } from "@/constants/data";
import { ItemList } from "../ItemList/";
import { Button } from "../Button";

import classes from "./table.module.css";

const Table = ({ title, cost, label, buttonText }) => {
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
              return <ItemList key={id} icon={icon} text={text} />;
            })}
          </ul>
        </div>
      </div>

      <Button text={buttonText} insideButton />
    </div>
  );
};

export default Table;
