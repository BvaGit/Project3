import React from 'react';

import './modalCreateChat.scss';
import '../RoomsHeader/roomsHeader.scss'
import '../ModalSettings/modalsettings.scss'

function ModalCreateChat(props){
    return  <div className="new-chat">
                <div className="new-chat__avatar">
                        <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
                </div>
                <div className="new-chat__name">
                    <div>Room name</div>
                    <input className="new-chat__input" placeholder="Enter name your new room..."/>
                </div>
                <div className="new-chat__users">
                    <div>Who do you want to add</div>
                    <select className="new-chat__select">
                        <option>all</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="button-box">
                    <button className="button">CONFIRM</button>
                    <button className="button" onClick={props.handlecloseModal}>Cancel</button>
                </div>
            </div>
}

export default ModalCreateChat;