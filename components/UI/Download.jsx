import Image from "next/image";
import React from "react";

import Button from "../common/Button";
import aboutImg from "../../public/images/download.png";

import classes from "../../styles/download.module.css";
import SecondaryButton from "../common/SecondaryButton";

const Download = () => {
  return (
    <section className={`${classes.about}`} id="download">
      <div className={`${classes.container}`}>
        <aside className={`${classes.container__left}`}>
          <div className={`${classes.container__left_div}`}>
            <div>
              <p>DOWNLOAD RAVO APP</p>
              <h2>
                We available on store <br /> download now.
              </h2>
            </div>
            <p>
              Morbi sagittis hendrt nulla ultricies.
              <br /> Cras en diam ips elementum pretium hendrerit ultricies.
            </p>
          </div>

          <div className={`${classes.container__button}`}>
            <SecondaryButton
              text="Download Now"
              icon={<i class="ri-apple-fill"></i>}
            />
            <SecondaryButton
              text="Download Now"
              icon={<i class="ri-google-play-fill"></i>}
            />
          </div>
        </aside>
        <aside className={`${classes.hero__img}`}>
          <Image
            alt="hero-image"
            src={aboutImg}
            width="552"
            height="352"
            priority={true}
            placeholder="blur"
          />
        </aside>
      </div>
    </section>
  );
};

export default Download;
