import React, {ChangeEvent} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/NavBar/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {ActionType, RootStateType, StoreType} from "./redux/store";
import {ReduxStoreType} from "./index";
import {DialogsContainer} from "./components/Dialogs/message/DialogsContainer";


type AppType = {
    store: ReduxStoreType; // Use the new type here
    state: RootStateType
}
const App: React.FC<AppType> = ({
                                    store,
                                    state
                                }) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation friends={store.getState().sidebar}/>
            <section className={"app-wrapper-content"}>

                <Routes>
                    <Route
                        path={'/'}
                        element={
                            <Profile
                                store={store}
                            />}
                    />
                    <Route
                        path={'/dialogs'}
                        element={
                            <DialogsContainer store={store}/>}
                    />
                </Routes>
            </section>
        </div>
    );
}

export default App;
