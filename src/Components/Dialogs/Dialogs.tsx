import React from 'react';
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, RootStateType} from "../../Redux/state";

type DialogsPropsType = {
    stateDialog: DialogsPageType
}


const Dialogs = (props: DialogsPropsType) => {


    let dialogElements = props.stateDialog.dialogData.map(d =><DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.stateDialog.messagesData.map(m => <Message message={m.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;