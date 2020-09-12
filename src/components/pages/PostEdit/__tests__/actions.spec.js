import {
  changeFieldValueAction,
  CHANGE_FIELD_VALUE,
} from "../redux/actionsTypes";

import { name, value } from "../mock";

describe("POST EDIT TESTS ACTIONS", () => {
  test("change field post edit test", () => {
    const result = { type: CHANGE_FIELD_VALUE, value, name };
    expect(changeFieldValueAction(value, name)).toEqual(result);
  });
});
