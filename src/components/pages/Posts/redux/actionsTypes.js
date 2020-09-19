export const SET_POSTS = "SET_POSTS";
export const CHANGE_PAGINATION = "CHANGE_PAGINATION";
export const FETCH_LOAD_POSTS = "FETCH_LOAD_POSTS";

export const setPostsAction = (posts) => {
  return { type: SET_POSTS, posts };
};

export const changePaginationAction = (pagination) => {
  return { type: CHANGE_PAGINATION, pagination };
};

export const changeFetchLoadPostsAction = (status) => {
  return { type: FETCH_LOAD_POSTS, status };
};
