import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostAC, updateNewPostAC} from "../../../../redux/profile-reduser";
import {ActionType, PostType} from "../../../../redux/store";
import {ReduxStoreType} from "../../../../index";

export type MyPostContainerType = {
    store: ReduxStoreType;
};

export const MyPostContainer: React.FC<MyPostContainerType> = (
    {
        store
    }
) => {
const state= store.getState();

    const handleOnAddPost = () => {
        store.dispatch(addPostAC())
    };

    const handleOnChange = (text: string) => {
        store.dispatch(updateNewPostAC(text))
    };

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter behavior (newline insertion)
            handleOnAddPost();      // Call the addPost function when Enter is pressed
        }
    };


    return (
        <MyPosts updateNewPostText={handleOnChange} addPost={handleOnAddPost} posts={state.profilePage.posts} newPost={state.profilePage.newPost}/>
    );
};
