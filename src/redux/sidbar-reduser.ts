import {ActionType} from "./redux-store";
import {v1} from "uuid";
type FriendType = {
    id: string;
    name: string;
}

const initialStateSidebar = {
    sidebar: [
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
    ] as FriendType[]
}

export type InitialStateSidebarType = typeof initialStateSidebar
let state = initialStateSidebar.sidebar

const sidebarReducer = (state: InitialStateSidebarType = initialStateSidebar, action: ActionType): InitialStateSidebarType => {
    return state
}

export default sidebarReducer;