import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import Title from '../Title';
import validation from '../../constants/validation'

import { authUserRequest } from '../../store/users/asyncActions';

import './Auth.scss';

const Auth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('Login can\'t be empty');
    const [passwordError, setPasswordError] = useState('Password can\'t be empty');
    const [formValid, setFormValid] = useState(false);
    const {loginValidation, passwordValidation} = validation;

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.usersReducer.isAuth);

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
                setPasswordError('Password can\'t be empty')
            }
        } else {
            setPasswordError('');
        }
    }

    const handleAuth = () => {
        const user = {
            login: login,
            password: password
        }
        dispatch(authUserRequest(user))
    }

    return(
        <div className="gen__holder">
            {isAuth && <Redirect to="/main"/>}
            <div className="gen">
                <div className="gen__info">
                    <Logo src="../../public/assets/images/logo.png" alt="logo"/>
                    <Title textBig="SIGN IN" textSmall="YOUR ACCOUNT"/>
                </div>
                <div className="gen__main">
                    <div className="gen__container">
                        <label className="inputs__label">Login
                            <Input 
                                id="authLogin" 
                                type="text" 
                                name="login"
                                value={login}
                                placeholder="Enter your login" 
                                minLength="1" 
                                maxLength="30"
                                onBlur={handleBlur}
                                onChange={handleLogin}
                            />   
                        </label>
                        {(loginDirty && loginError) && <div className="inputErr">{loginError}</div>}
                        <label className="inputs__label">Password
                            <Input 
                                id="authPassword" 
                                type="password" 
                                name="password"
                                value={password}
                                placeholder="Enter your password" 
                                minLength="1" 
                                maxLength="30"
                                onBlur={handleBlur}
                                onChange={handlePassword}
                            />
                        </label>
                        {(passwordDirty && passwordError) && <div className="inputErr">{passwordError}</div>}
                        <div className="gen__buttons" onClick={handleAuth}>
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
    );
};

export default Auth;
