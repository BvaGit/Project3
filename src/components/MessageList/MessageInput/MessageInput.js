import React, { useEffect, useState } from "react";

import { getTime } from "../../../helpers/message";

import "./messageInput.scss";

const MessageInput = ({ socket, getUsersFromApi, userId, chatId, rooms, lastMessageBlock }) => {
  const [content, setContent] = useState("");

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      sendMessage();
    }
  };

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
      lastMessageBlock.current.scrollIntoView({ behavior: "smooth" });
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
            onKeyDown={handleKeyDown}
          />
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
