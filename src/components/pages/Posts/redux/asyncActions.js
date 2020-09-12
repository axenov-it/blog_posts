import RequestApi from "../../../../lib/RequestApi";
import { setPostsAction } from "./actionsTypes";

export const fetchPostsAction = (dispatch) => {
  RequestApi.getPosts().then((data) => {
    if (data.result) {
      dispatch(setPostsAction(data.posts));
    }
  });
};

export const fetchAddPostAction = (fields, dispatch) => {
  const fetchFields = fields.reduce((ac, field) => {
    ac[field.name] = field.value;
    return ac;
  }, {});

  return RequestApi.addPost(fetchFields).then((response) => {
    console.log("eeee", response);
    if (response.result) {
      fetchPostsAction(dispatch);
      return true;
    }
    return false;
  });
};
