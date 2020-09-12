import { changeFieldValueAction } from "../redux/actionsTypes";
import PostEditReducer, { initialState } from "../redux/reducer";
import { value, name } from "../mock";
import fields from "../redux/fields.json";

describe("POST EDIT TESTS REDUCER", () => {
  test("Initial state test", () => {
    const params = PostEditReducer(undefined, { type: null });

    expect(params).toEqual(initialState);
  });

  test("change field test", () => {
    const action = changeFieldValueAction(value, name);

    const params = PostEditReducer(initialState, action);

    const resultFields = fields.map((field) => {
      if (field.name === name) {
        return { ...field, value };
      }
      return field;
    });

    expect(params).toEqual({
      ...initialState,
      fields: resultFields,
      isEdit: true,
    });
  });
});
