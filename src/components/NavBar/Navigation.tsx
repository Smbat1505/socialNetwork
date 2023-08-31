import React from 'react';
import style from './Navigation.module.css'
import friendStyle from '../Friends/Frends.module.css'
import {NavLink, Route, Routes, useLocation} from 'react-router-dom';
import {Settings} from "../Settings/Settings";
import {Friends} from "../Friends/Friends";
import {FriendType} from "../../redux/store";

type NavigationType = {
    friends: FriendType[];
}
export const Navigation: React.FC<NavigationType> = ({friends, children}) => {
    const location = useLocation();
    // const active: string = style.active
    return (
        <>
            <nav className={style.navigation}>
                <ul>
                    <li className={style.item}>
                        <NavLink to="/" className={location.pathname === "/" ? style.active : ""}>Profile</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/dialogs"
                                 className={location.pathname === "/dialogs" ? style.active : ""}>Message</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/news" className={location.pathname === "/news" ? style.active : ""}>News</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/music"
                                 className={location.pathname === "/music" ? style.active : ""}>Music</NavLink>
                    </li>
                    <Settings/>
                </ul>
                <div className={friendStyle.friends}>
                    {friends.map(friend => (
                        <Friends key={friend.id} name={friend.name}
                                 photo={"https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"}/>
                    ))}
                </div>

            </nav>

        </>
    )
}

