import {v1} from "uuid";

export type PostType = {
    id: number;
    message: string;
    likeCount: number;
}
export type DialogType = {
    id: number;
    name: string;
}
export type MessageType = {
    id: number;
    message: string;
}
export type ProfilePageType = {
    posts: PostType[];
    newPost: string;
}
export type MessagesPageType = {
    messages: MessageType[];
    dialogs: DialogType[];

}
export type FriendType = {
    id: string;
    name: string;
}
export type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: MessagesPageType;
    friends: FriendType[];
}


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: ' Ho ', likeCount: 3},
                {id: 2, message: ' Hi ', likeCount: 4},
                {id: 3, message: ' Hi, who are you? ', likeCount: 23},
                {id: 4, message: ' Hi, I am fine ', likeCount: 50},
                {id: 5, message: ' Hello ', likeCount: 490},
                {id: 6, message: ' Hello Andrey ', likeCount: 40},
                {id: 7, message: ' Hello Igor ', likeCount: 90},
            ],
            newPost: '',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'ho'},
                {id: 2, message: 'hi'},
                {id: 3, message: 'Hi, who are you?'},
                {id: 4, message: 'Hi, I am fine'},
                {id: 5, message: 'Hello oo '},
                {id: 6, message: 'Hello  ppp '},
                {id: 7, message: 'Hello dd'},
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Lena'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Alex'},
                {id: 6, name: 'Oleg'},
                {id: 7, name: 'Vladimir'},
            ],
        },
        friends: [
            {
                id: v1(),
                name: 'Dima',
            },
            {
                id: v1(),
                name: 'Lena',
            },
            {
                id: v1(),
                name: 'Igor',
            },
        ]
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {
        console.log('state change')
    },
    addPost() {
        // debugger
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPost,
            likeCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPost = '';
        this._callSubscriber(this._state);
    },
    updateNewPost(newPostMessage: string) {
        let newPost = {id: 8, message: postMessage, likeCount: 0}
        this._state.profilePage.newPost = newPostMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;  // pattern observer
    }

}

////////////////  test
interface CustomWindow extends Window {
    state: RootStateType;
}

declare var window: CustomWindow;

// Now you can set the state property
window.state = store._state


////////////////// end test
// export const addPost = () => {
//     let newPost = {
//         id: v1(),
//         message: state.profilePage.newPost,
//         likeCount: '0',
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPost = '';
//     rerenderEntireTree(state);
// }


// export const updateNewPost = (newPostMessage: string) => {
//     let newPost = {id: v1(), message: postMessage, likeCount: '0'}
//     state.profilePage.newPost = newPostMessage;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer: (state: AppStateType) => void) => {
//     rerenderEntireTree = observer;  // pattern observer
// }