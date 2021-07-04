import * as AT from "/src/store/auth/actionTypes.js";

const initialState = {
  fields: {
    login: "",
    password: "",
  },
  errors: {
    login: "",
    password: "",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.CHANGE_AUTH_FIELD:
      // eslint-disable-next-line no-case-declarations
      const newFields = {
        ...state.fields,
        ...action.payload,
      };
      return {
        ...state,
        fields: newFields,
      };
    case AT.CHANGE_AUTH_FIELD_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
