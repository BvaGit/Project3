import {
  SET_SOCKET_EMIT,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
  DATE_LAST_READ,
  SET_USER_CHATS,
  SET_ACTIVE_ROOM,
  SET_CHAT_MESSAGES,
} from "./actionTypes";

export const setSocketEmit = (socket) => ({
  type: SET_SOCKET_EMIT,
  payload: socket,
});

export const sendMessage = (payload) => ({
  type: SEND_MESSAGE,
  payload,
});

export const recievedMessage = (message) => ({
  type: RECEIVED_MESSAGE,
  payload: message,
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
