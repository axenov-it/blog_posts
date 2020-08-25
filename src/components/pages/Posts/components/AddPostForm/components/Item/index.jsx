import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Item({
  name,
  type,
  value,
  placeholder,
  onChange,
  className,
  errorText,
  isValid,
}) {
  const inputComponent =
    type === "description" ? (
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={styles[className]}
      />
    ) : (
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={styles[className]}
      />
    );

  return (
    <div className={styles.form__row}>
      {inputComponent}
      {!isValid && <span>{errorText}</span>}
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorText: PropTypes.string,
};

export default Item;
