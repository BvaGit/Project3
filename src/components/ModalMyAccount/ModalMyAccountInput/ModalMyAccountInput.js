import React from 'react';

import Input from '../../Input'

const ModalMyAccountInput = ({value, id, label, placeholder, changeMyAccountField, title}) => {

    const handleChange = (e) => {
        changeMyAccountField({[ id ]: e.target.value})
    }

    return (
        <>
            <Input 
                labelId={label}
                type="text"
                name={id}
                titleId={title}
                placeholderId={placeholder}
                value={value}
                onChange={handleChange}
            />
        </>
    )

}

export default ModalMyAccountInput;
