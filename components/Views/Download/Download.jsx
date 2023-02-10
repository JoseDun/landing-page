import Image from "next/image";
import React from "react";

import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/icon";

import aboutImg from "@/public/images/download.png";
import classes from "./download.module.css";

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
            <Button
              secondary
              text="Apple store"
              icon={<Icon mode="fill" name="apple" />}
            />
            <Button
              secondary
              text="Google play"
              icon={<Icon mode="fill" name="google-play" />}
            />
          </div>
        </aside>
        <figure className={`${classes.hero__img}`}>
          <Image
            alt="hero-image"
            src={aboutImg}
            width="552"
            height="352"
            priority={true}
            placeholder="blur"
          />
        </figure>
      </div>
    </section>
  );
};

export default Download;
