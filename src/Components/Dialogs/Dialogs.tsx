import React from 'react';
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ProfilePropsType} from "../Profile/Profile";
import {ArrayAppType} from "../../App";

type DialogType = {
    id: number,
    name: string,
}

type MesType = {
    id: number,
    message: string
}

export type DialogsArrayPropsType = {
    dialogData: Array<DialogType>,
    messagesData: Array<MesType>
}

export type DialogsPropsType = {
    stateDialogs: DialogsArrayPropsType
}


const Dialogs = (props: DialogsPropsType) => {


    let dialogElements = props.stateDialogs.dialogData.map(d =><DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.stateDialogs.messagesData.map(m => <Message message={m.message}/>)
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