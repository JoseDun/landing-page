import React from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";

import classes from "./AppLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`${classes.main}`}>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
