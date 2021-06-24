import {
  SET_SOCKET_EMIT,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
  DATE_LAST_READ,
} from "./actionTypes";

const initialState = {
  // sendingMessage: false,
  // messages: [],
  // socket: null,
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET_EMIT:
      return {
        ...state,
        socket: action.payload,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        id: action.payload.id,
        chat_id: action.payload.chat_id,
        content: action.payload.content,
        date_create: action.payload.date_create,
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
