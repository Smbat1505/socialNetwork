import React, {ChangeEvent, useState} from 'react';
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";
import {MyPostContainer} from "./MyPosts/Post/MyPostsContainer";
import store from "../../redux/redux-store";
import {ReduxStoreType} from "../../index";


type ProfileType = {
    store: ReduxStoreType;
}
export const Profile: React.FC<ProfileType> = () => {
    return (
        <main className={styles.main}>
            <ProfileInfo/>
            <MyPostContainer
                store={store}
            />
        </main>

    );
};
