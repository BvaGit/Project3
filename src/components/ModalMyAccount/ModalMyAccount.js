import React from 'react';

import './modalMyAccount.scss';
import '../RoomsHeader/roomsHeader.scss'
import '../ModalSettings/modalsettings.scss'

function ModalMyAccount(props){
    return (
        <div className="my-account">
            <div className="my-account__avatar">
                <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
            </div>
            <div className="my-account__info">
                <div className="my-account__infochild">
                    <div>First name</div>
                    <input className="my-account__input" placeholder="Enter your first name..."/>
                </div>
                <div className="my-account__infochild">
                    <div>Last name</div>
                    <input className="my-account__input" placeholder="Enter your last name..."/>
                </div>
            </div>
            <div className="my-account__info">
                <div className="my-account__infochild">
                    <div>Age</div>
                    <input className="my-account__input" placeholder="Enter your age..."/>
                </div>
                <div className="my-account__infochild">
                    <div>City</div>
                    <input className="my-account__input" placeholder="Enter your city..."/>
                </div>
            </div>
            <div className="my-account__info">
                <div className="my-account__infochild">
                    <div>Company name</div>
                    <input className="my-account__input" placeholder="Enter your company name..."/>
                </div>
                <div className="my-account__infochild">
                    <div>Hobby</div>
                    <input className="my-account__input" placeholder="Enter your hobby..."/>
                </div>
            </div>
            <div className="button-box">
                <button className="button">CONFIRM</button>
                <button className="button" onClick={props.handlecloseModal}>Cancel</button>
            </div>
        </div>
        
    )
}

export default ModalMyAccount;