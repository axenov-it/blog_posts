import RequestApi from "../../../../lib/RequestApi";
import {
  setPostAction,
  updatedFormAction,
  showSuccessMessageAction,
  showErrorMessageAction,
} from "./actionsTypes";

export const fetchPostAction = (dispatch, postId) => {
  return RequestApi.getPost(postId).then((data) => {
    if (data.result) {
      dispatch(setPostAction(data.post));
    }
  });
};

function isValidEditForm(fields, isEdit) {
  if (!isEdit) return false;

  return !fields.find((field) => !field.isValid);
}

export const fetchUpdatePostAction = (dispatch, fields, postId, isEdit) => {
  if (!isValidEditForm(fields, isEdit)) {
    dispatch(showErrorMessageAction(true));
    setTimeout(() => dispatch(showErrorMessageAction(false)), 2000);
    return false;
  }

  const fetchFields = fields.reduce((ac, field) => {
    ac[field.name] = field.value;
    return ac;
  }, {});

  return RequestApi.updatePost(fetchFields, postId).then((data) => {
    dispatch(showSuccessMessageAction(true));
    setTimeout(() => dispatch(updatedFormAction()), 2000);
  });
};
