import React from 'react';
import dialogStyle from "../Dialogs.module.css";


type MessagePropsType = {
    message: string;
}
export const Message: React.FC<MessagePropsType> = ({message,}) => {
    const handleOnChange = () => {

    }
    return (
        <>
            <div className={dialogStyle.message}>
                {message}
                <span className={dialogStyle.aroundActive}></span>
            </div>
        </>
    )
}