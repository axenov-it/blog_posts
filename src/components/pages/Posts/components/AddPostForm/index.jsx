import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Button from "../../../../modules/Button";
import List from "./components/List";
import dataFieds from "./fields.json";
import { useEffect } from "react";

function AddPostForm({ isShow, onSubmit, onCancel }) {
  const [fields, setFields] = useState(dataFieds);

  useEffect(() => {
    setFields(dataFieds);
  }, [isShow]);

  const onCloseForm = () => {
    onCancel();
  };

  const onSubmitForm = () => {
    const isValid = !fields.find((field) => !field.isValid);

    onSubmit(fields, isValid);
  };

  const onValidatePost = (value, regex) => {
    const regExp = new RegExp(regex);
    return regExp.test(value);
  };

  const onChangePost = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    const indexField = fields.findIndex(({ name }) => name === inputName);
    const targetField = fields[indexField];

    const isValid = onValidatePost(inputValue, targetField.regex);

    const updatedField = {
      ...targetField,
      value: inputValue,
      isValid,
    };

    const newFields = [...fields];
    newFields[indexField] = updatedField;

    setFields(newFields);
  };

  if (!isShow) return null;

  return (
    <div className={styles.addPostForm}>
      <form className={styles.addPostForm__container}>
        <List fields={fields} onChange={onChangePost} />

        <Button
          type="btn"
          onClick={onSubmitForm}
          title="Create"
          className="btn__create"
        />
        <Button
          type="btn"
          onClick={onCloseForm}
          title="Cancel"
          className="btn__cancel"
        />
      </form>
    </div>
  );
}

AddPostForm.propTypes = {
  isShow: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AddPostForm;
