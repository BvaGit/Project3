import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";

import rootReducer from "/src/store/rootReducer.js";
import App from "/src/components/App";
import history from "./helpers/history";

import 'react-toastify/dist/ReactToastify.css';

let devTools = (f) => f;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
  rootReducer(history),
  {},
  compose(applyMiddleware(thunk), devTools)
);

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
      <BrowserRouter>
          <ConnectedRouter history={history}>
              <App />
          </ConnectedRouter>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
