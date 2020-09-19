import React from "react";
import { concatClases } from "../../../../../lib/helpers";
import styles from "./style.module.css";

function Button({ className, style, title }) {
  const btnClassName = concatClases(styles[className], style);

  return (
    <button type="button" className={btnClassName}>
      {title}
    </button>
  );
}

export default Button;
