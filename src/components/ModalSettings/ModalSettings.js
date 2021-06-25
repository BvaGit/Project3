import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import Input from '../Input';
import message from '../constants/localization';

import "./modalsettings.scss";

function ModalSettings({languageValue: langValue, handleLanguage, closeModal}){
    const handleChange = (e) => {
        handleLanguage(e.target.value);
      };

    return(
        <div className="content">
            <IntlProvider locale={langValue} messages={message[langValue]}>
                <div  className="content-language">
                    <div id="language" className="content__item-header">
                                    <FormattedMessage 
                                    id="language" 
                                    defaultMessage="Language:" 
                                    value={{ langValue }}>
                                    Language:
                                    </FormattedMessage>
                        </div>
                    {['en', 'ru'].map((x) => (
                        <label key={x} onChange={handleChange} defaultValue='en'>{x}
                                <input type="radio" id={x} key={x} value={x} name="local" className="content-language__child"/>
                        </label>
                            ))}
                </div>
                <div className="content-theme">
                                
                    <div id="theme" className="content__item-header">
                    <FormattedMessage 
                        id="theme" 
                        defaultMessage="Theme:" 
                        value={{ langValue }}>
                        Theme:
                    </FormattedMessage>
                    </div>
                    <FormattedMessage 
                        id="light" 
                        defaultMessage="light" 
                        value={{ langValue }}>
                        <label htmlFor="light">light</label>
                    </FormattedMessage>
                    <input id="light" name="theme" type="radio" className="content-theme__child"/>
                    <FormattedMessage 
                        id="dark" 
                        defaultMessage="dark" 
                        value={{ langValue }}>
                        <label htmlFor="dark">dark</label>
                    </FormattedMessage>
                    <input id="dark" name="theme" type="radio" className="content-theme__child"/> 
                </div>
                <div className="content-reset">
                    <span className="content__item-header content-reset__header">
                        <FormattedMessage 
                            id="notifications" 
                            defaultMessage="Notifications:" 
                            value={{ langValue }}>
                            Notifications:
                        </FormattedMessage>
                    </span>
                    <input type="checkbox"/>
                </div>
                <div>
                    <button className="button">
                    <FormattedMessage 
                        id="reset" 
                        defaultMessage="Reset all settings" 
                        value={{ langValue }}>
                        Reset all settings
                    </FormattedMessage>
                    </button>
                </div>
                <div>
                    <label>
                    <FormattedMessage 
                        id="newLogin" 
                        defaultMessage="New login" 
                        value={{ langValue }}>
                        New login
                    </FormattedMessage>
                    <FormattedMessage 
                        id="newLoginPlaceholder" 
                        defaultMessage="Enter your new login..." 
                        value={{ langValue }}>
                            {placeholder=>
                                <Input type="text" placeholder={placeholder}/>
                            }
                        </FormattedMessage>
                    </label>
                </div>
                <div>
                    <label>
                    <FormattedMessage 
                        id="newPassword" 
                        defaultMessage="New password" 
                        value={{ langValue }}>
                        New password
                    </FormattedMessage>
                    <FormattedMessage 
                    id="newPasswordPlaceholder" 
                    defaultMessage="Enter your new password..." 
                    value={{ langValue }}>
                        {placeholder=>
                            <Input type="text" placeholder={placeholder}/>
                        }
                    </FormattedMessage>
                    </label>
                </div>
                <div>
                    <label>
                    <FormattedMessage 
                        id="confirmPassword" 
                        defaultMessage="Confirm password" 
                        value={{ langValue }}>
                        Confirm password
                    </FormattedMessage>
                    <FormattedMessage 
                    id="repeatPasswordPlaceholder" 
                    defaultMessage="Repeat your new password..." 
                    value={{ langValue }}>
                        {placeholder=>
                        <Input type="text" placeholder={placeholder}/>
                        }
                    </FormattedMessage>
                    </label>
                </div>
                <div className="button-box">
                    <button className="button">
                    <FormattedMessage 
                        id="confirmBTN" 
                        defaultMessage="Confirm" 
                        value={{ langValue }}>
                        Confirm
                    </FormattedMessage>
                    </button>
                    <button className="button" onClick={closeModal}>
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
    )
}

export default ModalSettings;