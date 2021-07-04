import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import { getTime } from "../../../helpers/message";

import "./messageInput.scss";

const MessageInput = ({ socket, getUsersFromApi, userId, chatId, rooms, messagesBlock , messages}) => {
  const [content, setContent] = useState("");

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      sendMessage();
    }
  };

  useEffect(() => {
    getUsersFromApi();
  }, [userId]);

  useEffect(() => {
    messagesBlock.current.scrollTop = messagesBlock.current.scrollHeight;
  }, [messages.length]);

  const handleChangeInput = (e) => {
    setContent(e.target.value);
  };

  const sendMessage = () => {
    if (content) {
      socket.emit("send_message", {
        id: userId,
        chat_id: chatId,
        content: content,
        date_create: getTime(),
      });
      setContent("");
    }
  };

  return (
    <>
      <div className="message">
        <label>
        <FormattedMessage
          id='Write a message'
          defaultMessage='Write a message'>{placeholder => (
            <input
              key={rooms.chat_id}
              value={content}
              className="message__input"
              onChange={handleChangeInput}
              placeholder={placeholder}
              onKeyDown={handleKeyDown}
            />
          )}
          </FormattedMessage>
        </label>
        <button
          className="message__btn"
          onClick={sendMessage}
          type="submit"
        />
      </div>
    </>
  );
};

export default MessageInput;
