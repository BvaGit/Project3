import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import CustomModal from '../CustomModal';
import ModalMyAccount from '../ModalMyAccount';
import Settings from '../Settings';
import message from '../constants/localization';

import './roomsHeader.scss';

const RoomsHeader = ({languageValue: langValue}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(prev => !prev);

    return(
        <div className="rooms-header">
            <IntlProvider locale={langValue} messages={message[langValue]}>
                <div className="rooms-header__usermenu">
                    <div className="rooms-header__userinfo">
                        <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
                        <div className="rooms-header__userName" onClick={handleClick}>Valera</div>
                        {isOpen && <CustomModal header="My Account" content={<ModalMyAccount handlecloseModal={handleClick}/>} handlecloseModal={handleClick}/>}
                    </div>
                    <div className="rooms-header__settingsmenu">
                        <Settings className="rooms-header__settings"/>
                        <img className="rooms-header__logout" src="../../../public/assets/images/logout.png"/>
                    </div>
                </div>
                <div className="rooms-header__search">
                    <FormattedMessage 
                        id="search" 
                        defaultMessage="Search .." 
                        value={{ langValue }}>
                            {placeholder=>  
                                <input 
                                className="rooms-header__input" 
                                placeholder={placeholder}/>
                            }
                    </FormattedMessage>
                </div>
            </IntlProvider>
        </div>
    )
}
export default RoomsHeader;
