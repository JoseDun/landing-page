import React from "react";
import Image from "next/image";
import Header from "../Header/Header";

import heroImg from "../../public/images/header-app0.png";

import classes from "../../styles/hero.module.css";
import Button from "../common/Button";
import StatusCard from "../common/StatusCard";

const Hero = () => {
  return (
    <>
      <div className={`${classes.pre_hero}`}></div>

      <section className={`${classes.hero}`} id="#hero">
        <Header isOnHero />

        <div className={`${classes.container}`}>
          <aside className={`${classes.container__left}`}>
            <div>
              <Button text="A CONNECTED WALLET FOR A CONNECTED" />
              <div className={`${classes.container__left_div}`}>
                <h1>
                  Mobile banking. <br /> Transfer money.
                  {/*                   <br /> Budget better.
                  <br /> Pay Bills. */}
                </h1>
                <p>
                  A connected wallet for a connected world. By making money move
                  more
                  <br /> freely, for more people, for more growth.
                </p>
              </div>
            </div>
            <div className={`${classes.container}`}>
              <StatusCard />
              <StatusCard />
            </div>
          </aside>
          <aside className={`${classes.hero__img}`}>
            <Image
              alt="hero-image"
              src={heroImg}
              width="368"
              height="766"
              priority={true}
              placeholder="blur"
            />
          </aside>
        </div>
        <div className={`${classes.container__footer}`}>
          <p>+4000 CUSTOMERS TRUST OF US FROM 12 COUNTRIES</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
