import React from 'react';
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redux/dialogs-reducer";
import {AddMessageReduxForm} from "./AddMessageForm/AddMessageReduxForm";

type DialogLocalType = {
    stateDialog: DialogsPageType
    sendNewMessage: (newMessage: string) => void,
}

const Dialogs = ({stateDialog, sendNewMessage}: DialogLocalType) => {
    //value
    let dialogElements = stateDialog.dialogData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = stateDialog.messagesData.map((m) => <Message key={m.id} message={m.message}/>)
    const addNewMessage = (values:any) => {
        sendNewMessage(values.newMessageBody)
    }
    //JSX
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;