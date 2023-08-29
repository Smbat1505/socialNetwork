import React from 'react';
import dialogStyle from './Dialogs.module.css';
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message"
import {MessagesPageType} from "../../redux/state";


type DialogsType = {
    state: MessagesPageType;
}
export const Dialogs: React.FC<DialogsType> = ({
                                                   state,
                                               }) => {

    let dialogElements = state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)

    let messagesElements = state.messages.map(message => <Message message={message.message}/>)
    return (
        <section className={dialogStyle.dialogs}>
            <div className={dialogStyle.dialogsItem}>

                {dialogElements}
            </div>
            <div className={dialogStyle.messages}>
                {messagesElements}
            </div>
        </section>
    )
}