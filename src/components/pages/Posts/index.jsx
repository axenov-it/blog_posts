import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import RequestApi from "../../../lib/RequestApi";
import List from "./components/List";

function Posts() {
  const [state, setState] = useState({
    posts: [],
  });

  useEffect(() => {
    RequestApi.getPosts().then((data) => {
      if (data.result) {
        setState({ ...state, posts: data.posts });
      }
    });
  }, []);

  return (
    <div className={styles.posts}>
      <h1>Blog posts</h1>
      <List posts={state.posts} />
    </div>
  );
}

export default Posts;
