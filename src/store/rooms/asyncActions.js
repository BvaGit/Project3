// import { sendMessage } from "./actions";
import cookie from "js-cookie";

// export const sendMessagesToServer = () => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/api/messages/:chat_id/:id")
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch(sendMessage(json));
//       });
//   };
// };

export const createChat = (body) => {
  return () => {
    return fetch("http://localhost:3000/api/chat/create_chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => console.log(response.json()))
  };
};

export const sendParticipants = (body) => {
  const token = cookie.get("token");
  return () => {
    console.log('body:', body);
      return fetch("http://localhost:3000/api/participants", {
        method: "POST",
        headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      })
        .then((response) => response.json()).catch((error) => {
          console.log('error:', error);
        })
  };
};