import {
  LOGIN,
  ADD_MESSAGE,
  MESSAGE_RECEIVED,
  ADD_USER,
  USERS_LIST,
} from "./constants";

const initialState = {
  users: [],
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        login: action.payload,
      };
    case MESSAGE_RECEIVED:
      return {
        message: action.payload,
        author: action.payload,
        id: action.payload,
        time: action.payload
      };
    case ADD_USER:
      return {
        name: action.payload,
        id: action.payload
      };
    case USERS_LIST:
      return {
        action.payload
      };
    default:
      return state;
  }
};
