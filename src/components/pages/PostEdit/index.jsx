import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostAction } from "./redux/asyncActions";
import { changeFieldValueAction } from "./redux/actionsTypes";
import Button from "../../modules/Button";

import List from "./components/List";

import styles from "./styles.module.css";

function PostEdit(props) {
  const postId = props.match.params.id;
  const { fetchPost, fields, changeFieldValue } = props;
  const isEdit = false;

  useEffect(() => {
    fetchPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classNameBtn = isEdit ? "btn__save" : "btn__disable";

  const onChangeField = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    changeFieldValue(value, event.target.name);
  };

  return (
    <div className={styles.postEdit__form}>
      <h1>Edit post</h1>
      <List
        fields={fields}
        onChange={onChangeField}
        classCheckboxName={styles.postEdit__checkbox}
      />
      <Button
        title="Save post"
        type="btn"
        onClick={() => console.log(1)}
        style={styles.postEdit__edit}
        className={classNameBtn}
      />
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
