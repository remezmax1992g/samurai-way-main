import React from 'react';
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;