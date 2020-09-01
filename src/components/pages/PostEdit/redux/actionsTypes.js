export const SET_EDIT_POST = "SET_EDIT_POST";
export const CHANGE_FIELD_VALUE = "CHANGE_FIELD_VALUE";

export const setPostAction = (post) => ({ type: SET_EDIT_POST, post });

export const changeFieldValueAction = (value, name) => ({
  type: CHANGE_FIELD_VALUE,
  value,
  name,
});
