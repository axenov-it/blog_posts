import React from "react";
import Menu from "../../modules/MenuNav";
import menuLinks from "./menu.json";
import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <Menu links={menuLinks} />
    </header>
  );
}

export default Header;
