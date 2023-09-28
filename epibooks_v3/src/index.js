import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import combineBookStore from "./reducers/bookReducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const reducer = combineReducers({
  bookStore: combineBookStore,
});

const store = configureStore({
  reducer,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="dark:bg-gray-800 bg-gradient-to-br from-blue-300 to-blue-700">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
);
