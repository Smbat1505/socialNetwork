import React, {ChangeEvent} from 'react';
import {Dialogs} from "../Dialogs";
import {ReduxStoreType} from "../../../index";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reduser";


type DialogsContainerType = {
    store: ReduxStoreType; // Use the new type here
}
export const DialogsContainer: React.FC<DialogsContainerType> = ({
                                                            store
                                                        }) => {
    let state = store.getState().dialogsPage;
    const onSendMessageOnClick = () => {
        store.dispatch(sendMessageAC())
    }

    function onNewMessageOnChange(body: string) {
        store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageOnChange}
            sendMessage={onSendMessageOnClick}
            dialogsPage={state}
        />
    )
}