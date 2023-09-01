import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, updateNewPostAC} from "./profile-reduser";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reduser";
import sidebarReducer from "./sidbar-reduser";

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>;


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;