import React from "react";
import "./App.css";
import { Header } from "components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "components/Dialogs/message/DialogsContainer";
import NavigationContainer from "./components/NavBar/NavigationContainer";
import UsersContainer from "components/Users/UsersContainer";
import ProfileContainer from "components/Profile/ProfileContainer";

type AppType = {};
const App: React.FC<AppType> = ({}) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavigationContainer />
      <section className={"app-wrapper-content"}>
        <Routes>
          <Route path={"/dialogs"} element={<DialogsContainer />} />
          <Route path={"/profile/:userId"} element={<ProfileContainer />} />
          <Route path={"/users"} element={<UsersContainer />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
