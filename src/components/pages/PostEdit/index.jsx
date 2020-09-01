import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostAction } from "./redux/asyncActions";
import { changeFieldValueAction } from "./redux/actionsTypes";

import List from "./components/List";

import styles from "./styles.module.css";

function PostEdit(props) {
  const postId = props.match.params.id;
  const { fetchPost, fields, changeFieldValue } = props;

  useEffect(() => {
    fetchPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeField = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    changeFieldValue(value, event.target.name);
  };

  return (
    <div>
      <List fields={fields} onChange={onChangeField} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (postId) => {
      fetchPostAction(dispatch, postId);
    },
    changeFieldValue: (value, name) =>
      dispatch(changeFieldValueAction(value, name)),
  };
};

const mapStateToProps = (state) => {
  return {
    fields: state.postEdit.fields,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
