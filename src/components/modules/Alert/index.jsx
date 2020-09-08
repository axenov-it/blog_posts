import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Alert({ isShow, message, className, style }) {
  if (!isShow) return null;

  const alertClassName = style
    ? `${styles[className]} ${style}`
    : styles[className];

  return (
    <div className={styles.alert}>
      <div className={alertClassName}>{message}</div>
    </div>
  );
}

Alert.defaultProps = {
  style: "",
};

Alert.propTypes = {
  isShow: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default Alert;
