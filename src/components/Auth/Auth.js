import React, { Component } from 'react';
import './Auth.scss';
import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import Title from '../Title';
import { NavLink } from 'react-router-dom';

class Auth extends Component {
    render(){
        return(
            <div className="auth__holder">
                <div className="auth">
                    <div className="auth__info">
                        <Logo src="../../public/assets/images/logo.png" alt="logo"/>
                        <Title textBig="SIGN IN" textSmall="YOUR ACCOUNT"/>
                    </div>
                    <div className="auth__main">
                        <div className="auth__container">
                            <Input label="Login" type="text" placeholder="Enter your login..."/>
                            <Input label="Password" type="password" placeholder="Enter your password..."/>
                            <div className="auth__buttons">
                                <Button type="button" text="SIGN IN"/>
                            </div>
                            <NavLink to='/registration' className="auth__link">
                                Sign up
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Auth;
