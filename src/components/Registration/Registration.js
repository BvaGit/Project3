import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import Title from '../Title';

import './Registration.scss';

const Registration = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('login cant be empty');
    const [passwordError, setPasswordError] = useState('password cant be empty');
    const [repeatPasswordError, setRepeatPasswordError] = useState('password cant be empty');
    const [formValid, setFormValid] = useState(false);

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
        }
    }
    const handleLogin = (e) => {
        setLogin(e.target.value);
        const log = /^[a-zA-z]{1}[a-zA-Z]{3,7}$/;

        if (!log.test(String(e.target.value).toLowerCase())) {
            setLoginError('от 3х символов до 8, запрещен ввод спец. символов, не пустая строка, без пробелов');
        } else {
            setLoginError('');
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        const pass = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,12}$/;

        if (!pass.test(String(e.target.value).toLowerCase())) {
            setPasswordError('от 6 символов до 12, не пустая строка, без пробелов, обязательно с буквой и цифрой');
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

    return(
        <div className="gen__holder">
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
                            onBlur={e => handleBlur(e)}
                            onChange={e => handleLogin(e)}
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
                            onBlur={e => handleBlur(e)}
                            onChange={e => handlePassword(e)}
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
                            onBlur={e => handleBlur(e)}
                            onChange={e => handleRepeatPassword(e)}
                        />
                        {(repeatPasswordDirty && repeatPasswordError) && <div className="inputErr">{repeatPasswordError}</div>}
                        <div className="gen__buttons">
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
