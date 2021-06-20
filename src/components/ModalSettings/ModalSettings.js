import React from 'react';

import "./modalsettings.scss";

function ModalSettings(){
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
                    <label thmlFor="dark">dark</label>
                    <input id="dark" name="theme" type="radio" className="content-theme__child"/> 
                   
            </div>
            <div className="content-reset">
                <span className="content__item-header content-reset__header">Reset settings:</span>
                <input type="checkbox"/>
            </div>
            <div>
                <div className="content__item-header">New login</div>
                <input className="content__input" placeholder="Enter your new login..."/>
            </div>
            <div>
                <div className="content__item-header">New password</div>
                <input className="content__input" placeholder="Enter your new password..."/>
            </div>
            <div>
                <div className="content__item-header">Confirm password</div>
                <input className="content__input" placeholder="Repeat your new password..."/>
            </div>
            <div className="button-box">
                <button className="button">CONFIRM</button>
                <button className="button">Cancel</button>
            </div>
        </div>
        
    )
}

export default ModalSettings;