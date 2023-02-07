import React, { useRef, useEffect } from "react";

import Link from "next/link";

import classes from "../../styles/header.module.css";
import Image from "next/image";
import logo from "../../public/images/logo-light.png";
import { NAV__LINK } from "../data/nav-link";

const Header = ({ isOnHero }) => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    isOnHero
      ? headerRef.current.classList.add(`${classes.isOnHero}`)
      : window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, [isOnHero]);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
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
        <div
          className={`${classes.navigation}`}
          ref={menuRef}
          onClick={toggleMenu}
        >
          <div className={`${classes.nav__menu}`}>
            {NAV__LINK.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.display}
              </Link>
            ))}
          </div>
        </div>
        <span className={`${classes.mobile__menu}`}>
          <i className="ri-menu-line" onClick={toggleMenu}></i>
        </span>
      </nav>
    </header>
  );
};

export default Header;
