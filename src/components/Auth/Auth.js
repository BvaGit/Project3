import React, { Component } from 'react';
import './Auth.scss';
import Input from '../Input';
import Button from '../Button';
import { NavLink } from 'react-router-dom';

class Auth extends Component {
    render(){
        return(
            <div className="auth">
                <div className="auth__header"></div>
                    <div className="auth__main">
                        <div className="container">
                            <h1 className="auth__h">Sign In</h1>
                            <Input label="Login" type="text" placeholder="Enter your login..."/>
                            <Input label="Password" type="password" placeholder="Enter your password..."/>
                            <div className="auth__buttons">
                                <Button type="submit" text="Submit"/>
                                <Button type="button" text="Cancel"/>
                            </div>
                            <NavLink to='/registration'>
                                Sign up
                            </NavLink>
                        </div>
                    </div>
                <div className="auth__footer"></div>
            </div>
        )
    }
}
export default Auth;
