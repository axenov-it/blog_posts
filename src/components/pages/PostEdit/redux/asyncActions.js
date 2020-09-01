import RequestApi from "../../../../lib/RequestApi";
import { setPostAction } from "./actionsTypes";

export const fetchPostAction = (dispatch, postId) => {
  return RequestApi.getPost(postId).then((data) => {
    if (data.result) {
      dispatch(setPostAction(data.post));
    }
  });
};
