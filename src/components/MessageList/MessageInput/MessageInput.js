import React, { useEffect, useState } from "react";

import { getTime } from "../../../helpers/message";

import "./messageInput.scss";

const MessageInput = ({
  socket,
  getUsersFromApi,
  sendMessages,
  getUserChats,
  userId,
  chatId,
  rooms,
  setActiveRoom,
}) => {
  const [state, setState] = useState({
    id: "",
    chat_id: "",
    content: "",
    date_create: "29-06-2021",
  });

  useEffect(() => {
    getUsersFromApi();
    setActiveRoom(chatId);
    if (userId) {
      getUserChats(userId);
    }
  }, [userId]);

  const handleChangeInput = (e) => {
    console.log("setState content", e.target.value);
    setState({
      ...state,
      id: userId,
      chat_id: chatId,
      content: e.target.value,
    });
  };

  const handleClick = () => {
    sendMessages(state);
  };

  const sendMessage = () => {
    if (state) {
      socket.emit(
        "SEND_MESSAGE",
        JSON.stringify({
          id: state.id,
          chat_id: state.chat_id,
          content: state.content,
          date_create: getTime(),
          // здесь из редакса айди
        })
      );
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
          onClick={(sendMessage, handleClick)}
          type="submit"
        ></button>
      </div>
    </>
  );
};

export default MessageInput;
