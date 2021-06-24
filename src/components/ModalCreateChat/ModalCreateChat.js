import React, { useEffect, useState } from "react";

import Input from "../Input";

import "./modalCreateChat.scss";
import "../RoomsHeader/roomsHeader.scss";

function ModalCreateChat({ createChat, getUsersFromApi, handleloseModal }) {
  const [state, setState] = useState({ name: "", id: [] });

  useEffect(() => {
    setState(getUsersFromApi());
  }, []);

  console.log(useEffect);

  const users = [
    {
      value: "all",
      label: "ALL USERS",
    },
    { value: 1, label: "first name" },
  ];

  const handleClick = () => {
    createChat(state);
  };

  const handleChangeInput = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const handleChangeSelect = (e) => {
    setState({ ...state, id: +e.target.value });
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
        value={state.name}
        label="Room name"
        type="text"
        placeholder="Enter name your new room..."
      />
      <div className="new-chat__users">
        <div className="new-chat__usersLabel">Who do you want to add</div>
        <select
          className="new-chat__select"
          onChange={handleChangeSelect}
          multiple
        >
          {users.map((user) => (
            <option value={user.value} key={user.value}>
              {user.label}
            </option>
          ))}
        </select>
      </div>
      <div className="button-box">
        <button className="button" onClick={handleClick}>
          CONFIRM
        </button>
        <button className="button" onClick={handleloseModal}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ModalCreateChat;
