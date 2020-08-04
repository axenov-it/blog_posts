import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export default function MenuNav({ links }) {
  return (
    <ul>
      {links.map(({ name, href }) => (
        <li key={href}>
          <NavLink exact className="nav-link" to={href}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
