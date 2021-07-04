import React from "react";

import CustomModal from "../CustomModal";
import ModalMyAccount from "../ModalMyAccount";
import Settings from "../Settings";
import Input from "../Input";
import history from "../../helpers/history";
import cookie from "js-cookie";

import "./roomsHeader.scss";

const RoomsHeader = ({
  userLogin,
  userName,
  avatar,
  isOpen,
  modalMyAccount,
  logout,
  searchRoom,
}) => {
  const handleClick = () => modalMyAccount();
  const handleLogout = () => {
    logout();
    cookie.remove("token");
    history.push("/");
  };

  const handleSearchRoom = (e) => {
    searchRoom(e.target.value);
  };

  return (
    <div className="rooms-header">
      <div className="rooms-header__usermenu">
        <div className="rooms-header__userinfo">
          <img
            className="rooms-header__avatar"
            src={avatar ? avatar : "/assets/images/1-36-1024x1024.jpg"}
          />
          <div className="rooms-header__userName" onClick={handleClick}>
            {userName || userLogin}
          </div>
          {isOpen && (
            <CustomModal
              header="My Account"
              content={<ModalMyAccount handlecloseModal={handleClick} />}
              handlecloseModal={handleClick}
            />
          )}
        </div>
        <div className="rooms-header__settingsmenu">
          <Settings className="rooms-header__settings" />
          <img
            className="rooms-header__logout"
            src="../../../public/assets/images/logout_2.png"
            onClick={handleLogout}
          />
        </div>
      </div>
      <div className="rooms-header__search">
        <Input
          labelId="search"
          className="rooms-header__input"
          placeholderId="searchPlaceholder"
          titleId="Enter room name"
          onChange={handleSearchRoom}
        />
      </div>
    </div>
  );
};

export default RoomsHeader;
