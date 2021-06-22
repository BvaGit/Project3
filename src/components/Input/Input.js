import React from 'react';

import './Input.scss';

const Input = ({ id, label, type, name, value, placeholder, minLength, maxLength, onBlur, onChange }) => {

    return (

        <label className="inputs__label">
            {label}
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
        </label>
    )
}

export default Input;
