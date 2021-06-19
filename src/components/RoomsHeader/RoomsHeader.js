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
                        {['en', 'ru'].map((x) => (
                    <label key={x} onChange={handleChange} defaultValue={locale}>{x}
                            <input type="radio" id={x} key={x} value={x} name="local"/>
                    </label>
                        ))}
                </div>
                <div>
                    <img className="rooms-header__settings" src="../../../public/assets/images/seting_2.png"/>
                    <img className="rooms-header__logout" src="../../../public/assets/images/logout.png"/>
                </div>
            </div>
            <div className="rooms-header__search">
                <IntlProvider locale={locale} messages={message[locale]}>
                    <FormattedMessage 
                        id="search" 
                        defaultMessage="Welcome" 
                        value={{ locale }}>
                            {placeholder=>  
                                <input 
                                className="rooms-header__input" 
                                placeholder={placeholder}/>
                            }
                    </FormattedMessage>
                        
                </IntlProvider>
            </div>
        </div>
    )
}

export default RoomsHeader;