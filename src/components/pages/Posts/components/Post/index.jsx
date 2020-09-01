import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getDateFromLocale } from "../../../../../lib/helpers";
import styles from "./styles.module.css";

function Post({ id, title, shortDescription, dateUpdate }) {
  const { post, post__edit, post__title, post__desctiption } = styles;

  return (
    <div className={post}>
      <span>{getDateFromLocale(dateUpdate.date)}</span>
      <span className={post__edit}>
        <Link to={`/post/edit/${id}`}>Edit</Link>
      </span>
      <h2 className={post__title}>
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      <p className={post__desctiption}>
        {shortDescription} <Link to={`/post/${id}`}>...more</Link>
      </p>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default Post;
