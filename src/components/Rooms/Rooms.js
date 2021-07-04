import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl"
import SingleRoom from "../SingleRoom";

import "./rooms.scss";

const Rooms = ({ getUserChats, userId, rooms, setActiveRoom, languageValue: langValue }) => {
 
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
        <div className="rooms__message">
          <FormattedMessage
              id="No chats"
              defaultMessage="No chats"
              value={{ langValue }}
          >
          </FormattedMessage>
        </div>
      )}
    </div>
  );
};

export default Rooms;
