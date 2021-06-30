import React from "react";

import MessagesList from "../MessageList";

import "./messagesContainer.scss";

const MessagesContainer = ({ chatName }) => {
  return (
    <>
      <div className="message-box">
        <h1>{chatName}</h1>
        <MessagesList />
      </div>
    </>
  );
};

export default MessagesContainer;
