import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import RoomsHeader from "../RoomsHeader";
import Rooms from "../Rooms";
import AddRoom from "../AddRoom";
import MessagesContainer from "../MessagesContainer";
import { addToken, myAccountGET } from "../../store/user/asyncActions";
import { getActiveRoom } from "../../store/rooms/selectors";

import ConnectSocket from "../Socket";

import "./mainPaige.scss";

const MainPage = () => {
  const dispatch = useDispatch();

  const chatId = useSelector(getActiveRoom);

    useEffect(() => {
        dispatch(addToken());
        dispatch(myAccountGET());
    }, []);

  return (
    <div className="inner">
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
        <ConnectSocket />
      </div>
      <MessagesContainer chatId={chatId} />
    </div>
  );
};

export default MainPage;
