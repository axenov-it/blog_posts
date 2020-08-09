import React from "react";
import PropTypes from "prop-types";
import { getDateFromLocale } from "../../../../../lib/helpers";
import styles from "./styles.module.css";

function Post({ id, title, shortDescription, dateUpdate }) {
  const { post, post__title, post__desctiption } = styles;

  return (
    <div className={post}>
      <span>{getDateFromLocale(dateUpdate.date)}</span>
      <h2 className={post__title}>{title}</h2>
      <p className={post__desctiption}>{shortDescription}</p>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default Post;
