import React, { useEffect } from "react";
import { io } from "socket.io-client";

const ConnectSocket = ({
  setSocketEmit,
  setNewRoom,
  setNewMessage,
}) => {

  useEffect(() => {
    const socket = io("http://localhost:3000");

    setSocketEmit(socket);

    socket.on("connection", function (socket) {
      console.log("connection", socket);
    });

    socket.on("room", (rooms) => {
      rooms.forEach((room) => socket.join(room.chat_id));
      console.log("join", rooms);
    });

    socket.on("send_message", (msg) => {
      setNewMessage(msg[0]);
      console.log("send_message", msg[0]);
    });

    socket.on("new_room", (channel) => {
      setNewRoom(channel[0]);
      console.log("new_room", channel);
    });

    socket.on("disconnect", (data) => {
      console.log("User disconnected");
    });
  }, []);

  return <></>;
};

export default ConnectSocket;
