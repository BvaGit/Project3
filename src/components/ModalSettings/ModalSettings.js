import React from 'react';
import { FormattedMessage } from 'react-intl';

import Input from '../Input';

import "./modalsettings.scss";

function ModalSettings({languageValue: langValue, handleLanguage, closeModal}){
    const handleChange = (e) => {
        handleLanguage(e.target.value);
    };
    const handleThemeChange = (e) => {
        if (e.target.value === 'light') {
            document.getElementById('root').classList.remove('theme-dark');
            document.getElementById('portal').classList.remove('theme-dark');
        } else {
            document.getElementById('root').classList.add('theme-dark');
            document.getElementById('portal').classList.add('theme-dark');
        }
    };
    return(
        <div className="content">
            <div  className="content-language">
                <div id="language" className="content__item-header">
                    <FormattedMessage 
                    id="language" 
                    defaultMessage="Language:" 
                    value={{ langValue }}>
                    Language:
                    </FormattedMessage>
                </div>
                <label className="inputs__label" htmlFor="en">
                    <FormattedMessage 
                    id="en" 
                    defaultMessage="en" 
                    value={{ langValue }}>
                        en
                    </FormattedMessage>
                </label>
                    <input id="en" name="language" type="radio" value="en" onChange={handleChange} className="content-language__child" />
                    <label className="inputs__label" htmlFor="ru">
                    <FormattedMessage 
                    id="ru" 
                    defaultMessage="ru" 
                    value={{ langValue }}>
                        ru
                    </FormattedMessage>
                    </label>
                    <input id="ru" name="language" type="radio" value="ru" onChange={handleChange} className="content-language__child"/> 
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
                    <label className="inputs__label" htmlFor="light">
                    <FormattedMessage 
                    id="light" 
                    defaultMessage="light" 
                    value={{ langValue }}>
                        light
                    </FormattedMessage>
                    </label>
                    <input id="light" name="theme" type="radio" value="light" onChange={handleThemeChange} className="content-theme__child" />
                    <label className="inputs__label" htmlFor="dark">
                    <FormattedMessage 
                    id="dark" 
                    defaultMessage="dark" 
                    value={{ langValue }}>
                        dark
                    </FormattedMessage>
                    </label>
                    <input id="dark" name="theme" type="radio" value="dark" onChange={handleThemeChange} className="content-theme__child"/> 
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
                <label className="inputs__label">
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
                <label className="inputs__label">
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
                <label className="inputs__label">
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
        </div>
    )
}

export default ModalSettings;
