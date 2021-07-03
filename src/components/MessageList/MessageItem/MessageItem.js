import React from "react";

import "./messageItem.scss";

const MessageItem = ({ messages = [], userId, avatar, name }) => {
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
          <div className="message-item__block">
          {message.content}
          <p className="message-item__name"> {name} </p>
          <span className="avatar">
          <img src={avatar ? avatar : '../../../../public/assets/images/1-36-1024x1024.jpg'} />
          </span>
          </div>

          <span className="message-item__date">{message.date_create}</span>
        </div>
      ))}
    </>
  );
};

export default MessageItem;
