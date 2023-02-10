import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { NAV__LINK } from "@/constants/links";
import { Icon } from "@/components/common/icon";

import logo from "@/public/images/Logotipo.png";
import classes from "./header.module.css";

const Header = ({ isOnHero }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const adjustHeaderSizeOnScroll = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      return headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      return headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle(`${classes.menu__active}`);
  };

  useEffect(() => {
    isOnHero
      ? headerRef.current.classList.add(`${classes.isOnHero}`)
      : window.addEventListener("scroll", adjustHeaderSizeOnScroll);

    return () => window.removeEventListener("scroll", adjustHeaderSizeOnScroll);
  }, [isOnHero]);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
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
          <Icon mode="line" name="menu" onClick={toggleMenu} />
        </span>
      </nav>
    </header>
  );
};

export default Header;
