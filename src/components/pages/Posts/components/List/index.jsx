import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Post from "../Post";

function List({ posts }) {
  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          shortDescription={post.short_description}
          dateUpdate={post.date_update}
        />
      ))}
    </div>
  );
}

List.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      short_description: PropTypes.string.isRequired,
      date_update: PropTypes.object.isRequired,
    })
  ),
};

export default List;
