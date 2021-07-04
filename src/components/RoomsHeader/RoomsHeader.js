import React from "react";

import "./roomsHeader.scss";

const RoomsHeader = () => (
  <div className="rooms-header">
    <div className="rooms-header__usermenu">
      <div className="rooms-header__userinfo">
        <img
          className="rooms-header__avatar"
          src="/assets/images/1-36-1024x1024.jpg"
        />
        <div className="rooms-header__userName">Valera</div>
      </div>
      <div>
        <img
          className="rooms-header__settings"
          src="/assets/images/seting_2.png"
        />
        <img className="rooms-header__logout" src="/assets/images/logout.png" />
      </div>
    </div>
    <div className="rooms-header__search">
      <input
        className="rooms-header__input"
        placeholder="&#128269; search ..."
      />
    </div>
  </div>
);

export default RoomsHeader;
