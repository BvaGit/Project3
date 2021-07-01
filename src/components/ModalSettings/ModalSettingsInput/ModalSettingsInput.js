import React from 'react';

import Input from '../../Input';

const ModalSettingsInput = ({ id, name, labelId, type, placeholderId, changeInput }) => {

    const handleChange = (e) => {
        changeInput({ [id]:e.target.value })  
    }

    return(
        <Input 
            id={id} 
            name={name}
            labelId={labelId} 
            type={type} 
            placeholderId={placeholderId} 
            onChange={handleChange}
        />
    )
}

export default ModalSettingsInput;