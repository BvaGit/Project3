import React from 'react';
import { useState} from 'react';

import CustomModal from '../CustomModal';
import ModalSettings from '../ModalSettings/ModalSettings';

import './settings.scss'


function Settings(props) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(prev => !prev);
    
return(
    <div>
        <img onClick={handleClick} className="rooms-header__settings" src="../../../public/assets/images/seting_2.png"/>
        {isOpen && <CustomModal header="Settings" handlecloseModal={handleClick} content={<ModalSettings closeModal={handleClick}/>}/>}
    </div>
    )
}

export default Settings