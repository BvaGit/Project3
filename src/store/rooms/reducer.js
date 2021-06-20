import {
  CONNECTED,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
  ON_ERROR,
} from "./actionTypes";

const initialState = {
  items: [],
  // isLoading: false,
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTED:
      return {
        ...state,
        items: action.payload,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        message: action.payload,
        author: action.payload,
        id: action.payload,
        time: action.payload,
      };
    case RECEIVED_MESSAGE:
      return {
        message: action.payload,
        author: action.payload,
        id: action.payload,
        time: action.payload,
      };
    case "DATE_LAST_READ":
      return {
        ...state,
        items: state.items.map((message) => {
          if (message.message_id === payload.messageId) {
            message.date_last_read = true;
          }
          return message;
        }),
      };
    case ON_ERROR:
      return {
        name: action.payload,
        id: action.payload,
      };
    default:
      return state;
  }
};
