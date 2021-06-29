import React, { useEffect } from "react";

import SingleRoom from "../SingleRoom";

import "./rooms.scss";

const Rooms = () => {
  useEffect(() => {}, []);

  return (
    <div className="rooms">
      <SingleRoom />
      <SingleRoom />
      <SingleRoom />
    </div>
  );
};

export default Rooms;
