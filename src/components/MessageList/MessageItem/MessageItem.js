import React from "react";

import moment from "moment-timezone";

import "./messageItem.scss";

const MessageItem = ({ messages = [], userId }) => {
  return (
    <>
      {messages.map((message) => (
        <div
          key={message.message_id}
          className={
            +userId === message.id
              ? "message-item message-item--user"
              : "message-item message-item--member"
          }
        >
          {message.content}
          <span className="message-item__date">
            {moment(message.date_create).format("LT")}
          </span>
        </div>
      ))}
    </>
  );
};

export default MessageItem;
