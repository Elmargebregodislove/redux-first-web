import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import Header from "./header";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import All from "./red/all";
import thunk from "redux-thunk";
const Store = createStore(All,applyMiddleware(thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={Store}>
  <BrowserRouter>
    <Header />
    <App />
  
  </BrowserRouter>
  </Provider>,
  rootElement
);
