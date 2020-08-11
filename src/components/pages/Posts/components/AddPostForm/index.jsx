import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Button from "../../../../modules/Button";

function AddPostForm({ isShow, onSubmit, onCancel }) {
  if (!isShow) return null;

  return (
    <div className={styles.addPostForm}>
      <form className={styles.addPostForm__container}>
        <input
          className={styles.addPostForm__input}
          placeholder="Enter post title"
        />

        <textarea
          className={styles.addPostForm__textarea}
          placeholder="Enter post short description"
        />

        <Button
          type="btn"
          onClick={onSubmit}
          title="Create"
          className="btn__create"
        />
        <Button
          type="btn"
          onClick={onCancel}
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
