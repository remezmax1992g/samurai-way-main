import React from 'react';
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/store";
import {sendNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";

type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {

    let stateDialogs = props.store.getState().dialogsPage
    //function
    const sendNewMessageClick = () => {
        props.store.dispatch(sendNewMessageActionCreator())
    }
    const updateMessageTextChange = (newMessageText: string) => {
        props.store.dispatch(updateMessageTextActionCreator(newMessageText))
    }

    return (
        <div>
            <Dialogs stateDialog={stateDialogs} upDateMessageTextChange={updateMessageTextChange} sendNewMessage={sendNewMessageClick}/>
        </div>
    );
};

export default DialogsContainer;