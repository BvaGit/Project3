import React from 'react';

import './Button.scss';

const Button = ({ type, text, disabled, onClick }) => {
    
    return (
        <button 
            type={type} 
            onClick={onClick}
            className="button"
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button;
