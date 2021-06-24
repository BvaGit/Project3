import React from "react";

import RoomsHeader from "../RoomsHeader";
import Rooms from "../Rooms";
import AddRoom from "../AddRoom";
import MessageList from "../MessageList";
import ConnectSocket from "../Socket";

import "./mainPaige.scss";

const MainPage = () => (
  <div>
    <header className="header">
      <img
        className="header__logo"
        src="../../../public/assets/images/logo.png"
      />
      <h1 className="header__appName">Blabber</h1>
    </header>
    <div className="rooms__box">
      <RoomsHeader />
      <Rooms />
      <AddRoom />
      <MessageList />
      <ConnectSocket />
    </div>
  </div>
);

export default MainPage;
