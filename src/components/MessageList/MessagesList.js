import React from "react";

import MessageInput from "./MessageInput";
import MessageItem from "./MessageItem";

const MessagesList = ({ messages }) => {
    const messagesBlock = React.useRef(null);
  return (
    <>
      <MessageItem messages={messages} messagesBlock={messagesBlock} />
      <MessageInput messages={messages} messagesBlock={messagesBlock} />
    </>
  );
};

export default MessagesList;
