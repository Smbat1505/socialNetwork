import {ActionType} from "./redux-store";

export type DialogType = {
    id: number;
    name: string;
}
export type MessageType = {
    id: number;
    message: string;
}


const initialStateDialogsPage = {
    messages: [
        {id: 1, message: 'ho'},
        {id: 2, message: 'hi'},
        {id: 3, message: 'Hi, who are you?'},
        {id: 4, message: 'Hi, I am fine'},
        {id: 5, message: 'Hello oo '},
        {id: 6, message: 'Hello  ppp '},
        {id: 7, message: 'Hello dd'},
    ] as MessageType[],
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Igor'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Oleg'},
        {id: 7, name: 'Vladimir'},
    ] as DialogType[],
    newMessageBody: '' as string,
}

export type initialStateDialogsPageType = typeof initialStateDialogsPage;

const dialogsReducer = (state: initialStateDialogsPageType = initialStateDialogsPage, action: ActionType): initialStateDialogsPageType => {
    let stateCopy;
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {...state, newMessageBody: action.payload.body}

        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [
                    ...state.messages,
                    {id: 8, message: body}
                ]
            };
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