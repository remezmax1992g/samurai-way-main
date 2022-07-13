import React from 'react';
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


const Message = (props: any) => {
    return (
        <div className={classes.message}>
            <div>{props.message}</div>
            <textarea></textarea>
            <button>Send</button>
        </div>
    )
}

export default Message;