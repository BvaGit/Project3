import React from 'react';

import './Input.scss';

const Input = ({ id, type, name, value, placeholder, minLength, maxLength, onBlur, onChange }) => {

    return (
        <input 
            id={id}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            className="inputs__input"
            minLength={minLength}
            maxLength={maxLength}
            onBlur={onBlur}
            onChange={onChange}
        />
    )
}

export default Input;
