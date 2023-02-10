import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FOOTER__LINK } from "@/constants/links";

import logo from "@/public/images/Logotipo.png";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <nav className={`${classes.nav__wrapper}`}>
        <figure className={`${classes.logo}`}>
          <Image
            alt="logo"
            src={logo}
            width="200"
            height="80"
            style={{ objectFit: "contain" }}
          />
        </figure>

        <div className={`${classes.nav__menu}`}>
          {FOOTER__LINK.map((item, index) => (
            <Link href={item.path} key={index}>
              {item.display}
            </Link>
          ))}
        </div>

        <div>Made By MD-Develop</div>
      </nav>
    </footer>
  );
};

export default Footer;
