import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Card from "../common/Card";
import { cardData } from "../data/data";

import classes from "../../styles/services.module.css";

const Services = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: screenWidth <= 419 ? false : true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    arrows: false,
    centerMode: screenWidth <= 330 ? false : true,
    slidesToShow: 1,
    slidesToScroll: 1,

    cssEase: "linear",
    variableWidth: true,
    variableHeight: true,
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
          {cardData.map(({ icon, title, text, id }) => (
            <Card key={id} icon={icon} title={title} text={text} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
