import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

const reducer = combineReducers({

})

const store = configureStore({
    reducer
})

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
