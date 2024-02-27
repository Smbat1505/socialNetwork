import { combineReducers, createStore } from "redux";
import profileReducer, { addPostAC, updateNewPostAC } from "./profile-reduser";
import dialogsReducer, { sendMessageAC, updateNewMessageBodyAC } from "./dialogs-reduser";
import sidebarReducer from "./sidbar-reduser";
import usersReducer, {
  Follow,
  SetCurrentPage,
  SetUsers,
  setUsersTotalCount,
  toggleIsFetching,
  UnFollow,
} from "redux/users-reduser";

export type ActionType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostAC>
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof Follow>
  | ReturnType<typeof UnFollow>
  | ReturnType<typeof SetUsers>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof SetCurrentPage>;

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
