import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from '../Auth';
import Registration from '../Registration';

const App = () => {
  return (
    <Router>
      <Route exact path='/auth' component={Auth}/>
      <Route exact path='/registration' component={Registration}/>
      <Route path='/' component={Auth}/>
    </Router>
  )
}

export default App;
