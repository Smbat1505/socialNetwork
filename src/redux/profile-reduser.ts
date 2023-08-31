import {ActionType, PostType, ProfilePageType, RootStateType} from "./store";


const initialState: ProfilePageType = {
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
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    // debugger
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPost,
                likeCount: 0,
            }
            state.posts.push(newPost)
            state.newPost = '';
            return state;
        }
        case 'UPDATE-NEW-POST': {
            state.newPost = action.payload.newPostMessage;
            return state;
        }

        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostAC = (newPostMessage: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        payload: {
            newPostMessage
        }

    } as const
}


export default profileReducer;