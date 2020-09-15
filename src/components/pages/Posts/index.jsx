import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import List from "./components/List";
import Button from "../../modules/Button";
import AddPostForm from "./components/AddPostForm";
import Pagination from "./components/Pagination";
import { fetchPostsAction, fetchAddPostAction } from "./redux/asyncActions";

function Posts(props) {
  const { fetchPosts, fetchAddPost, pagination } = props;

  const [isShowAddForm, setIsShowAddForm] = useState(false);

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
        <Pagination
          onChange={fetchPosts}
          page={pagination.page}
          limit={pagination.limit}
        />
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
    fetchPosts: (page, limit) => fetchPostsAction(dispatch, page, limit),
    fetchAddPost: (fields) => fetchAddPostAction(fields, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    pagination: state.posts.pagination,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
