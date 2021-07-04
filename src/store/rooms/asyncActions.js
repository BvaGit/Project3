import cookie from "js-cookie";

import { setUserChats, setChatMessages, addUserChats, addCreateChat } from "./actions";
import { sortByDateCreate } from "../../helpers/message";


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
  return (dispatch, getState) => {
    return fetch("http://localhost:3000/api/chat/create_chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    .then( async () => {
      const user = getState().user;
      const id = user.user.id
      const token = cookie.get("token");
      const request = await fetch(`http://localhost:3000/api/chat/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const rooms = await request.json();
      console.log(rooms)
      dispatch(setUserChats(rooms));
    })
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

export const getChatMessages = (chatId) => async (dispatch) => {
  const token = cookie.get("token");
  const request = await fetch(`http://localhost:3000/api/messages/${chatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const messages = await request.json();
  const payload = { messages: sortByDateCreate(messages), chatId };
  dispatch(setChatMessages(payload));
};
