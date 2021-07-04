import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";

import MessagesList from "../MessageList";

import "./messagesContainer.scss";

const MessagesContainer = ({
  chat,
  chatId,
  getUsersFromApi,
  userLogin,
  userName, 
  languageValue: langValue 
}) => {
  useEffect(() => {
    getUsersFromApi();
  }, []);

  return chat ? (
    <>
      <div className="message-box">
        <h1 className="message-box__title">{chat.name}</h1>
        <MessagesList chatId={chatId} />
      </div>
    </>
  ) : (
    <>
      <div className="message-box message-box--empty">
        <FormattedMessage
          id="Welcome, "
          defaultMessage="Welcome, "
          value={{ langValue }}
        >
        Welcome,
        </FormattedMessage>
        <p className="message-box--empty__user">{userName || userLogin}</p>!
      </div>
    </>
  );
};

export default MessagesContainer;
