import { SET_EDIT_POST, CHANGE_FIELD_VALUE } from "./actionsTypes";
import fields from "./fields.json";

const initialState = {
  fields,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_EDIT_POST: {
      return {
        ...state,
        fields: state.fields.map((field) => {
          return {
            ...field,
            value: action.post[field.name],
          };
        }),
      };
    }

    case CHANGE_FIELD_VALUE: {
      return {
        ...state,
        fields: state.fields.map((field) => {
          if (field.name === action.name) {
            return {
              ...field,
              value: action.value,
            };
          }
          return field;
        }),
      };
    }

    default:
      return state;
  }
}
