import {
  SET_SOCKET_EMIT,
  SEND_MESSAGE,
  RECEIVED_MESSAGE,
  DATE_LAST_READ,
} from "./actionTypes";

export function getTime() {
  let date = new Date();
  let time = [date.getHours(), date.getMinutes()]
    .map((x) => {
      return x < 10 ? `0${x}` : x;
    })
    .join(":");
  return time;
}

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
