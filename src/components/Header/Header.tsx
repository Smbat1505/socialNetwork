import React from "react";
import style from "./Header.module.css";
import logoSVG from "./logo/socialHigh.png";
import { NavLink } from "react-router-dom";
import { AuthType } from "components/Header/HeaderContainer";

export const Header: React.FC<AuthType> = (props) => {
  return (
    <header className={style.header}>
      <img src={logoSVG} alt="logo" className={style.appLogo} />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}
      </div>
    </header>
  );
};
