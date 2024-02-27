import React, { ChangeEvent } from "react";
import dialogStyle from "./Dialogs.module.css";
import { Dialog } from "./dialog/Dialog";
import { Message } from "./message/Message";
import { DialogsPropsType } from "./message/DialogsContainer";

// type DialogsType = {
//     updateNewMessageBody: (body: string) => void;
//     sendMessage: () => void;
//     dialogsPage:  initialStateDialogsPageType;
// }

// Todo в место DialogsType типа добавляем DialogsPropsType из DialogsContainer
export const Dialogs: React.FC<DialogsPropsType> = ({
  updateNewMessageBody,
  sendMessage,
  dialogsPage,
}) => {
  let state = dialogsPage;

  let dialogElements = state.dialogs.map((dialog) => (
    <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  const onSendMessageOnClick = () => {
    sendMessage();
  };

  function onNewMessageOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    let body = e.currentTarget.value;
    updateNewMessageBody(body);
  }

  return (
    <section className={dialogStyle.dialogs}>
      <div className={dialogStyle.dialogsItem}>{dialogElements}</div>
      <div className={dialogStyle.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageOnChange}
              placeholder={"Enter your message"}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageOnClick}>send</button>
          </div>
        </div>
      </div>
    </section>
  );
};
