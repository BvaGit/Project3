import {
  CONNECTED,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
} from "./actionTypes";

const initialState = {
  connected: false,
  sendingMessage: false,
  messages: [],
  socket: null
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTED:
      return {
        ...state,
        connected: true, socket: action.payload
      };
    case SEND_MESSAGE:
      return {
        ...state,
        sendingMessage: true
      };
    case RECEIVED_MESSAGE:
      if (state.messages.length > 0) {
        return { ...state, messages: [...state.messages, action.payload] };
      } else {
        return { ...state, messages: action.payload };
      }
    case "DATE_LAST_READ":
      return {
        ...state,
      };
    default:
      return state;
  }
};
