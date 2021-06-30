import cookie from "js-cookie";

import { setUserChats } from "./actions";

export const sendMessages = (body) => {
  return () => {
    return fetch("http://localhost:3000/api/messages/create_message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => console.log(response.json()))
      .catch((error) => {
        console.log("error:", error);
      });
  };
};

export const createChat = (body) => {
  return () => {
    return fetch("http://localhost:3000/api/chat/create_chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((response) => console.log(response.json()));
  };
};

export const sendParticipants = (body) => {
  const token = cookie.get("token");
  return () => {
    return fetch("http://localhost:3000/api/participants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("error:", error);
      });
  };
};

export const getUserChats = (userId) => async (dispatch) => {
  const token = cookie.get("token");
  const request = await fetch(`http://localhost:3000/api/chat/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const rooms = await request.json();
  dispatch(setUserChats(rooms));
};
