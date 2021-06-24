import React, { useEffect } from "react";
import { io } from "socket.io-client";

const ConnectSocket = ({ setSocketEmit }) => {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    setSocketEmit(socket);

    socket.on("message", (msg) => {
      console.log(msg);
    });

    socket.on("result", (msg) => {
      console.log(msg);
    });
  }, []);

  return <></>;
};

export default ConnectSocket;
