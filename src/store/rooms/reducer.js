import * as AT from "./actionTypes.js";

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
  searchRoom: ""
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_SOCKET_EMIT:
      return {
        ...state,
        socket: action.payload,
      };
    case AT.SET_NEW_ROOM:
      return {
        ...state,
        rooms: { [action.payload.id]: action.payload, ...state.rooms },
      };
    case AT.SET_NEW_MESSAGE:
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
    case AT.SET_USER_CHATS:
      return {
        ...state,
        rooms: action.payload.reduce((acc, chat) => {
          acc[chat.chat_id] = { ...chat, messages: [] };
          return acc;
        }, {}),
      };
    case AT.ADD_CREATE_CHAT: //----
    // eslint-disable-next-line no-case-declarations
      const addRoom = {
        ...state.rooms,
        ...action.payload
      }
      return {
        ...state,
        rooms: addRoom
      }
    case AT.SET_ACTIVE_ROOM:
      return {
        ...state,
        activeRoom: action.payload,
      };
    case AT.SEND_MESSAGE:
      return {
        ...state,
        id: action.payload.id,
        chat_id: action.payload.chat_id,
        content: action.payload.content,
        date_create: action.payload.date_create,
      };
    case AT.SET_CHAT_MESSAGES:
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
    case AT.DATE_LAST_READ:
      return {
        ...state,
      };
    case AT.SEARCH_ROOM:
      return {
        ...state,
        searchRoom: action.payload
      }
    default:
      return state;
  }
};
