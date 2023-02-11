import Image from "next/image";
import React from "react";

import Button from "../common/Button";
import aboutImg from "../../public/images/aboutImage.png";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section className={`${classes.about}`} id="about">
      <div className={`${classes.container}`}>
        <aside className={`${classes.hero__img}`}>
          <Image
            alt="hero-image"
            src={aboutImg}
            width="262"
            height="558"
            priority={true}
            placeholder="blur"
          />
        </aside>

        <aside className={`${classes.container__left}`}>
          <div>
            <div className={`${classes.container__left_div}`}>
              <p>HIGHLY EXPERTISE</p>
              <h2>
                We design brand, digital <br /> experience.
              </h2>
              <p>
                Morbi sagittis hendrt nulla ultricies.
                <br /> Cras en diam ips elementum pretium hendrerit ultricies.
              </p>
              <ul>
                <li>
                  <span className={`${classes.span}`}>
                    <i className="ri-check-line"></i>
                    <p> Advanced customization theme options</p>
                  </span>
                </li>
                <li>
                  <span className={`${classes.span}`}>
                    <i className="ri-check-line"></i>
                    <p> Advanced customization theme options</p>
                  </span>
                </li>
                <li>
                  <span className={`${classes.span}`}>
                    <i className="ri-check-line"></i>
                    <p> Advanced customization theme options</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Button text="Download Now" padding="18px 40px" />
        </aside>
      </div>
    </section>
  );
};

export default About;
