import React from 'react';

import Button from '../../Button';

const ModalSettingsSaveButton = ({ id, textId, changeLogin, closeModal }) => {
    const handleClick = () => {
        if (id === 'Save') {
            changeLogin();
        }
        closeModal();
    }

    return (
        <Button 
            id={id}
            type="button"
            textId={textId}
            onClick={handleClick}
        />
    )
}

export default ModalSettingsSaveButton;
