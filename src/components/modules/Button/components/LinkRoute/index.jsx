import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function LinkRoute({ href, title, className }) {
  return (
    <Link className={styles[className]} to={href}>
      {title}
    </Link>
  );
}

LinkRoute.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LinkRoute;
