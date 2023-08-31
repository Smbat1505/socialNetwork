import {ActionType, DialogType, MessagesPageType} from "./store";
import {ChangeEvent} from "react";


const initialState: MessagesPageType = {
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
    newMessageBody: '',
}
const dialogsReducer = (state: MessagesPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.payload.body;
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 8, message: body})
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        payload: {
            body
        }
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

export default dialogsReducer;