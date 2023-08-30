import React, {ChangeEvent, useState} from 'react';
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePageType;
    dispatch: (action: ActionType) => void;
}
export const Profile: React.FC<ProfileType> = (
    {
        profilePage,
        dispatch
    }
) => {

    return (
        <main className={styles.main}>
            <ProfileInfo/>
            <MyPosts
                posts={profilePage.posts}
                newPost={profilePage.newPost}
                dispatch={dispatch}
            />
        </main>

    );
};
