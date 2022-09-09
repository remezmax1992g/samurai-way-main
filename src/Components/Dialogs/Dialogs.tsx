import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redux/dialogs-reducer";

type DialogLocalType ={
    stateDialog:DialogsPageType
    sendNewMessage: () => void,
    updateMessageTextChange: (newMessageText: string) => void
}

const Dialogs = (props: DialogLocalType) => {
    //value
    let dialogElements = props.stateDialog.dialogData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = props.stateDialog.messagesData.map((m) => <Message key={m.id} message={m.message}/>)
    //function
    const sendNewMessageClick = () => {
        props.sendNewMessage()
    }
    const updateMessageTextChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = event.currentTarget.value
        props.updateMessageTextChange(newMessageText)
    }
    //JSX
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div><textarea value={props.stateDialog.newMessageText} onChange={updateMessageTextChangeHandler}
                               placeholder={"enter your message"}></textarea></div>
                <div>
                    <button onClick={sendNewMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;