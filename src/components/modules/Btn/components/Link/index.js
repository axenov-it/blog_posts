import React from "react";
import PropTypes from "prop-types";
import { concatClases } from "../../../../../lib/helpers";
import styles from "./style.module.css";

function Link({ title, className, style, href }) {
  const btnClassName = concatClases(styles[className], style);

  return (
    <a className={btnClassName} href={href}>
      {title}
    </a>
  );
}

Link.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Link;
