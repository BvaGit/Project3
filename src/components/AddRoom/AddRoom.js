import React from 'react';
import { useState} from 'react';

import CustomModal from '../CustomModal';
import ModalCreateChat from '../ModalCreateChat';


import './addroom.scss';

function AddRoom() {
    const [show, setShowModal] = useState(false);
    const handleClick = () => {setShowModal(show == false ? true : false)}
    
return(
    <div>
        <div className="add-room" onClick={handleClick}>
            +
        </div>
        {show==true ? <CustomModal header="Create Chat" content={<ModalCreateChat handlecloseModal={handleClick}/>} handlecloseModal={handleClick}/> : null}
    </div>
    )
}

export default AddRoom;