import React, { useState } from "react";

import socket from "../Socket";
// import { sendMessage } from "../../store/rooms/actionTypes";

const MessageList = () => {
  const [valueInput, setValueInput] = useState("");
  const handleValueInput = (e) => setValueInput(e.target.value);

  const sendMessage = () => {
    if (valueInput) {
      socket.emit("chat message", valueInput);
    }
  };

  socket.on("chat message", function (msg) {
    console.log(msg);
  });
  return (
    <>
      <label>
        <input
          value={valueInput}
          onChange={handleValueInput}
        />
      </label>
      <button onClick={sendMessage} type="submit">
        send
      </button>
      <p>{valueInput}</p>
    </>
  );
};

export default MessageList;
