import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import List from "./components/List";
import Button from "../../modules/Button";
import AddPostForm from "./components/AddPostForm";
import { fetchPostsAction, fetchAddPostAction } from "./redux/asyncActions";

function Posts(props) {
  const {
    fetchPosts,
    fetchAddPost,
    pagination,
    isFetchLoadPosts,
    posts,
  } = props;

  const onScroll = () => {
    const scrolled = window.pageYOffset;
    const innerHeight = window.innerHeight;
    const resultScrolled = innerHeight + scrolled + 400;

    const scrollHeight = document.documentElement.scrollHeight;

    if (resultScrolled >= scrollHeight) {
      fetchPosts(pagination.page + 1, pagination.limit);
      window.onscroll = null;
    }
  };

  useEffect(() => {
    window.onscroll = onScroll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  useEffect(() => {
    fetchPosts(pagination.page, pagination.limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Button
          type="btn"
          title="Add post"
          className="btn__add"
          onClick={toggleAddForm}
        />
      </div>
      {isFetchLoadPosts && (
        <span className={styles.posts__loading}>Loading...</span>
      )}
      <List posts={posts} />
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
    isFetchLoadPosts: state.posts.isFetchLoadPosts,
    posts: state.posts.list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
