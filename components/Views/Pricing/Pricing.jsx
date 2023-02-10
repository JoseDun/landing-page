import React from "react";

import { Table } from "../../common/table";

import classes from "./pricing.module.css";

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
        <Table
          cost={9.99}
          label="I do not want no chim pot burke tosser cras nice one boot fanny."
          title="BASIC PLAN"
        />
        <Table
          cost={29.99}
          label="I do not want no chim pot burke tosser cras nice one boot fanny."
          title="ENTERPRISE"
        />
      </aside>
    </section>
  );
};

export default Pricing;
