import { sendMessage } from "./actions";

export const getUsersFromApi = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/messages/:chat_id/:id")
      .then((response) => response.json())
      .then((json) => {
        dispatch(sendMessage(json));
      });
  };
};
