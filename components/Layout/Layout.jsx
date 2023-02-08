import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: "#a28eb8",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
