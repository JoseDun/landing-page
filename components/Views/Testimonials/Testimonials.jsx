import React, { useState } from "react";
import Image from "next/image";

import { IMG_ITEMS, ITEMS } from "@/constants/testimoniasl-values.js";

import classes from "./testimonials.module.css";

function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className={`${classes.testimonials}`} id="testimonials">
      <aside className={`${classes.testimonials__left}`}>
        {ITEMS.map(({ label, title, icon, id }, i) => (
          <div
            className={`${classes.testimonials__left__div}`}
            onClick={() => setSelectedImage(i)}
            key={id}
          >
            <div className={`${classes.testimonials__div}`} key={i}>
              <span>{icon}</span>

              <div>
                <h6>{title}</h6>
                <p>{label}</p>
              </div>
            </div>
          </div>
        ))}
      </aside>

      <aside className={`${classes.testimonials__right}`}>
        {IMG_ITEMS.map(({ src, id }, i) => (
          <>
            {selectedImage === i && (
              <div className={`${classes.logo}`} key={id}>
                <Image alt="text" width="260" height="560" src={src} />
              </div>
            )}
          </>
        ))}
      </aside>
    </section>
  );
}

export default Testimonials;
