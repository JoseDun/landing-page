import React from "react";
import classes from "../../styles/hero.module.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <>
      <div className={`${classes.pre_hero}`}></div>
      <section className={`${classes.hero}`}>
        <Header isOnHero />
        <p>hero</p>
      </section>
    </>
  );
};

export default Hero;
