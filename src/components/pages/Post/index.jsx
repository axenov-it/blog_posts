import React, { useState, useEffect } from "react";
import RequestApi from "../../../lib/RequestApi";

import styles from "./styles.module.css";

function Post(props) {
  const postId = props.match.params.id;

  const [state, setState] = useState({
    post: { title: "", full_description: "", short_description: "" },
  });

  useEffect(() => {
    RequestApi.getPost(postId).then((data) => {
      if (data.result) {
        setState({ ...state, post: data.post });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, full_description, short_description } = state.post;

  return (
    <div>
      <h1 className={styles.post}>{title}</h1>
      <p>{full_description}</p>
      <p>{short_description}</p>
    </div>
  );
}

export default Post;
