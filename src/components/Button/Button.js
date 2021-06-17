import React from 'react';

import './Button.scss';

const Button = (props) => {
    const { type, text, disabled } = props;
    
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
