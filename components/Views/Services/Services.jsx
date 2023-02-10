import React from "react";
import Slider from "react-slick";

import { Card } from "@/components/common/Cards/card";
import { useWindowResize } from "@/components/hooks/useWindowResize";

import { CARD_DATA } from "@/constants/data";
import { SLIDER_VALUES, DOTS, CENTER_MODE } from "@/constants/slider-values";

import classes from "./services.module.css";

const Services = () => {
  const { screenWidth } = useWindowResize();

  const settings = {
    ...SLIDER_VALUES,
    dots: screenWidth <= DOTS ? false : true,
    centerMode: screenWidth <= CENTER_MODE ? false : true,
  };

  return (
    <section className={`${classes.services}`} id="services">
      <div className={`${classes.services__container}`}>
        <div className={`${classes.services__div}`}>
          <span>Our Services</span>
        </div>
        <h2>You&apos;re in a secure company</h2>
      </div>
      <div className={`${classes.services__slider}`}>
        <Slider {...settings}>
          {CARD_DATA.map(({ icon, title, text, id }) => (
            <Card key={id} icon={icon} title={title} text={text} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
