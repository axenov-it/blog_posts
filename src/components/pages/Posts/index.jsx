import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import RequestApi from "../../../lib/RequestApi";
import List from "./components/List";
import Button from "../../modules/Button";

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
      <div className={styles.posts__nav}>
        <h1>Blog posts</h1>
        <Button
          type="btn"
          title="Add post"
          className="btn__add"
          onClick={() => console.log("clicked")}
        />
      </div>

      <List posts={state.posts} />
    </div>
  );
}

export default Posts;
