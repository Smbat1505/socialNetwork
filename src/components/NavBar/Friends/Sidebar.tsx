import React from 'react';
import s from "./Frends.module.css"

type FriendsType = {
    id?: number;
    name: string;
    photo: string;
}
export const Sidebar: React.FC<FriendsType> = (
    {
        name,
        photo,
        id,
    }) => {
    return (
        <div className={s.friend}>
            <img src={photo} alt={'photo'}/>
            {name}
        </div>

    )
}

