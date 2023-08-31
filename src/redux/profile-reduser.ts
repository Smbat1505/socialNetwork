import {ActionType, PostType, ProfilePageType, RootStateType} from "./state";

const profileReducer = (state: ProfilePageType, action: ActionType) => {

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