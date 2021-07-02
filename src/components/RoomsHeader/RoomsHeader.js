import React, { useState } from 'react';

import CustomModal from '../CustomModal';
import ModalMyAccount from '../ModalMyAccount';
import Settings from '../Settings';
import Input from '../Input';

import './roomsHeader.scss';

const RoomsHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(prev => !prev);

    return(
        <div className="rooms-header">
            <div className="rooms-header__usermenu">
                <div className="rooms-header__userinfo">
                    <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
                    <div className="rooms-header__userName" onClick={handleClick}>Valera</div>
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
