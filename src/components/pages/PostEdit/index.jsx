import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchPostAction,
  fetchUpdatePostAction,
  fetchDeletePostAction,
} from "./redux/asyncActions";
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
    history,
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

  const onSubmitEdit = () => fetchUpdatePost(fields, postId, isEdit);

  const onSubmitDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm("Do you want delete this post?");

    if (!isDelete) return false;

    fetchDeletePostAction(postId, history);
  };

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
        onClick={onSubmitEdit}
        style={styles.postEdit__edit}
        className={classNameBtn}
      />
      <Button
        title="Delete post"
        type="btn"
        onClick={onSubmitDelete}
        style={styles.postEdit__delete}
        className={"btn__delete"}
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

PostEdit.propTypes = {
  fields: PropTypes.array.isRequired,
  fetchPost: PropTypes.func.isRequired,
  fetchUpdatePost: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  isShowSuccessMesage: PropTypes.bool.isRequired,
  isShowErrorMesage: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
