import { SET_POSTS, CHANGE_PAGINATION, FETCH_LOAD_POSTS } from "./actionsTypes";

export const initialState = {
  list: [],
  isShowAddForm: false,
  isFetchLoadPosts: false,
  pagination: {
    page: 1,
    limit: 24,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        list: [...state.list, ...action.posts],
      };
    }

    case CHANGE_PAGINATION: {
      return {
        ...state,
        pagination: { ...state.pagination, ...action.pagination },
      };
    }

    case FETCH_LOAD_POSTS: {
      return {
        ...state,
        isFetchLoadPosts: action.status,
      };
    }

    default:
      return state;
  }
}
