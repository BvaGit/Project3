import { SET_USERS, AUTH_USER, LOGOUT_USER } from "/src/store/users/actionTypes.js";

const initialState = {
  users: [],
  isAuth: false
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case AUTH_USER:
      return {...state,
        users: [action.payload],
        isAuth: true
      }
    case LOGOUT_USER:
      return {...state,
        users: [],
        isAuth: false
      }
    default:
      return state;
  }
};
