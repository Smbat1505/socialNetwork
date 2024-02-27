import React from "react";
import "./App.css";
import { Header } from "components/Header/Header";
import { Profile } from "components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "components/Dialogs/message/DialogsContainer";
import NavigationContainer from "./components/NavBar/NavigationContainer";
import UsersContainer from "components/Users/UsersContainer";

type AppType = {};
const App: React.FC<AppType> = ({}) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavigationContainer />
      <section className={"app-wrapper-content"}>
        <Routes>
          <Route path={"/"} element={<Profile />} />
          <Route path={"/dialogs"} element={<DialogsContainer />} />
          <Route path={"/users"} element={<UsersContainer />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
