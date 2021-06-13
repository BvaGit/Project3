import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render () {
        const {type, text} = this.props;
        return (
            <button type={type} className="button">
                {text}
            </button>
        )
    }
}
export default Button;
