import {
  SET_SOCKET_EMIT,
  SET_NEW_ROOM,
  SET_NEW_MESSAGE,
  SET_USER_CHATS,
  SET_ACTIVE_ROOM,
  SEND_MESSAGE,
  DATE_LAST_READ,
  SET_CHAT_MESSAGES,
} from "./actionTypes";

const initialState = {
  sendingMessage: false,
  messages: {
    0: [
      {
        text: "Welcome!",
      },
    ],
  },
  socket: null,
  rooms: {},
  activeRoom: "",
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET_EMIT:
      return {
        ...state,
        socket: action.payload,
      };
    case SET_NEW_ROOM:
      return {
        ...state,
        rooms: { [action.payload.id]: action.payload, ...state.rooms },
      };
    case SET_NEW_MESSAGE:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.chat_id]: {
            ...state.rooms[action.payload.chat_id],
            messages: [
              ...state.rooms[action.payload.chat_id].messages,
              action.payload,
            ],
          },
        },
      };
    case SET_USER_CHATS:
      return {
        ...state,
        rooms: action.payload.reduce((acc, chat) => {
          acc[chat.chat_id] = { ...chat, messages: [] };
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
    case SET_CHAT_MESSAGES:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.chatId]: {
            ...state.rooms[action.payload.chatId],
            messages: action.payload.messages,
          },
        },
      };
    case DATE_LAST_READ:
      return {
        ...state,
      };
    default:
      return state;
  }
};
