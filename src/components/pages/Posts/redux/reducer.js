import { SET_POSTS } from "./actionsTypes";

export const initialState = {
  list: [],
  isShowAddForm: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        list: action.posts,
      };
    }

    default:
      return state;
  }
}
