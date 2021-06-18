import React from 'react';

import './Button.scss';

const Button = ({ type, text, disabled }) => {
    
    return (
        <button 
            type={type} 
            className="button"
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button;
