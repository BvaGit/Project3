import { sendMessage } from "./actions";

export const sendMessagesToServer = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/messages/:chat_id/:id")
      .then((response) => response.json())
      .then((json) => {
        dispatch(sendMessage(json));
      });
  };
};

export const createChat = (body) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/chat/create_chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        // dispatch(sendMessage(json));
        console.log("some");
      });
  };
};
