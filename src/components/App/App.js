import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { func } from "prop-types";
import { IntlProvider } from "react-intl";

import Auth from "../Auth";
import Registration from "../Registration";
import MainPage from "../MainPage";
import message from "../constants/localization";

import "./App.scss";

const App = ({languageValue: langValue}) => {

  return (
    <IntlProvider locale={langValue} messages={message[langValue]} defaultLocale='en'>
      <Router>
        <Route exact path='/main' component={MainPage}/>
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/' component={Auth}/>
      </Router>
    </IntlProvider>
  )
}

export default App;
