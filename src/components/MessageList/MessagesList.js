import React from "react";

import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";

const MessagesList = ({ messages }) => {
  return (
    <>
      <MessageItem messages={messages} />
      <MessageInput />
    </>
  );
};

export default MessagesList;
