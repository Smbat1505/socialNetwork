import React, {ChangeEvent, useState} from 'react';
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePageType;
    addPost: () => void;
    updateNewPost: (newText: string) => void;
}
export const Profile: React.FC<ProfileType> = ({profilePage, addPost, updateNewPost}) => {

    return (
        <main className={styles.main}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts} addPost={addPost} newPost={profilePage.newPost} updateNewPost={updateNewPost}/>
        </main>

    );
};
