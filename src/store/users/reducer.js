import * as AT from "/src/store/users/actionTypes.js";

const initialState = {
  users: [],
  myAccount: {
    firstname: '',
    lastname: '',
    avatar: '',
    age: '',
    city: '',
    company: '',
    hobbi: ''
  },
  isAuth: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case AT.GET_MYACCOUNT:
      return {
        ...state,
        myAccount: action.payload
      }
    case AT.CHANGE_MYACCOUNT_FIELD:
      // eslint-disable-next-line no-case-declarations
      const account = {
        ...state.myAccount,
        ...action.payload
      }
      return {
        ...state,
        myAccount: account
      }
    
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
    default:
      return state;
  }
};
