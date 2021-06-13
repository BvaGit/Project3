import React, { Component } from 'react';
import './Registration.scss';
import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import Title from '../Title';
import { NavLink } from 'react-router-dom';

class Registration extends Component {
    render(){
        return(
            <div className="req__holder">
                <div className="req">
                    <div className="req__info">
                        <Logo src="../../public/assets/images/logo.png" alt="logo"/>
                        <Title textBig="SIGN UP" textSmall="YOUR ACCOUNT"/>
                    </div>
                    <div className="req__main">
                        <div className="req__container">
                            <Input label="Login" type="text" placeholder="Enter your login"/>
                            <Input label="Password" type="password" placeholder="Enter your password"/>
                            <Input label="Repeat password" type="password" placeholder="Confirm your password"/>
                            <div className="req__buttons">
                                <Button type="button" text="SIGN IN"/>
                            </div>
                            <p className="req__link">Already have an account?</p>
                            <NavLink to='/auth' className="req__link">
                                Sign in
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Registration;
