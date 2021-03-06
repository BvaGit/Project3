import React from "react";
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from "react-intl";

import Auth from "../Auth";
import Registration from "../Registration";
import MainPage from "../MainPage";
import message from "../constants/localization";

import "./App.scss";

const App = ({languageValue: langValue}) => {
  return (
    <IntlProvider locale={langValue} messages={message[langValue]} >
      <Switch>
         <Route path='/main' component={MainPage}/>
         <Route path='/registration' component={Registration}/>
         <Route exact path='/' component={Auth}/>
     </Switch>
    </IntlProvider>
  )
}

export default App;
