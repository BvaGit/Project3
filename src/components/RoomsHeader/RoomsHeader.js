import React from 'react';
import { useState} from 'react';

import CustomModal from '../CustomModal';
import ModalMyAccount from '../ModalMyAccount/ModalMyAccount';
import Settings from '../Settings';

import './roomsHeader.scss'



function RoomsHeader(props) {

    const [show, setShowModal] = useState(false);
    const handleClick = () => {setShowModal(show == false ? true : false)}

    return(

   
    <div className="rooms-header">
        <div className="rooms-header__usermenu">
            <div className="rooms-header__userinfo">
                <img className="rooms-header__avatar" src="../../../public/assets/images/1-36-1024x1024.jpg"/>
                <div className="rooms-header__userName" onClick={handleClick}>Valera</div>
                {show==true ? <CustomModal header="My Account" content={<ModalMyAccount handlecloseModal={handleClick}/>} handlecloseModal={handleClick}/> : null}
            </div>
            <div className="rooms-header__settingsmenu">
                <Settings className="rooms-header__settings"/>
                <img className="rooms-header__logout" src="../../../public/assets/images/logout.png"/>
            </div>
        </div>
        <div className="rooms-header__search">
            <input className="rooms-header__input" placeholder="&#128269; search ..."/>
        </div>
    </div>
     )
}

export default RoomsHeader