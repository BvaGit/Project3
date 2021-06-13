import React, { Component } from 'react';
import './Registration.scss';
import Input from '../Input';
import Button from '../Button';
import { NavLink } from 'react-router-dom';

class Registration extends Component {
    render(){
        return(
            <div className="reg">
                <div className="reg__header"></div>
                    <div className="reg__main">
                        <div className="container">
                            <h1 className="reg__h">Sign Up</h1>
                            <Input label="Login" type="text" placeholder="Enter your login..."/>
                            <Input label="Password" type="password" placeholder="Enter your password..."/>
                            <Input label="Repeat password" type="password" placeholder="Repeat your password..."/>
                            <div className="reg__buttons">
                                <Button type="submit" text="Submit"/>
                                <Button type="button" text="Cancel"/>
                            </div>
                            <NavLink to='/auth'>
                                Sign in
                            </NavLink>
                        </div>
                    </div>
                <div className="reg__footer"></div>
            </div>
        )
    }
}
export default Registration;
