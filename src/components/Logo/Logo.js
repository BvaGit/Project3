import React, { Component } from 'react';
import './Logo.scss';

class Logo extends Component {
    render () {
        const { src, alt} = this.props;
        return (
            <img src={src} alt={alt} className="logo"/>
        )
    }
}

export default Logo;
