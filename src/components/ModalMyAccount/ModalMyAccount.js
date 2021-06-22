import React from 'react';

import Input from '../Input'

import './modalMyAccount.scss';
import '../RoomsHeader/roomsHeader.scss'

function ModalMyAccount(props){
    return (
        <div className="my-account">
            <div className="my-account__avatar">
                <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
            </div>
            <div className="my-account__info">
                <div className="my-account__info1">
                    <Input label="First name" type="text" placeholder="Enter your first name..."/> 
                </div>
                <div className="my-account__info1">
                    <Input label="Last name" type="text" placeholder="Enter your last name..."/>
                </div>
            </div>
            <div className="my-account__info">
                <div className="my-account__info1">
                    <Input label="Age" type="number" placeholder="Enter your age..."/>
                </div>
                <div className="my-account__info1">
                    <Input label="City" type="text" placeholder="Enter your city..."/>
                </div>
            </div>
            <div className="my-account__info">
                <div className="my-account__info1">
                    <Input label="Company name" type="number" placeholder="Enter your company name..."/>
                </div>
                <div className="my-account__info1">
                    <Input label="Hobby" type="text" placeholder="Enter your hobby..."/>
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