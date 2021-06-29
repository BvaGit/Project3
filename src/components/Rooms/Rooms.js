import React, { useEffect } from "react";

import SingleRoom from "../SingleRoom";

import "./rooms.scss";

const Rooms = ({ getUserChats, userId, rooms }) => {
  useEffect(() => {
      if (userId) {
          getUserChats(userId);
      }
  }, [userId]);
  return (
    <div className="rooms">
        {rooms.length
            ? rooms.map(room => <SingleRoom room={room} key={room.chat_id} />)
            : <div>Чатов нету</div>
        }
    </div>
  );
};

export default Rooms;
