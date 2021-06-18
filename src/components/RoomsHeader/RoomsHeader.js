import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import './roomsHeader.scss';
import message from '../constants/localization';

const RoomsHeader = () => {
    const [locale, setLocale] = useState('en');

    const handleChange = (e) => {
      setLocale(e.target.value);
    };

    return(
        <div className="rooms-header">
            <div className="rooms-header__usermenu">
                <div className="rooms-header__userinfo">
                    <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
                    <IntlProvider locale={locale} messages={message[locale]}>
                        <div className="rooms-header__userName">
                            <FormattedMessage 
                            id="header" 
                            defaultMessage="Welcome" 
                            value={{ locale }}/>
                            , Valera
                        </div>
                    </IntlProvider>
                </div>
                <div>
                    <select onChange={handleChange} defaultValue={locale}>
                        {['en', 'ru'].map((x) => (
                            <option key={x}>{x}</option>
                        ))}
                    </select>
                    
                </div>
                <div>
                    <img className="rooms-header__settings" src="../../../public/assets/images/seting_2.png"/>
                    <img className="rooms-header__logout" src="../../../public/assets/images/logout.png"/>
                </div>
            </div>
            <div className="rooms-header__search">
                <input 
                className="rooms-header__input" 
                
                placeholder="&#128269; search ..."/>
            </div>
        </div>
    )
}

export default RoomsHeader;