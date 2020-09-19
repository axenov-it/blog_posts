import React from "react";
import Menu from "./components/MenuNav";
import menuLinks from "./menu.json";
import styles from "./styles.module.css";
import Btn from "../../modules/Btn";

function Header() {
  const { header, header__main } = styles;

  return (
    <header className={header}>
      <div className={header__main}>
        {/* <Menu links={menuLinks} /> */}
        <Btn type="button" className="btn__largeDelete" title="Create post" />
        <Btn
          type="link"
          href="https://google.com"
          className="btn__link"
          title="go to google"
        />
      </div>
    </header>
  );
}

export default Header;
