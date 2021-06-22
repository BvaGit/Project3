import React from 'react';
import { useState} from 'react';

import CustomModal from '../CustomModal';
import ModalCreateChat from '../ModalCreateChat';


import './addroom.scss';

function AddRoom() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(prev => !prev);
    
return(
    <div>
        <div className="add-room" onClick={handleClick}>
            +
        </div>
        {isOpen && <CustomModal header="Create Chat" content={<ModalCreateChat handlecloseModal={handleClick}/>} handlecloseModal={handleClick}/>}
    </div>
    )
}

export default AddRoom;