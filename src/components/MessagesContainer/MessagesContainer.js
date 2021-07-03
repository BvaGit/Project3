import React, { useEffect } from "react";

import MessagesList from "../MessageList";

import "./messagesContainer.scss";

const MessagesContainer = ({
  chat,
  chatId,
  userId,
  id,
  getUsersFromApi,
  users,
}) => {
  // console.log("users", users);
  // console.log("+userId", +userId);
  // console.log("+id", id);

  useEffect(() => {
    getUsersFromApi();
  }, []);
  return chat ? (
    <>
      <div className="message-box">
        <h1 className="message-box__title">{chat.name}</h1>
        <MessagesList chatId={chatId} />
      </div>
    </>
  ) : (
    <>
      <div className="message-box message-box--empty">Welcome!</div>
      <div className="message-box message-box--empty">{/* {users} */}</div>
    </>
  );
};

export default MessagesContainer;
