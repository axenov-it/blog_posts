import { setPostsAction, SET_POSTS } from "../redux/actionsTypes";
import { posts } from "../mock";

describe("POSTS TESTS ACTIONS", () => {
  test("set posts test", () => {
    const result = { type: SET_POSTS, posts };

    expect(setPostsAction(posts)).toEqual(result);
  });
});
