import React, { useEffect, useState } from "react";

import { getTime } from "../../../helpers/message";

import "./messageInput.scss";

const MessageInput = ({ socket, getUsersFromApi, userId, chatId, rooms }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getUsersFromApi();
  }, [userId]);

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
          <input
            key={rooms.chat_id}
            value={content}
            className="message__input"
            onChange={handleChangeInput}
            placeholder="Write a message"
          />
        </label>
        <button
          className="message__btn"
          onClick={sendMessage}
          type="submit"
        ></button>
      </div>
    </>
  );
};

export default MessageInput;
