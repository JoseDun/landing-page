import React from "react";
import classes from "../../styles/card.module.css";

const Card = ({ icon, title, text }) => {
  return (
    <article className={`${classes.card}`}>
      <div className={`${classes.card__div}`}>{icon}</div>
      <h2>{title}</h2>
      <div className={`${classes.card__div}`}>{text}</div>
    </article>
  );
};

export default Card;
