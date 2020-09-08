import RequestApi from "../../../../lib/RequestApi";
import {
  setPostAction,
  updatedFormAction,
  showSuccessMessageAction,
} from "./actionsTypes";

export const fetchPostAction = (dispatch, postId) => {
  return RequestApi.getPost(postId).then((data) => {
    if (data.result) {
      dispatch(setPostAction(data.post));
    }
  });
};

export const fetchUpdatePostAction = (dispatch, fields, postId) => {
  const fetchFields = fields.reduce((ac, field) => {
    ac[field.name] = field.value;
    return ac;
  }, {});

  return RequestApi.updatePost(fetchFields, postId).then((data) => {
    dispatch(showSuccessMessageAction(true));
    setTimeout(() => dispatch(updatedFormAction()), 2000);
  });
};
