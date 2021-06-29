import React, { useEffect } from "react";

import SingleRoom from "../SingleRoom";

import "./rooms.scss";

const Rooms = ({ getUserChats }) => {
  useEffect(() => {
    getUserChats();
  }, []);

  return (
    <div className="rooms">
      <SingleRoom />
      <SingleRoom />
      <SingleRoom />
    </div>
  );
};

export default Rooms;
