import React, { useEffect } from "react";

import MessagesList from "../MessageList";

import "./messagesContainer.scss";

const MessagesContainer = ({
  chat,
  chatId,
  getUsersFromApi,
  userLogin,
  userName,
}) => {
  const login = userLogin && userLogin.login;

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
      <div className="message-box message-box--empty">
        Welcome,
        <p className="message-box--empty__user">{userName || login}</p>!
      </div>
    </>
  );
};

export default MessagesContainer;
