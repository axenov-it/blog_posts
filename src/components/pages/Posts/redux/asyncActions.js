import RequestApi from "../../../../lib/RequestApi";
import { setPostsAction } from "./actionsTypes";

export const fetchPostsAction = (dispatch) => {
  RequestApi.getPosts().then((data) => {
    if (data.result) {
      setPostsAction(data.posts, dispatch);
    }
  });
};

export const fetchAddPostAction = (fields, dispatch) => {
  const fetchFields = fields.reduce((ac, field) => {
    ac[field.name] = field.value;
    return ac;
  }, {});

  return RequestApi.addPost(fetchFields).then(() => {
    fetchPostsAction(dispatch);
  });
};
