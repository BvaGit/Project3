import React from 'react';
import './Button.scss';

const Button = (props) => {
    const {type, text} = props;
    return (
        <button type={type} className="button">
            {text}
        </button>
    )
}

export default Button;
