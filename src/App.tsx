import React, {ChangeEvent} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/NavBar/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {ActionType, StoreType} from "./redux/state";


type AppType = {
    store: StoreType;
    dispatch: (action: ActionType) => void;
}
const App: React.FC<AppType> = ({
                                    store,
                                    dispatch
                                }) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation friends={store.getState().friends}/>
            <section className={"app-wrapper-content"}>

                <Routes>
                    <Route
                        path={'/'}
                        element={
                            <Profile
                                profilePage={store.getState().profilePage}
                                dispatch={dispatch}
                            />}
                    />
                    <Route
                        path={'/dialogs'}
                        element={<Dialogs
                            state={store.getState().dialogsPage}
                        />}
                    />
                </Routes>
            </section>
        </div>
    );
}

export default App;
