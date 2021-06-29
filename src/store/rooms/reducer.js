import {
  SET_SOCKET_EMIT,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
  DATE_LAST_READ,
  SET_USER_CHATS,
  SET_ACTIVE_ROOM,
} from "./actionTypes";

const initialState = {
  sendingMessage: false,
  messages: [],
  socket: null,
  rooms: [],
  activeRoom: "",
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
    // correct
    case SET_USER_CHATS:
      return {
        ...state,
        rooms: action.payload,
      };
    case SET_ACTIVE_ROOM:
      return {
        ...state,
        activeRoom: action.payload,
      };
    default:
      return state;
  }
};
