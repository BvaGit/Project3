import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import Title from '../Title';
import validation from '../../constants/validation'
// import { regAuthRequest } from '../../store/users/asyncActions';
import RegistrationInput from './RegistrationInput';

import './Registration.scss';

const Registration = () => {
    // const [redirectAuth, setRedirectAuth] = useState(false);

    // const regUser = () => {
    //     const user = {
    //         login: login,
    //         password: password
    //     }
    //     const redirect = regAuthRequest(user)
    //     setRedirectAuth(redirect);
    // }

    return(
        <div className="gen__holder">
            {/* {redirectAuth && <Redirect to="/" />}  SHOULD REDIRECT WITH HISTORY FROM ROUTER*/} 
            <div className="gen">
                <div className="gen__info">
                    <Logo src="../../public/assets/images/logo.png" alt="logo"/>
                    <Title textBig="SIGN UP" textSmall="YOUR ACCOUNT"/>
                </div>
                <div className="gen__main">
                    <div className="gen__container">
                        <RegistrationInput
                            id="login" 
                            placeholder="Enter your login" 
                            label="Login" 
                        />
                        <RegistrationInput
                            id="password" 
                            placeholder="Enter your password" 
                            label="Password" 
                        />
                        <RegistrationInput
                            id="confirm_password" 
                            placeholder="Confirm your password" 
                            label="Repeat password" 
                        />
                        {/* <div className="gen__buttons" onClick={regUser}>
                            <Button 
                                type="button" 
                                text="SIGN UP" 
                                disabled={!formValid}
                            />
                        </div>   MOVE TO SEPARATED COMPONENT   ( with connect regAuthRequest, disabled - selector when registration.errors has only empty fields) */}
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
