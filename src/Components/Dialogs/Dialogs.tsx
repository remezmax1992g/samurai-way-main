import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props:any) => {
    let path = "/Dialogs/" + props.id;
    return(
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) =>{
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name="Max" id="1"/>
                <DialogItem name="Dima" id="2"/>
                <DialogItem name="Andrey" id="3"/>
                <DialogItem name="Victor" id="4"/>
                <DialogItem name="Sveta" id="5"/>
                <DialogItem name="Artur" id="6"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How is your IT-learning?"/>
                <Message message="How are you?"/>
                <Message message="What are you doing"/>
                <Message message="Bye"/>
                <Message message="What's up"/>
                <Message message="Sound great"/>
            </div>
        </div>
    );
};

export default Dialogs;