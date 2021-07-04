import * as AT from "/src/store/registration/actionTypes.js";

const initialState = {
  fields:{
    login: '',
    password: '',
    confirmPassword:""
  },
  errors:{
    login:"",
    password:"",
    confirmPassword:""
  }
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.CHANGE_REGISTRATION_FIELD:
      // eslint-disable-next-line no-case-declarations
      const newFields = { 
        ...state.fields,
        ...action.payload
      }
      return {
        ...state,
          fields:newFields,
          errors:{
            ...state.errors,
            password: newFields.password === newFields.confirmPassword
              ? ''
              : "Passwords should match",
            confirmPassword: newFields.password === newFields.confirmPassword
              ? ''
              : "Passwords should match"
          }
      }
      case AT.CHANGE_REGISTRATION_FIELD_ERROR:
        return {
          ...state,
          errors:{
            ...state.errors,
            ...action.payload
          }
        }
    default:
      return state;
  }
};
