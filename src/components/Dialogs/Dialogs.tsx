import React, {ChangeEvent} from 'react';
import dialogStyle from './Dialogs.module.css';
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message"
import {sendMessageAC,updateNewMessageBodyAC} from "../../redux/dialogs-reduser";
import {StoreType} from "../../redux/state";

type DialogsType = {
    store: StoreType;
}
export const Dialogs: React.FC<DialogsType> = ({
                                                   store
                                               }) => {
    let state = store.getState().dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)

    let messagesElements = state.messages.map(message => <Message message={message.message}/>)

    let newMessageBody = state.newMessageBody

    const onSendMessageOnClick = () => {
        store.dispatch(sendMessageAC())
    }

    function onNewMessageOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
        let body = e.currentTarget.value;
        store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <section className={dialogStyle.dialogs}>
            <div className={dialogStyle.dialogsItem}>

                {dialogElements}
            </div>
            <div className={dialogStyle.messages}>

                {messagesElements}
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageOnChange}
                            placeholder={'Enter your message'}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageOnClick}>add</button>
                    </div>
                </div>

            </div>
        </section>
    )
}