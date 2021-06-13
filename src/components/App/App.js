import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from '../Auth';
import Registration from '../Registration';

function App () {
  return (
    <Router>
      <Route path='/auth' component={Auth}/>
      <Route path='/registration' component={Registration}/>
      {/* <Route path='/main' component={Main}/> */}
    </Router>
  )
}

export default App;
