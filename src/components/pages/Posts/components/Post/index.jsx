import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Post({ id, title, shortDescription, dateUpdate }) {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{shortDescription}</p>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default Post;
