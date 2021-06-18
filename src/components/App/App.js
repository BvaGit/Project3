import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Auth from '../Auth';
import Registration from '../Registration';
import MainPage from "../MainPage";

import "./App.scss";

const App = () => {

  return (
    <Router>
      <Route exact path='/main' component={MainPage}/>
      <Route exact path='/registration' component={Registration}/>
      <Route exact path='/' component={Auth}/>
    </Router>
  )
}

export default App;
