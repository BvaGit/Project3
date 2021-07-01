import * as AT from "/src/store/user/actionTypes.js";

const initialState = {
  user: { id: null, token: null },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.AUTH_USER:
      return {
        ...state,
        user: { ...action.payload },
      };
    case AT.LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
