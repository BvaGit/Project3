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

let nextMessageId = 0;

export const onConnect = (socket) => {
  return {
    type: actionTypes.CONNECTED,
    payload: socket,
  };
};

export const sendMessage = () => ({
  type: actionTypes.SEND_MESSAGE,
  id: nextMessageId++,
  message,
  author,
  time: getTime(),
});
// export const sendMessage = (message) => {
// return (dispatch, getState) => {
//     const socket = getState().socket;

//     socket.send(JSON.stringify(message));
//     dispatch({ type: actionTypes.SEND_MESSAGE });
//   };
// };

// export const addMessage = (message, author) => ({
//   type: types.ADD_MESSAGE,
//   id: nextMessageId++,
//   message,
//   author,
//   time: getTime(),
// });

export const recievedMessage = (message) => ({
  type: actionTypes.RECEIVED_MESSAGE,
  payload: JSON.parse(message),
});

export const getStatusMessage = (message) => ({
  type: actionTypes.DATE_LAST_READ,
  id: nextMessageId++,
  message,
  author,
  time: getTime(),
});
