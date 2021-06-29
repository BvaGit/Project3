import React from "react";

import MessageCounter from "../MessageCounter";
import MentionPin from "../MentionPin";

import "./singleroom.scss";

const SingleRoom = ({ room, setActiveRoom }) => {
  const handleClick = () => {
    setActiveRoom(room.chat_id);
  };
  return (
    <div className="singleroom" onClick={handleClick}>
      <div className="singleroom__info">
        <img
          className="singleroom__avatar"
          src="../../../public/assets/images/1-36-1024x1024.jpg"
        />
        <div className="singleroom__roomName">{room.name}</div>
      </div>
      <div className="singleroom__messages">
        <MentionPin />
        <MessageCounter />
      </div>
    </div>
  );
};

export default SingleRoom;
