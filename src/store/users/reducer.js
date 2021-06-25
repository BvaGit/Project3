import * as AT from "/src/store/users/actionTypes.js";

const initialState = {
  users: [],
  isAuth: false,
  registration: {
    fields:{
      login: '',
      password: '',
      confirm_password:""
    },
    errors:{
      login:"",
      password:"",
      confirm_password:""
    }
  }
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case AT.AUTH_USER:
      return {
        ...state,
        users: [action.payload],
        isAuth: true
      }
    case AT.LOGOUT_USER:
      return {
        ...state,
        users: [],
        isAuth: false
      }
    case AT.CHANGE_REGISTRATION_FIELD:
      // eslint-disable-next-line no-case-declarations
      const newFields = { 
        ...state.registration.fields,
        ...action.payload
      }
      return {
        ...state,
        registration:{
          ...state.registration,
          fields:newFields,
          errors:{
            ...state.registration.errors,
            password: newFields.password === newFields.confirm_password
              ? ''
              : "Passwords should match",
            confirm_password: newFields.password === newFields.confirm_password
              ? ''
              : "Passwords should match"
          }
        }
      }
      case AT.CHANGE_REGISTRATION_FIELD_ERROR:
        return {
          ...state,
          registration:{
            ...state.registration,
            errors:{
              ...state.registration.errors,
              ...action.payload
            }
          }
        }
    default:
      return state;
  }
};
