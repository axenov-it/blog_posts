export const SET_POSTS = "SET_POSTS";

export const setPostsAction = (posts, dispatch) =>
  dispatch({ type: SET_POSTS, posts });