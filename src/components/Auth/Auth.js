import React from "react";
import { NavLink } from "react-router-dom";

import Input from "../Input";
import Button from "../Button";
import Logo from "../Logo";
import Title from "../Title";

import "./Auth.scss";

const Auth = () => {
  return (
    <div className="gen__holder">
      <div className="gen">
        <div className="gen__info">
          <Logo src="../../public/assets/images/logo.png" alt="logo" />
          <Title textBig="SIGN IN" textSmall="YOUR ACCOUNT" />
        </div>
        <div className="gen__main">
          <div className="gen__container">
            <Input label="Login" type="text" placeholder="Enter your login" />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="gen__buttons">
              <Button type="button" text="SIGN IN" />
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
