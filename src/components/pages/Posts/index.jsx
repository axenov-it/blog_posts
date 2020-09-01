import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import List from "./components/List";
import Button from "../../modules/Button";
import AddPostForm from "./components/AddPostForm";
import { fetchPostsAction, fetchAddPostAction } from "./redux/asyncActions";

function Posts(props) {
  const { fetchPosts, fetchAddPost } = props;

  const [isShowAddForm, setIsShowAddForm] = useState(false);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleAddForm = () => setIsShowAddForm(!isShowAddForm);

  const submitAddPostForm = (fields) => {
    fetchAddPost(fields).then(() => {
      toggleAddForm();
    });
  };

  return (
    <div className={styles.posts}>
      <div className={styles.posts__nav}>
        <h1>Blog posts</h1>
        <Button
          type="btn"
          title="Add post"
          className="btn__add"
          onClick={toggleAddForm}
        />
      </div>
      <List />
      <AddPostForm
        isShow={isShowAddForm}
        onSubmit={submitAddPostForm}
        onCancel={toggleAddForm}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => fetchPostsAction(dispatch),
    fetchAddPost: (fields) => fetchAddPostAction(fields, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Posts);
