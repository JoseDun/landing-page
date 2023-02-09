import React from "react";
import classes from "../../styles/pricing.module.css";

const Pricing = () => {
  return (
    <section className={`${classes.pricing}`} id="pricing">
      <aside className={`${classes.asideLeft}`}>
        <div className={`${classes.asideLeft__div}`}>
          <span>Pricing</span>
        </div>
        <h2>A simple price</h2>
      </aside>
      <aside className={`${classes.asideRight}`}>
        <div className={`${classes.boxLeft}`}>
          <div className={`${classes.boxLeft__title}`}>Basic Plan</div>
          <div className={`${classes.boxLeft__center}`}>
            <div className={`${classes.boxLeft__center_container}`}>
              <div className={`${classes.boxLeft__center_title}`}>
                <h2>9.99</h2>
                <p>I want no chim pot burke tosser cras nice one boot fanny.</p>
              </div>
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
          <div className={`${classes.boxLeft__down}`}>Purchase Now</div>
        </div>
        <div className={`${classes.boxRight}`}>
          <div className={`${classes.boxRight__title}`}>Enterprise</div>
          <div className={`${classes.boxRight__center}`}>
            <div className={`${classes.boxRight__center_container}`}>
              <div className={`${classes.boxRight__center_title}`}>
                <h2>9.99</h2>
                <p>I want no chim pot burke tosser cras nice one boot fanny.</p>
              </div>
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
          <div className={`${classes.boxRight__down}`}>Purchase Now</div>
        </div>
      </aside>
    </section>
  );
};

export default Pricing;
