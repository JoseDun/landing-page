import React, { useState } from "react";
import Image from "next/image";

import imageI from "../../public/images/0.png";
import imageII from "../../public/images/1.png";

import classes from "../../styles/testimonials.module.css";

function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(1);

  return (
    <section className={`${classes.testimonials}`} id="testimonials">
      <aside className={`${classes.testimonials__left}`}>
        <div
          className={`${classes.testimonials__left__div}`}
          onClick={() => setSelectedImage(1)}
        >
          <div className={`${classes.testimonials__div}`}>
            <span>
              <i className="ri-lock-line"></i>
            </span>

            <div>
              <h6>Reporting & Analysis</h6>
              <p>
                I do not want no chim pot burke tosser cras nice one boot fanny.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${classes.testimonials__left__div}`}
          onClick={() => setSelectedImage(2)}
        >
          <div className={`${classes.testimonials__div}`}>
            <span>
              <i className="ri-lock-line"></i>
            </span>

            <div>
              <h6>Reporting & Analysis</h6>
              <p>
                I do not want no chim pot burke tosser cras nice one boot fanny.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${classes.testimonials__left__div}`}
          onClick={() => setSelectedImage(3)}
        >
          <div className={`${classes.testimonials__div}`}>
            <span>
              <i className="ri-lock-line"></i>
            </span>

            <div>
              <h6>Reporting & Analysis</h6>
              <p>
                I do not want no chim pot burke tosser cras nice one boot fanny.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <aside className={`${classes.testimonials__right}`}>
        <Image
          alt="text"
          width="260"
          height="560"
          style={{
            display: selectedImage === 1 ? "block" : "none",
          }}
          src={imageI}
        />
        <Image
          alt="text"
          width="260"
          height="560"
          style={{
            display: selectedImage === 2 ? "block" : "none",
          }}
          src={imageII}
        />
        <Image
          alt="text"
          width="260"
          height="560"
          style={{
            display: selectedImage === 3 ? "block" : "none",
          }}
          src={imageI}
        />
      </aside>
    </section>
  );
}

export default Testimonials;
