import React from "react";
import Image from "next/image";

import { Header } from "@/components/Layout/Header";
import { Button } from "@/components/common/Button";
import { StatusCard } from "@/components/common/Cards/statusCard";

import heroImg from "@/public/images/header-app0.png";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={`${classes.pre_hero}`}></div>

      <section className={`${classes.hero}`} id="#hero">
        <Header isOnHero />

        <div className={`${classes.container}`}>
          <aside className={`${classes.container__left}`}>
            <div className={`${classes.container__left_but}`}>
              <Button text="A CONNECTED WALLET FOR A CONNECTED" />
              <div className={`${classes.container__left_div}`}>
                <h1>
                  Mobile banking. <br /> Transfer money.
                </h1>
                <p>
                  A connected wallet for a connected world. By making money move
                  more
                  <br /> freely, for more people, for more growth.
                </p>
              </div>
            </div>
            <div className={`${classes.container}`}>
              <StatusCard label="Downloaded" title="2m + " />
              <StatusCard label="Downloaded" title="2m + " />
            </div>
          </aside>
          <figure className={`${classes.hero__img}`}>
            <Image
              alt="hero-image"
              src={heroImg}
              width="368"
              height="766"
              priority={true}
              placeholder="blur"
            />
          </figure>
        </div>
        <div className={`${classes.container__footer}`}>
          <p>+4000 CUSTOMERS TRUST OF US FROM 12 COUNTRIES</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
