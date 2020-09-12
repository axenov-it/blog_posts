import { setPostsAction } from "../redux/actionsTypes";
import PostsReducer, { initialState } from "../redux/reducer";
import { posts } from "../mock";

describe("POSTS TESTS REDUCER", () => {
  test("Initial state test", () => {
    const params = PostsReducer(undefined, { type: null });

    expect(params).toEqual(initialState);
  });

  test("set posts test", () => {
    const params = PostsReducer(initialState, setPostsAction(posts));

    expect(params).toEqual({ ...initialState, list: posts });
  });
});
