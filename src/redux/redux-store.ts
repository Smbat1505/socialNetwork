import { combineReducers, createStore } from "redux";
import profileReducer, { addPostAC, setUserProfile, updateNewPostAC } from "./profile-reduser";
import dialogsReducer, { sendMessageAC, updateNewMessageBodyAC } from "./dialogs-reduser";
import sidebarReducer from "./sidbar-reduser";
import usersReducer, {
  Follow,
  SetCurrentPage,
  SetUsers,
  setUsersTotalCount,
  toggleFollowingInProgress,
  toggleIsFetching,
  UnFollow,
} from "redux/users-reduser";
import authReducer, { setAuthUserData } from "redux/auth-reduser";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;

export type AppStateType = ReturnType<typeof rootReducer>;
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
  | ReturnType<typeof SetCurrentPage>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setAuthUserData>
  | ReturnType<typeof toggleFollowingInProgress>;
