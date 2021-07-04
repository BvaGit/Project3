import * as AT from "./actionTypes";

export const setSocketEmit = (socket) => ({
  type: AT.SET_SOCKET_EMIT,
  payload: socket,
});

export const setNewRoom = (payload) => ({
  type: AT.SET_NEW_ROOM,
  payload,
});

export const setNewMessage = (payload) => ({
  type: AT.SET_NEW_MESSAGE,
  payload,
});

export const sendMessage = (payload) => ({
  type: AT.SEND_MESSAGE,
  payload,
});

export const getStatusMessage = () => ({
  type: AT.DATE_LAST_READ,
});

export const setUserChats = (payload) => ({
  type: AT.SET_USER_CHATS,
  payload,
});

export const setActiveRoom = (payload) => ({
  type: AT.SET_ACTIVE_ROOM,
  payload,
});

export const setChatMessages = (payload) => ({
  type: AT.SET_CHAT_MESSAGES,
  payload,
});

export const searchRoom = (payload) => ({
  type: AT.SEARCH_ROOM,
  payload
});

export const addCreateChat = (payload) => ({
  type: AT.ADD_CREATE_CHAT,
  payload
})
