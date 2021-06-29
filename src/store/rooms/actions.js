import {
  SET_SOCKET_EMIT,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
  DATE_LAST_READ,
  GET_USER_CHATS,
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

export const getStatusMessage = (message) => ({
  type: DATE_LAST_READ,
});

export const getUserChats = (chats) => ({
  type: GET_USER_CHATS,
  payload: chats,
});
