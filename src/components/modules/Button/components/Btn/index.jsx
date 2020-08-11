import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Btn({ className, onClick, title }) {
  return (
    <button onClick={onClick} className={styles[className]}>
      {title}
    </button>
  );
}

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Btn;
