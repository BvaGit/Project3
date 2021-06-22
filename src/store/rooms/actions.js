import actionTypes from "./actionTypes";

export function getTime() {
  let date = new Date();
  let time = [date.getHours(), date.getMinutes()]
    .map((x) => {
      return x < 10 ? `0${x}` : x;
    })
    .join(":");
  return time;
}

export const onConnect = (socket) => {
  return {
    type: actionTypes.CONNECTED,
    payload: socket,
  };
};

export const sendMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
  time: getTime(),
});

export const recievedMessage = (message) => ({
  type: types.RECEIVED_MESSAGE,
  id: nextMessageId++,
  message,
  author,
  time: getTime(),
});

export const getStatusMessage = (message) => ({
  type: types.DATE_LAST_READ,
  id: nextMessageId++,
  message,
  author,
  time: getTime(),
});
