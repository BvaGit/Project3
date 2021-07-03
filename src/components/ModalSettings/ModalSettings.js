import React from "react";
import { FormattedMessage } from "react-intl";

import { DEFAULT_THEME, THEME } from "../../constants/theme";
import { DEFAULT_LOCALE, LOCALE } from "../../constants/locale";
import Input from '../Input';
import Button from "../Button";
import ModalSettingsInput from './ModalSettingsInput';
import ModalSettingsButton from './ModalSettingsButton';

import "./modalsettings.scss";

function ModalSettings({ languageValue: langValue, handleLanguage, handleTheme, closeModal, changeAccountField, updateAccount, account }) {
  const handleLanguageChange = (e) => {
    const language = e.target.value;
    handleLanguage(language);
    changeAccountField({ locale: language });
    updateAccount();
  };
  const handleThemeChange = (e) => {
      const selectedTheme = e.target.value;
      handleTheme(selectedTheme);
      changeAccountField({ theme: selectedTheme });
      updateAccount();
  };
  const handleResetSettings = () => {
    handleTheme(DEFAULT_THEME);
    handleLanguage(DEFAULT_LOCALE);
    changeAccountField({ 
      theme: DEFAULT_THEME,
      locale: DEFAULT_LOCALE 
    });
    updateAccount();
  };
  const handleClose = () => {
    closeModal();
  }

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
                value={LOCALE.EN} 
                onChange={handleLanguageChange} 
                className="content-language__child"
                isSelected={account.locale === LOCALE.EN}
            />
            <Input 
                labelId="ru" 
                id="ru" 
                name="language" 
                type="radio" 
                value={LOCALE.RU} 
                onChange={handleLanguageChange} 
                className="content-language__child"
                isSelected={account.locale === LOCALE.RU}
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
              value={THEME.LIGHT} 
              onChange={handleThemeChange} 
              className="content-theme__child" 
              isSelected={account.theme === THEME.LIGHT}
            />
            <Input 
              id="dark" 
              labelId="dark" 
              name="theme" 
              type="radio" 
              value={THEME.DARK} 
              onChange={handleThemeChange} 
              className="content-theme__child"
              isSelected={account.theme === THEME.DARK}
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
            <button className="button" onClick={handleResetSettings}>
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
              id="Cancel"
              textId="Cancel"
              onClick={handleClose}
            />
          </div>
        </div>
      );
}

export default ModalSettings;
