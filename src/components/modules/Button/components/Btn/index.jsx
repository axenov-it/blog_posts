import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Btn({ className, onClick, title, style }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles[className]} ${style}`}
    >
      {title}
    </button>
  );
}

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default Btn;
