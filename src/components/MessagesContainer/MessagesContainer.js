import React from "react";

import MessagesList from "../MessageList";

import "./messagesContainer.scss";

const MessagesContainer = ({ chat, chatId }) => {
  return chat ? (
    <>
      <div className="message-box">
        <h1 className="message-box__title">{chat.name}</h1>
        <MessagesList chatId={chatId} />
      </div>
    </>
  ) : (
    <div className="message-box message-box--empty">Welcome!</div>
  );
};

export default MessagesContainer;