import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Input from '../Input';

import "./modalsettings.scss";

function ModalSettings({languageValue: langValue, handleLanguage, closeModal, changeLogin}){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const handleValueInput = (e) => {
        const body = {
            login, 
            password
        }
        changeLogin(body);
        closeModal();
    };
    const handleValueInputLogin = (e) => {
        setLogin(e.target.value)
    };
    const handleValueInputPassword = (e) => {
        setPassword(e.target.value)
    };

    const handleChange = (e) => {
        handleLanguage(e.target.value);
    };
    const handleThemeChange = (e) => {
        const selectedTheme = e.target.value;
        if (selectedTheme === 'light') {
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
                    </FormattedMessage>
                </div>
                    <Input labelId="en" id="en" name="language" type="radio" value="en" onChange={handleChange} className="content-language__child " />
                    <Input labelId="ru" id="ru" name="language" type="radio" value="ru" onChange={handleChange} className="content-language__child "/> 
            </div>
            <div className="content-theme">       
                <div id="theme" className="content__item-header">
                    <FormattedMessage 
                        id="theme" 
                        defaultMessage="Theme:" 
                        value={{ langValue }}>
                    </FormattedMessage>
                </div>
                    <Input id="light" labelId="light" name="theme" type="radio" value="light" onChange={handleThemeChange} className="content-theme__child" />
                    <Input id="dark" labelId="dark" name="theme" type="radio" value="dark" onChange={handleThemeChange} className="content-theme__child"/> 
            </div>
            <div className="content-reset">
                <span className="content__item-header content-reset__header">
                    <FormattedMessage 
                        id="notifications" 
                        defaultMessage="Notifications:" 
                        value={{ langValue }}>
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
                </FormattedMessage>
                </button>
            </div>
            <div>                
                <Input id="newLogin" name="login" labelId="newLogin" type="text" placeholderId="newLoginPlaceholder" onChange={handleValueInputLogin}  />
            </div>
            <div>
                <Input id="newPassword" name="password" labelId="newPassword" type="password" placeholderId="newPasswordPlaceholder"
                onChange={handleValueInputPassword}  />
            </div>
            <div>
                <Input id="confirmPassword" name="confirmPassword" labelId="confirmPassword" type="password" placeholderId="repeatPasswordPlaceholder"  /> 
            </div>
            <div className="button-box">
                <button className="button" onClick={handleValueInput}>
                <FormattedMessage 
                    id="confirmBTN" 
                    defaultMessage="Confirm" 
                    value={{ langValue }}>
                </FormattedMessage>
                </button>
                <button className="button" onClick={closeModal}>
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

export default ModalSettings;
