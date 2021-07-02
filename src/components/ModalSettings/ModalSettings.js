import React from "react";
import { FormattedMessage } from "react-intl";

import Input from '../Input';
import Button from "../Button";
import ModalSettingsInput from './ModalSettingsInput';
import ModalSettingsButton from './ModalSettingsButton';

import "./modalsettings.scss";

function ModalSettings({ languageValue: langValue, handleLanguage, closeModal }) {
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
            <Input 
                labelId="en" 
                id="en" 
                name="language" 
                type="radio" 
                value="en" 
                onChange={handleChange} 
                className="content-language__child"
            />
            <Input 
                labelId="ru" 
                id="ru" 
                name="language" 
                type="radio" 
                value="ru" 
                onChange={handleChange} 
                className="content-language__child"
            /> 
          </div>
          <div className="content-theme">       
            <div id="theme" className="content__item-header">
              <FormattedMessage 
                id="theme" 
                defaultMessage="Theme:" 
                value={{ langValue }}>
              </FormattedMessage>
            </div>
            <Input 
              id="light" 
              labelId="light" 
              name="theme" 
              type="radio" 
              value="light" 
              onChange={handleThemeChange} 
              className="content-theme__child" 
            />
            <Input 
              id="dark" 
              labelId="dark" 
              name="theme" 
              type="radio" 
              value="dark" 
              onChange={handleThemeChange} 
              className="content-theme__child"
            /> 
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
            <ModalSettingsInput
              id="login" 
              name="login" 
              labelId="newLogin" 
              type="text" 
              titleId="min 4 max 8, no spases, no empties"
              placeholderId="newLoginPlaceholder" 
            />    
          </div>
          <div>
            <ModalSettingsInput
              id="password" 
              name="password" 
              labelId="newPassword" 
              type="password" 
              titleId="min 6 max 12, not empty, no spases, include digital"
              placeholderId="newPasswordPlaceholder"
            />   
          </div>
          <div>
            <ModalSettingsInput
              id="confirmPassword" 
              name="confirmPassword" 
              labelId="confirmPassword" 
              type="password" 
              titleId="min 6 max 12, not empty, no spases, include digital"
              placeholderId="repeatPasswordPlaceholder"  
            />  
          </div>
          <div className="button-box">
            <ModalSettingsButton 
              id="Save"
              textId="Save"
              closeModal={closeModal}
            />
            <Button 
              id="cancel"
              textId="Cancel"
              closeModal={closeModal}
            />
          </div>
        </div>
      );
}

export default ModalSettings;
