import React from "react";

import classes from "./card.module.css";

const Card = ({ icon, title, text }) => {
  return (
    <>
      <article className={`${classes.card}`}>
        <div className={`${classes.card__div}`}>{icon}</div>
        <h2>{title}</h2>
        <p className={`${classes.card__div}`}>{text}</p>
      </article>
    </>
  );
};

export default Card;
