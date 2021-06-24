import React, { useState } from "react";

const MessageList = ({ socket }) => {
  const [valueInput, setValueInput] = useState("");
  const handleValueInput = (e) => setValueInput(e.target.value);

  const sendMessage = () => {
    if (valueInput) {
      socket.emit(
        "SEND_MESSAGE",
        JSON.stringify({
          id: 1,
          chat_id: 1,
          content: valueInput,
          date_create: "23-06-2021",
        })
      );
    }
  };

  // socket.on("result", function (msg) {
  //   console.log(msg);
  // });
  return (
    <>
      <label>
        <input value={valueInput} onChange={handleValueInput} />
      </label>
      <button onClick={sendMessage} type="submit">
        send
      </button>
      <p>{valueInput}</p>
    </>
  );
};

export default MessageList;
