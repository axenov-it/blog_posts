import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export default function MenuNav({ links }) {
  return (
    <nav>
      <ul className={styles.menu}>
        {links.map(({ name, href }) => (
          <li className={styles.menu__item} key={href}>
            <NavLink
              exact
              className={`nav-link ${styles.menu__link}`}
              to={href}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
