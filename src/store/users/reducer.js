import * as AT from "/src/store/users/actionTypes.js";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
