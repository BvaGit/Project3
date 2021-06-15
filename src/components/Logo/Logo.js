import React from 'react';
import './Logo.scss';

const Logo = (props) => {
    const { src, alt} = props;
        return (
            <img src={src} alt={alt} className="logo"/>
        )
}

export default Logo;
