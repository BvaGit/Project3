import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo';
import Title from '../Title';

import RegistrationInput from './RegistrationInput';
import RegistrationBtn from "./RegistrationBtn";

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
                        <RegistrationInput
                            id="login" 
                            type="text"
                            title="min 4 max 8, no spases, no empties"
                            placeholder="Enter your login" 
                            label="Login" 
                        />
                        <RegistrationInput
                            id="password" 
                            type="password"
                            title="min 6 max 12, not empty, no spases, include digital"
                            placeholder="Enter your password" 
                            label="Password" 
                        />
                        <RegistrationInput
                            id="confirmPassword" 
                            type="password"
                            title="min 6 max 12, not empty, no spases, include digital"
                            placeholder="Confirm your password" 
                            label="Repeat password" 
                        />
                        <div className="gen__buttons">
                            <RegistrationBtn />
                        </div>
                        <p className="gen__link">Already have an account?</p>
                        <NavLink to='/' className="gen__link">
                            Sign in
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;
