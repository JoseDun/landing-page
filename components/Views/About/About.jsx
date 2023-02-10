import React from "react";
import Image from "next/image";

import { Button } from "@/components/common/Button";
import { ItemList } from "@/components/common/ItemList";

import { MOCK_ITEM_LIST } from "@/constants/data";

import aboutImg from "@/public/images/aboutImage.png";
import classes from "./about.module.css";

const About = () => {
  return (
    <section className={`${classes.about}`} id="about">
      <div className={`${classes.container}`}>
        <figure className={`${classes.hero__img}`}>
          <Image
            alt="hero-image"
            src={aboutImg}
            width="262"
            height="558"
            priority={true}
            placeholder="blur"
          />
        </figure>

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
                {MOCK_ITEM_LIST.map(({ id, icon, text }) => {
                  return <ItemList key={id} icon={icon} text={text} />;
                })}
              </ul>
            </div>
          </div>

          <Button text="Download Now" />
        </aside>
      </div>
    </section>
  );
};

export default About;
