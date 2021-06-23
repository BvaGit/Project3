import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import Title from '../Title';
import validation from '../constants/validation'
import { regAuthRequest } from '../../store/users/asyncActions';

import './Registration.scss';

const Registration = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('Login can\'t be empty');
    const [passwordError, setPasswordError] = useState('Password can\'t be empty');
    const [repeatPasswordError, setRepeatPasswordError] = useState('password cant be empty');
    const [formValid, setFormValid] = useState(false);
    const {loginValidation, passwordValidation} = validation;

    const [redirectAuth, setRedirectAuth] = useState(false);

    useEffect(() => {

        if (loginError || passwordError || repeatPasswordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [loginError, passwordError, repeatPasswordError])

    const handleBlur = (e) => {

        switch(e.target.name) {
            case 'login':
                setLoginDirty(true);
                break;
            case 'password': 
                setPasswordDirty(true);
                break;
            case 'repeatPassword': 
                setRepeatPasswordDirty(true);
                break;
            default:
                console.error('error');
        }
    }
    const handleLogin = (e) => {
        setLogin(e.target.value);

        if (!loginValidation.test(String(e.target.value).toLowerCase())) {
            setLoginError('min 3 max 8, no spases, no empties');
        } else {
            setLoginError('');
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);

        if (!passwordValidation.test(String(e.target.value).toLowerCase())) {
            setPasswordError('min 6 max 12, not empty, no spases, include digital');
            if (!e.target.value) {
                setPasswordError('password cant be empty')
            }
        } else {
            setPasswordError('');
        }
    }
    const handleRepeatPassword = () => {

        if (regRepeatPassword.value !== regPassword.value) {
            setRepeatPasswordError('passwords are not equal')
        } else {
            setRepeatPasswordError('');
        }
    }

    const regUser = () => {
        const user = {
            login: login,
            password: password
        }
        const redirect = regAuthRequest(user)
        setRedirectAuth(redirect);
    }

    return(
        <div className="gen__holder">
            {redirectAuth ? <Redirect to="/" /> : null}
            <div className="gen">
                <div className="gen__info">
                    <Logo src="../../public/assets/images/logo.png" alt="logo"/>
                    <Title textBig="SIGN UP" textSmall="YOUR ACCOUNT"/>
                </div>
                <div className="gen__main">
                    <div className="gen__container">
                        <Input 
                            id="regLogin" 
                            label="Login" 
                            type="text" 
                            name="login"
                            value={login}
                            placeholder="Enter your login" 
                            minLength="1" 
                            maxLength="30" 
                            onBlur={handleBlur}
                            onChange={handleLogin}
                        />
                        {(loginDirty && loginError) && <div className="inputErr">{loginError}</div>}
                        <Input 
                            id="regPassword" 
                            label="Password" 
                            type="password" 
                            name="password"
                            value={password}
                            placeholder="Enter your password" 
                            minLength="1" 
                            maxLength="30" 
                            onBlur={handleBlur}
                            onChange={handlePassword}
                        />
                        {(passwordDirty && passwordError) && <div className="inputErr">{passwordError}</div>}
                        <Input 
                            id="regRepeatPassword" 
                            label="Repeat password" 
                            type="password" 
                            name="repeatPassword"
                            placeholder="Confirm your password" 
                            minLength="1" 
                            maxLength="30" 
                            onBlur={handleBlur}
                            onChange={handleRepeatPassword}
                        />
                        {(repeatPasswordDirty && repeatPasswordError) && <div className="inputErr">{repeatPasswordError}</div>}
                        <div className="gen__buttons" onClick={regUser}>
                            <Button 
                                type="button" 
                                text="SIGN UP" 
                                disabled={!formValid}
                            />
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
