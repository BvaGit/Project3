import * as AT from "/src/store/users/actionTypes.js";

const initialState = {
  users: [],
  isAuth: false,
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
    default:
      return state;
  }
};
