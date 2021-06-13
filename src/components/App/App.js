import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from '../Auth';
import Registration from '../Registration';

function App () {
  return (
    <Router>
      <Route exact path='/auth' component={Auth}/>
      <Route exact path='/registration' component={Registration}/>
      <Route exact path='/' component={Auth}/>
      {/* <Route path='/main' component={Main}/> */}
    </Router>
  )
}

export default App;
