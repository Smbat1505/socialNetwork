import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/NavBar/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/message/DialogsContainer";
import NavigationContainer from "./components/NavBar/NavigationContainer";


type AppType = {
}
const App: React.FC<AppType> = ({
                                }) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavigationContainer />
            <section className={"app-wrapper-content"}>

                <Routes>
                    <Route
                        path={'/'}
                        element={
                            <Profile/>}
                    />
                    <Route
                        path={'/dialogs'}
                        element={
                            <DialogsContainer/>}
                    />
                </Routes>
            </section>
        </div>
    );
}

export default App;
