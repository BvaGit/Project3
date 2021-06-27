import React from 'react';
import { FormattedMessage } from 'react-intl';

import Input from '../Input';

import './modalCreateChat.scss';
import '../RoomsHeader/roomsHeader.scss'

function ModalCreateChat({languageValue: langValue, handlecloseModal}){

    return (
        <div className="new-chat">
            <div className="new-chat__avatar">
                <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
            </div>
                <Input labelId="roomName" type="text" placeholderId="roomNamePlaceholder"/>  
            <div className="new-chat__users">
                <div className="new-chat__usersLabel">
                    <FormattedMessage 
                        id="addMembers" 
                        defaultMessage="Who do you want to add" 
                        value={{ langValue }}>
                    </FormattedMessage>
                    </div>
                <select className="new-chat__select">
                    <option>all</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div className="button-box">
                <button className="button">
                    <FormattedMessage 
                        id="createBTN" 
                        defaultMessage="Create" 
                        value={{ langValue }}>
                    </FormattedMessage>
                </button>
                <button className="button" onClick={handlecloseModal}>
                    <FormattedMessage 
                        id="cancelBTN" 
                        defaultMessage="Cancel" 
                        value={{ langValue }}>
                    </FormattedMessage>
                </button>
            </div>
        </div>
    )
}

export default ModalCreateChat;
