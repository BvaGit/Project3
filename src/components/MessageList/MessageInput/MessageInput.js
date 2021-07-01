import React, { useEffect, useState } from "react";

import { getTime } from "../../../helpers/message";

import "./messageInput.scss";

const MessageInput = ({
  socket,
  getUsersFromApi,
  getUserChats,
  userId,
  chatId,
  rooms,
}) => {
  const [state, setState] = useState({
    content: "",
  });

  useEffect(() => {
    getUsersFromApi();
    if (userId) {
      getUserChats(userId);
    }
  }, [userId]);

  const handleChangeInput = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const sendMessage = () => {
    if (state) {
      socket.emit("SEND_MESSAGE", {
        id: userId,
        chat_id: chatId,
        content: state.content,
        date_create: getTime(),
      });
    }
  };

  return (
    <>
      <div className="message">
        <label>
          <input
            key={rooms.chat_id}
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
