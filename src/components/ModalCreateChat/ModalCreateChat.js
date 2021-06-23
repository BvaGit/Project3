import React from 'react';

import Input from '../Input'

import './modalCreateChat.scss';
import '../RoomsHeader/roomsHeader.scss'

function ModalCreateChat(props){
    return  <div className="new-chat">
                <div className="new-chat__avatar">
                        <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
                </div>
                <Input label="Room name" type="text" placeholder="Enter name your new room..."/>
                <div className="new-chat__users">
                    <div className="new-chat__usersLabel">Who do you want to add</div>
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