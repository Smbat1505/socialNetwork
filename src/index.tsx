import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {ActionType, RootStateType} from "./redux/store";
import { Store } from 'redux'; // Import the Store type from Redux

export type ReduxStoreType = Store<RootStateType, ActionType>; // Replace RootStateType and ActionType with your actual types
let subscriberCallback = (state: RootStateType) => {
    // debugger
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

subscriberCallback(store.getState())
store.subscribe(() => {
    let state = store.getState()
    subscriberCallback(state)
})
