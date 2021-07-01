import React, { useEffect } from "react";
import { io } from "socket.io-client";

const ConnectSocket = ({ setSocketEmit, setNewRoom, setNewMessage }) => {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    setSocketEmit(socket);

    socket.on("room", (rooms) => {
      rooms.forEach((room) => socket.join(room.chat_id));
    });

    socket.on("send_message", (msg) => {
      setNewMessage(msg[0]);
      console.log("send_message", msg[0]);
    });

    socket.on("invited_room", (msg) => {
      setNewRoom(msg[0]);
      console.log("invited_room", msg);
    });
  }, []);

  return <></>;
};

export default ConnectSocket;
