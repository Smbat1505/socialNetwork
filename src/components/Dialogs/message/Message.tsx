import React from 'react';
import dialogStyle from "../Dialogs.module.css";


type MessagePropsType = {
    message: string;
    onChange?: () => void;
}
export const Message: React.FC<MessagePropsType> = ({message, onChange}) => {
    const handleOnChange = () => {

    }
    return (
        <>
            <div className={dialogStyle.message}>
                <textarea onChange={() => {
                }} value={''} name="add message" id="" cols={20} rows={1} placeholder={'type message'}></textarea>
                <button>add</button>
                {message}
                <span className={dialogStyle.aroundActive}></span>
            </div>
        </>
    )
}