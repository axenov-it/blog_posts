import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostAction, fetchUpdatePostAction } from "./redux/asyncActions";
import { changeFieldValueAction } from "./redux/actionsTypes";
import Button from "../../modules/Button";
import Alert from "../../modules/Alert";

import List from "./components/List";

import styles from "./styles.module.css";

function PostEdit(props) {
  const postId = props.match.params.id;

  const {
    fetchPost,
    fetchUpdatePost,
    fields,
    changeFieldValue,
    isEdit,
    isShowSuccessMesage,
    isShowErrorMesage,
  } = props;

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

  const onSubmit = () => fetchUpdatePost(fields, postId, isEdit);

  return (
    <div className={styles.postEdit__form}>
      <h1>Edit post</h1>

      <Alert
        message={"Your post updated !"}
        isShow={isShowSuccessMesage}
        className={"alert__success"}
      />

      <Alert
        message={"Enter correct data !"}
        isShow={isShowErrorMesage}
        className={"alert__error"}
      />

      <List
        fields={fields}
        onChange={onChangeField}
        classCheckboxName={styles.postEdit__checkbox}
      />
      <Button
        title="Save post"
        type="btn"
        onClick={onSubmit}
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

    fetchUpdatePost: (fields, postId, isEdit) => {
      fetchUpdatePostAction(dispatch, fields, postId, isEdit);
    },

    changeFieldValue: (value, name) =>
      dispatch(changeFieldValueAction(value, name)),
  };
};

const mapStateToProps = (state) => {
  return {
    fields: state.postEdit.fields,
    isEdit: state.postEdit.isEdit,
    isShowSuccessMesage: state.postEdit.isShowSuccessMesage,
    isShowErrorMesage: state.postEdit.isShowErrorMesage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
