import React from 'react';
import { NavLink } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import Title from '../Title';

import './Registration.scss';

const Registration = () => {
    
    return(
        <div className="gen__holder">
            <div className="gen">
                <div className="gen__info">
                    <Logo src="../../public/assets/images/logo.png" alt="logo"/>
                    <Title textBig="SIGN UP" textSmall="YOUR ACCOUNT"/>
                </div>
                <div className="gen__main">
                    <div className="gen__container">
                        <Input label="Login" type="text" placeholder="Enter your login"/>
                        <Input label="Password" type="password" placeholder="Enter your password"/>
                        <Input label="Repeat password" type="password" placeholder="Confirm your password"/>
                        <div className="gen__buttons">
                            <Button type="button" text="SIGN IN"/>
                        </div>
                        <p className="gen__link">Already have an account?</p>
                        <NavLink to='/auth' className="gen__link">
                            Sign in
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;
