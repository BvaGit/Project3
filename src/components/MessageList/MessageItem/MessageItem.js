import React from "react";

import moment from "moment-timezone";

import "./messageItem.scss";

const MessageItem = ({ messages = [], userId, name, messagesBlock }) => {
  return (
    <div className="message-box__container" ref={messagesBlock}>
      {messages.map((message) => (
        <div
          key={message.message_id}
          className={
            +userId === message.id
              ? "message-item message-item--user"
              : "message-item message-item--member"
          }
        >
          <div className="message-item__block">
            {message.content}
            <p className="message-item__name"> {message.login || name}</p>
            <span className="avatar">
              <img
                src={
                  message.avatar
                    ? message.avatar
                    : "/assets/images/1-36-1024x1024.jpg"
                }
              />
            </span>
          </div>
          <span className="message-item__date">
            {moment(message.date_create).format("LT")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MessageItem;
