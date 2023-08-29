import React, {KeyboardEvent, ChangeEvent, useState, RefObject} from 'react';
import styles from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

export type MyPostsType = {
    posts: PostType[];
    addPost: () => void;
    newPost: string;
    updateNewPost: (newText: string) => void;
};

export const MyPosts: React.FC<MyPostsType> = ({posts, addPost, newPost, updateNewPost,}) => {
    let postElements = posts.map((post) => (
        <Post key={post.id} message={post.message} likeCount={post.likeCount}/>
    ));


    // const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const handleOnAddPost = () => {
        // debugger
        // Todo Используя (newPostElement.current as HTMLInputElement), вы указываете TypeScript рассматривать его newPostElement.current как HTMLInputElement, у которого есть value свойство.
        // let post = newPostElement.current?.value || '';
        // console.log('hi ' + post)

        addPost(); // Clear the textarea after adding the post
        // newPostElement.current!.value = '';

    };

    const handleOnChange = () => {
        // const newValue = (newPostElement.current as HTMLTextAreaElement).value;
        const newValue = newPostElement.current?.value || '';
        console.log(newValue)
        updateNewPost(newValue);
    };

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter behavior (newline insertion)
            handleOnAddPost();      // Call the addPost function when Enter is pressed
        }
    };


    return (
        <section className={styles.myPost}>
            <h2>My Posts</h2>
            <section className={styles.addPost}>
                <div className={styles.addBlock}>
                    <div className={styles.textareaBlock}>
                        <textarea
                            ref={newPostElement}
                            onChange={handleOnChange}
                            onKeyDown={handleOnKeyDown}
                            value={newPost}
                            cols={30}
                            rows={1}
                            placeholder={'Add your post'}
                        />
                    </div>
                    <div className={styles.buttonBlock}>
                        <button onClick={handleOnAddPost}>Add</button>
                    </div>
                </div>
            </section>
            <section className={styles.newPost}>New Posts</section>
            {postElements}
        </section>
    );
};
