import React from 'react';
import './Input.scss';

const Input = (props) => {
    const { label, type, placeholder } = props;
        return (
            <label className="inputs__label">{label}
                <input 
                    type={type}
                    placeholder={placeholder}
                    className="inputs__input"
                />
            </label>
        )
}

export default Input;
