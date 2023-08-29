import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {RootStateType, store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
