import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import Input from "../Input";

import "./modalCreateChat.scss";
import "../RoomsHeader/roomsHeader.scss";

function ModalCreateChat({
  createChat,
  sendParticipants,
  getUsersFromApi,
  users,
  userId,
  handlecloseModal,
  languageValue: langValue,
}) {
  const [state, setState] = useState({ ids: [userId], name: "" });

  useEffect(() => {
    getUsersFromApi();
  }, []);

  const handleClick = () => {
    createChat(state);
    sendParticipants(state);
    handlecloseModal();
  };

  const handleChangeInput = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const handleChangeSelect = (e) => {
    setState({
      ...state,
      ids: state.ids.includes(e.target.value)
        ? state.ids.filter((id) => id !== e.target.value)
        : [...state.ids, e.target.value],
    });
  };

  return (
    <div className="new-chat">
      <div className="new-chat__avatar">
        <img
          className="rooms-header__avatar"
          src="../../../public/assets/images/1-36-1024x1024.jpg"
        />
      </div>
      <Input
        labelId="roomName"
        onChange={handleChangeInput}
        label="Room name"
        type="text"
        placeholderId="roomNamePlaceholder"
        titleId="roomNamePlaceholder"
      />
      <div className="new-chat__users">
        <div className="new-chat__usersLabel">
          <FormattedMessage
            id="addMembers"
            defaultMessage="Who do you want to add"
            value={{ langValue }}
          ></FormattedMessage>
        </div>
        <select className="new-chat__select" multiple>
          {users.map((user) => (
            <option
              value={user.id}
              key={user.id}
              onClick={handleChangeSelect}
              className={
                state.ids.includes(user.id) ? "selected" : "non-selected"
              }
            >
              {user.login}
            </option>
          ))}
        </select>
      </div>
      <div className="button-box">
        <button className="button" onClick={handleClick}>
          <FormattedMessage
            id="createBTN"
            defaultMessage="Create"
            value={{ langValue }}
          ></FormattedMessage>
        </button>
        <button className="button" onClick={handlecloseModal}>
          <FormattedMessage
            id="Cancel"
            defaultMessage="Cancel"
            value={{ langValue }}
          ></FormattedMessage>
        </button>
      </div>
    </div>
  );
}

export default ModalCreateChat;
