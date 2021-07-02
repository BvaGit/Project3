import React from "react";

import "./messageItem.scss";

const MessageItem = ({ messages = [], userId }) => {
  return (
    <>
      {messages.map((message) => (
        <div
          key={message.message_id}
          className={
            userId === messages.id
              ? "message-item message-item--user"
              : "message-item message-item--member"
          }
        >
          {message.content}
          <span className="message-item__date">{message.date_create}</span>
        </div>
      ))}
    </>
  );
};

export default MessageItem;
