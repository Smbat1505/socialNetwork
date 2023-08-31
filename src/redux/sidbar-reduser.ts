import {ActionType, FriendType, RootStateType} from "./store";


const initialState: FriendType[] = []
const sidebarReducer = (state: FriendType[] = initialState, action: ActionType) => {
    return state
}

export default sidebarReducer;