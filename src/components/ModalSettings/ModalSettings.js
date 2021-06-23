import React from 'react';

import Input from '../Input';

import "./modalsettings.scss";

function ModalSettings(props){
    return(
        <div className="content">
            <div  className="content-language">
                <div id="language" className="content__item-header">Language:</div>
                <label htmlFor="en" >en</label>
                <input id="en" name="language" type="radio" className="content-language__child"/>
                <label htmlFor="ru">ru</label>
                <input id="ru" name="language" type="radio" className="content-language__child"/>
                <label htmlFor="ar">ar</label>
                <input id="ar" name="language" type="radio" className="content-language__child"/>
            </div>
            <div className="content-theme">
                <div id="theme" className="content__item-header">Theme:</div>
                    <label htmlFor="light">light</label>
                    <input id="light" name="theme" type="radio" className="content-theme__child"/>
                    <label htmlFor="dark">dark</label>
                    <input id="dark" name="theme" type="radio" className="content-theme__child"/> 
            </div>
            <div className="content-reset">
                <span className="content__item-header content-reset__header">Notifications:</span>
                <input type="checkbox"/>
            </div>
            <div>
                <button className="button">Reset all settings</button>
            </div>
            <div>
                <Input label="New login" type="text" placeholder="Enter your new login..."/>
            </div>
            <div>
                <Input label="New password" type="text" placeholder="Enter your new password..."/>
            </div>
            <div>
                <Input label="Confirm password" type="text" placeholder="Repeat your new password..."/>
            </div>
            <div className="button-box">
                <button className="button">CONFIRM</button>
                <button className="button" onClick={props.closeModal}>Cancel</button>
            </div>
        </div>
        
    )
}

export default ModalSettings;