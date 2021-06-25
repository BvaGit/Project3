import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import Input from '../Input';
import message from '../constants/localization';

import './modalCreateChat.scss';
import '../RoomsHeader/roomsHeader.scss'

function ModalCreateChat({languageValue: langValue, handlecloseModal}){

    return  <div className="new-chat">
        <IntlProvider locale={langValue} messages={message[langValue]}>
            <div className="new-chat__avatar">
                <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
            </div>
            <label>
                <FormattedMessage 
                    id="roomName" 
                    defaultMessage="Room name" 
                    value={{ langValue }}>
                    Room name
                </FormattedMessage>
                <FormattedMessage 
                    id="roomNamePlaceholder" 
                    defaultMessage="Enter name your new room..." 
                    value={{ langValue }}>
                    {placeholder=>
                        <Input type="text" placeholder={placeholder}/>
                    }
                </FormattedMessage>
            </label>
            <div className="new-chat__users">
                <div className="new-chat__usersLabel">
                    <FormattedMessage 
                        id="addMembers" 
                        defaultMessage="Who do you want to add" 
                        value={{ langValue }}>
                        Who do you want to add
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
                        Create
                    </FormattedMessage>
                </button>
                <button className="button" onClick={handlecloseModal}>
                    <FormattedMessage 
                        id="cancelBTN" 
                        defaultMessage="Cancel" 
                        value={{ langValue }}>
                        Cancel
                    </FormattedMessage>
                </button>
            </div>
        </IntlProvider>
    </div>
}

export default ModalCreateChat;