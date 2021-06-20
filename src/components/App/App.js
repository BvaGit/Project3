import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Auth from "../Auth";
import Registration from "../Registration";
import MainPage from "../MainPage";

import Socket from "../Socket";

import "./App.scss";
import { func } from "prop-types";
import { connect } from "react-redux";

function App() {
  return (
    <>
      <button onClick={connect}>Connect</button>
      <Router>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/" component={Auth} />
      </Router>
    </>
  );
}

export default App;
