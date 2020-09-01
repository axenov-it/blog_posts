import React from "react";
import ReactDOM from "react-dom";
import mainReducer from "./system/mainReducer";

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import App from "./components/App";
import "./index.css";

const store = createStore(mainReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
