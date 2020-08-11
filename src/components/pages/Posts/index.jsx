import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import RequestApi from "../../../lib/RequestApi";
import List from "./components/List";
import Button from "../../modules/Button";
import AddPostForm from "./components/AddPostForm";

function Posts() {
  const [state, setState] = useState({
    posts: [],
    isShowAddPostForm: false,
  });

  useEffect(() => {
    RequestApi.getPosts().then((data) => {
      if (data.result) {
        setState({ ...state, posts: data.posts });
      }
    });
  }, []);

  const onAddFormSubmit = () => {
    console.log("MY FORM");
  };

  const onShowForm = () => {
    setState({ ...state, isShowAddPostForm: !state.isShowAddPostForm });
  };

  const onCancelForm = () => {
    setState({ ...state, isShowAddPostForm: false });
  };

  return (
    <div className={styles.posts}>
      <div className={styles.posts__nav}>
        <h1>Blog posts</h1>
        <Button
          type="btn"
          title="Add post"
          className="btn__add"
          onClick={onShowForm}
        />
      </div>
      <List posts={state.posts} />
      <AddPostForm
        isShow={state.isShowAddPostForm}
        onSubmit={onAddFormSubmit}
        onCancel={onCancelForm}
      />
    </div>
  );
}

export default Posts;
