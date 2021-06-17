import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import Title from '../Title';

import './Auth.scss';

const Auth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('login cant be empty');
    const [passwordError, setPasswordError] = useState('password cant be empty');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {

        if (loginError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [loginError, passwordError])

    const handleBlur = (e) => {

        switch(e.target.name) {
            case 'login':
                setLoginDirty(true);
                break;
            case 'password': 
                setPasswordDirty(true);
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
                setPasswordError('Password can\'t be empty')
            }
        } else {
            setPasswordError('');
        }
    }

    return(
        <div className="gen__holder">
            <div className="gen">
                <div className="gen__info">
                    <Logo src="../../public/assets/images/logo.png" alt="logo"/>
                    <Title textBig="SIGN IN" textSmall="YOUR ACCOUNT"/>
                </div>
                <div className="gen__main">
                    <div className="gen__container">
                        <Input 
                            id="authLogin" 
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
                            id="authPassword" 
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
                        <div className="gen__buttons">
                            <Button 
                                type="button" 
                                text="SIGN IN" 
                                disabled={!formValid}
                            />
                        </div>
                        <p className="gen__link">Create new account</p>
                        <NavLink to='/registration' className="gen__link">
                            Sign up
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
