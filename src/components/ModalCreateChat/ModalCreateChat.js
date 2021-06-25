import React, { useEffect, useState } from "react";

import Input from "../Input";

import "./modalCreateChat.scss";
import "../RoomsHeader/roomsHeader.scss";

function ModalCreateChat({ createChat, sendParticipants, getUsersFromApi, users, handlecloseModal }) {
  const [state, setState] = useState({ ids: [], name: "" });

  useEffect(() => {
    getUsersFromApi();
  }, []);

  const handleClick = () => {
    createChat(state);
    sendParticipants(state);
  };

  const handleChangeInput = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const handleChangeSelect = (e) => {
    console.log(e.target.value)
    setState({
      ...state,
      ids: state.ids.includes(e.target.value)
        ? state.ids.filter((id)=>id !== e.target.value)
        : [...state.ids, e.target.value]
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
        onChange={handleChangeInput}
        label="Room name"
        type="text"
        placeholder="Enter name your new room..."
      />
      <div className="new-chat__users">
        <div className="new-chat__usersLabel">Who do you want to add</div>
        <select
          className="new-chat__select"
          multiple
        >
          {users.map((user) => (
            <option
            value={user.id}
            key={user.id}
            onClick={handleChangeSelect}
            className={state.ids.includes(user.id) ? "selected" : "non-selected"}
            >
              {user.login}
            </option>
          ))}
        </select>
      </div>
      <div className="button-box">
        <button className="button" onClick={handleClick}>
          Confirm
        </button>
        <button className="button" onClick={handlecloseModal}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ModalCreateChat;
