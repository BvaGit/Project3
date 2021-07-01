import React, { useEffect } from "react";
import { io } from "socket.io-client";

const ConnectSocket = ({ setSocketEmit, setNewRoom }) => {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    setSocketEmit(socket);

    socket.on("message", (msg) => {
      console.log(msg);
    });

    socket.on("result", (msg) => {
      console.log(msg);
    });

    socket.on("invited_room", (msg) => {
      setNewRoom(msg[0]);
      console.log("invited_room", msg);
    });
  }, []);

  return <></>;
};

export default ConnectSocket;
