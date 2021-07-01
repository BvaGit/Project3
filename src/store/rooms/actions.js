import {
  SET_SOCKET_EMIT,
  SET_NEW_ROOM,
  SET_NEW_MESSAGE,
  SEND_MESSAGE,
  DATE_LAST_READ,
  SET_USER_CHATS,
  SET_ACTIVE_ROOM,
  SET_CHAT_MESSAGES,
} from "./actionTypes";

export const setSocketEmit = (socket) => ({
  type: SET_SOCKET_EMIT,
  payload: socket,
});

export const setNewRoom = (payload) => ({
  type: SET_NEW_ROOM,
  payload,
});

export const setNewMessage = (payload) => ({
  type: SET_NEW_MESSAGE,
  payload,
});

export const sendMessage = (payload) => ({
  type: SEND_MESSAGE,
  payload,
});

export const getStatusMessage = () => ({
  type: DATE_LAST_READ,
});

export const setUserChats = (payload) => ({
  type: SET_USER_CHATS,
  payload,
});

export const setActiveRoom = (payload) => ({
  type: SET_ACTIVE_ROOM,
  payload,
});

export const setChatMessages = (payload) => ({
  type: SET_CHAT_MESSAGES,
  payload,
});
