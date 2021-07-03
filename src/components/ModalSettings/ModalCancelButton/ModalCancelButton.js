import React from 'react';

import Button from '../../Button';

const ModalCancelButton = ({ id, textId, closeModal }) => {
    const handleClick = () => {
        closeModal();
    }

    return (
        <Button 
            id={id}
            type="button"
            textId={textId}
            onClick={handleClick}
            disabled={false}
        />
    )
}

export default ModalCancelButton;
