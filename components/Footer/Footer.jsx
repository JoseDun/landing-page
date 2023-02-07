import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FOOTER__LINK } from "../data/nav-link";

import logo from "../../public/images/logo-light.png";
import classes from "../../styles/footer.module.css";
const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <nav className={`${classes.nav__wrapper}`}>
        <div className={`${classes.logo}`}>
          <Image
            alt="logo"
            src={logo}
            width="70"
            height="30"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={`${classes.navigation}`}>
          <div className={`${classes.nav__menu}`}>
            {FOOTER__LINK.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.display}
              </Link>
            ))}
          </div>
        </div>
        <div>Made By MD-Develop</div>
      </nav>
    </footer>
  );
};

export default Footer;
