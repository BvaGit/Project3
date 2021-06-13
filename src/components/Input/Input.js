import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
    render () {
        const { label, type, placeholder } = this.props;
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
}
export default Input;