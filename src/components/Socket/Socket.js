import React, { useEffect } from "react";
import { io } from "socket.io-client";

const ConnectSocket = ({ setSocketEmit, setNewRoom, setNewMessage }) => {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    setSocketEmit(socket);

    socket.on("room", (rooms) => {
      console.log("rooms");
      rooms.forEach((room) => socket.join(room.room_id));
    });

    socket.on("received_message", (msg) => {
      setNewMessage(msg);
      console.log("received_message", msg[0]);
    });

    socket.on("invited_room", (msg) => {
      setNewRoom(msg[0]);
      console.log("invited_room", msg);
    });
  }, []);

  return <></>;
};

export default ConnectSocket;
