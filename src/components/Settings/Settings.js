import React from 'react';
import { useState, useEffect } from 'react';

import { DEFAULT_LOCALE } from '../../constants/locale';
import { DEFAULT_THEME, THEME } from '../../constants/theme';
import CustomModal from '../CustomModal';
import ModalSettings from '../ModalSettings';

import './settings.scss'

function Settings(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    const handleTheme = (selectedTheme) => {
        if (selectedTheme === THEME.LIGHT) {
            document.getElementById('root').classList.remove('theme-dark');
            document.getElementById('portal').classList.remove('theme-dark');
        } else {
            document.getElementById('root').classList.add('theme-dark');
            document.getElementById('portal').classList.add('theme-dark');
        }
    };

    useEffect(() => {
        const { account, handleLanguage, changeAccountField } = props;

        if (!account.locale) {
            changeAccountField({ locale: DEFAULT_LOCALE });
        }
        if (!account.theme) {
            changeAccountField({ theme: DEFAULT_THEME });
        }
        handleLanguage(account.locale ? account.locale : DEFAULT_LOCALE);
        handleTheme(account.theme ? account.theme : DEFAULT_THEME);
    }, [props.account]);
    
    return(
        <div>
            <img onClick={handleClick} className="rooms-header__settings" src="../../../public/assets/images/seting_2.png"/>
            {
                isOpen && 
                <CustomModal 
                    header="Settings" 
                    handlecloseModal={handleClick}
                    content={
                        <ModalSettings 
                            closeModal={handleClick} 
                            handleLanguage={props.handleLanguage}
                            handleTheme={handleTheme}
                            languageValue={props.languageValue}
                            changeAccountField={props.changeAccountField}
                            updateAccount={props.updateAccount}
                            account={props.account}
                        />
                    }    
                />
            }
        </div>
    )
}

export default Settings
