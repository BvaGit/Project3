import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./store/rootReducer";
import App from "./components/App";

let devTools = (f) => f;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk), devTools)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
