import {
  SET_EDIT_POST,
  CHANGE_FIELD_VALUE,
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
  UPDATED_FORM,
} from "./actionsTypes";
import fields from "./fields.json";

const initialState = {
  fields,
  isEdit: false,
  isShowSuccessMesage: false,
  isShowErrorMesage: false,
};

const onValidatePost = (value, regex) => {
  const regExp = new RegExp(regex);
  return regExp.test(value);
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

    case SHOW_SUCCESS_MESSAGE: {
      return {
        ...state,
        isShowSuccessMesage: action.status,
      };
    }

    case SHOW_ERROR_MESSAGE: {
      return {
        ...state,
        isShowErrorMesage: action.status,
      };
    }

    case UPDATED_FORM: {
      return {
        ...state,
        isEdit: false,
        isShowSuccessMesage: false,
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
              isValid: field.regex
                ? onValidatePost(action.value, field.regex)
                : true,
            };
          }
          return field;
        }),
        isEdit: true,
      };
    }

    default:
      return state;
  }
}
