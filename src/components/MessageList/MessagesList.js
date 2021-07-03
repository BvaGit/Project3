import React from "react";

import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";

const MessagesList = ({ messages }) => {
    const lastMessageBlock = React.useRef(null);
  return (
    <>
      <MessageItem messages={messages} lastMessageBlock={lastMessageBlock} />
      <MessageInput lastMessageBlock={lastMessageBlock} />
    </>
  );
};

export default MessagesList;
