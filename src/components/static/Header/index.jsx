import React from "react";
import Menu from "../../modules/MenuNav";
import menuLinks from "./menu.json";
import styles from "./styles.module.css";

function Header() {
  const { header, header__main } = styles;

  return (
    <header className={header}>
      <div className={header__main}>
        <Menu links={menuLinks} />
      </div>
    </header>
  );
}

export default Header;
