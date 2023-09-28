import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import combineBookStore from "./reducers/bookReducers";
import combineSearch from "./reducers/searchReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const reducer = combineReducers({
  bookStore: combineBookStore,
  searchZone: combineSearch,
});

const store = configureStore({
  reducer,
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="bg-white dark:bg-gray-800">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
);
