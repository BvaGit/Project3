import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import cookie from "js-cookie";

import CustomModal from '../CustomModal';
import ModalMyAccount from '../ModalMyAccount';
import Settings from '../Settings';
import Input from '../Input';

import './roomsHeader.scss';

const RoomsHeader = ({ userName, avatar, isOpen, modalMyAccount }) => {


    
    const handleClick = () => modalMyAccount();
    

    return(
        <div className="rooms-header">
            <div className="rooms-header__usermenu">
                <div className="rooms-header__userinfo">
                    <img className="rooms-header__avatar" src={avatar ? avatar : '../../../public/assets/images/1-36-1024x1024.jpg'}/>
                    <div className="rooms-header__userName" onClick={handleClick}>{ userName ? userName : "Enter your name " }</div>
                    {isOpen && <CustomModal header="My Account" content={<ModalMyAccount handlecloseModal={handleClick}/>} handlecloseModal={handleClick}/>}
                </div>
                <div className="rooms-header__settingsmenu">
                    <Settings className="rooms-header__settings"/>
                    <img className="rooms-header__logout" src="../../../public/assets/images/logout_2.png"/>
                </div>
            </div>
            <div className="rooms-header__search">
                <Input 
                labelId="search"
                className="rooms-header__input" 
                placeholderId="searchPlaceholder"/>
            </div>
        </div>
    )
}
export default RoomsHeader;
