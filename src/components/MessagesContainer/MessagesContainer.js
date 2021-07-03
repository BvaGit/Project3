import React from "react";

import MessagesList from "../MessageList";

import "./messagesContainer.scss";

const MessagesContainer = ({ chat, chatId, userName }) => {
  return chat ? (
    <>
      <div className="message-box">
        <h1 className="message-box__title">{chat.name}</h1>
        <MessagesList chatId={chatId} />
      </div>
    </>
  ) : (
    <div className="message-box message-box--empty">Welcome!<br />{ userName }</div>
  );
};

export default MessagesContainer;
