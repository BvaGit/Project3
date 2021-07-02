import React from 'react';

import Button from '../../Button';

const ModalSettingsButton = ({ id, textId, changeLogin, closeModal, isError }) => {
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
            disabled={!isError}
        />
    )
}

export default ModalSettingsButton;
