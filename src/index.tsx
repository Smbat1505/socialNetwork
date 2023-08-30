import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {RootStateType, store, StoreType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let subscriberCallback = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

subscriberCallback(store.getState())
store.subscribe(subscriberCallback)
