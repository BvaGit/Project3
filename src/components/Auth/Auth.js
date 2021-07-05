import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Logo";
import Title from "../Title";
import AuthInput from "./AuthInput";
import AuthBtn from "./AuthBtn";

import "./Auth.scss";

const Auth = () => {
  return (
    <div className="gen__holder">
      <div className="gen">
        <div className="gen__info">
          <Logo src="/assets/images/logo.png" alt="logo" />
          <Title textBig="SIGN IN" textSmall="YOUR ACCOUNT" />
        </div>
        <div className="gen__main">
          <div className="gen__container">
            <AuthInput
              id="login"
              type="text"
              label="Login"
              title="Enter your login"
              placeholder="Enter your login"
            />
            <AuthInput
              id="password"
              type="password"
              label="Password"
              title="Enter your password"
              placeholder="Enter your password"
            />
            <div className="gen__buttons">
              <AuthBtn />
            </div>
            <p className="gen__link">Create new account</p>
            <NavLink to="/registration" className="gen__link">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Auth;
