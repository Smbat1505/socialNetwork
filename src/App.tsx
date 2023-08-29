import React, {ChangeEvent} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/NavBar/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";


type AppType = {
    appState: RootStateType;
    addPost: () => void;
    updateNewPost: (newText: string) => void;
}
const App: React.FC<AppType> = ({
                                    appState,
                                    addPost,
                                    updateNewPost
                                }) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation  friends={appState.friends}/>
            <section className={"app-wrapper-content"}>

                <Routes>
                    <Route path={'/'} element={<Profile profilePage={appState.profilePage} addPost={addPost} updateNewPost={updateNewPost}/>}/>
                    <Route path={'/dialogs'}
                           element={<Dialogs state={appState.dialogsPage}/>}/>
                </Routes>
            </section>
        </div>
    );
}

export default App;
