import React, { useEffect } from "react";

import SingleRoom from "../SingleRoom";

import "./rooms.scss";

const Rooms = ({ getUserChats, userId, rooms, setActiveRoom }) => {
  useEffect(() => {
    if (userId) {
      getUserChats(userId);
    }
  }, [userId]);
  return (
    <div className="rooms">
      {rooms.length ? (
        rooms.map((room) => (
          <SingleRoom
            key={room.chat_id}
            room={room}
            setActiveRoom={setActiveRoom}
          />
        ))
      ) : (
        <div>No chats</div>
      )}
    </div>
  );
};

export default Rooms;
