import {
  SET_SOCKET_EMIT,
  SET_USER_CHATS,
  SET_ACTIVE_ROOM,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
  DATE_LAST_READ,
  SYSTEM_MESSAGE,
} from "./actionTypes";

const initialState = {
  sendingMessage: false,
  messages: [
    {
      text: "Welcome!",
    },
  ],
  socket: null,
  rooms: { room: { chat_id: {} } },
  activeRoom: "",
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET_EMIT:
      return {
        ...state,
        socket: action.payload,
      };
    case SET_USER_CHATS:
      return {
        ...state,
        rooms: action.payload.reduce((acc, chat) => {
          acc[chat.chat_id] = chat;
          return acc;
        }, {}),
      };
    case SET_ACTIVE_ROOM:
      return {
        ...state,
        activeRoom: action.payload,
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
      return {
        ...state,
        id: action.payload.id,
        chat_id: action.payload.chat_id,
        content: action.payload.content,
        date_create: action.payload.date_create,
      };
    case "DATE_LAST_READ":
      return {
        ...state,
      };
    default:
      return state;
  }
};
