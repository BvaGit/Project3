import React from "react";

import MessagesList from "../MessageList";

import "./messagesContainer.scss";

const MessagesContainer = () => {
  return (
    <>
      <div className="message-box">
        <MessagesList />
      </div>
    </>
  );
};

export default MessagesContainer;
