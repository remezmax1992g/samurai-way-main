import React from 'react';
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/store";
import {sendNewMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

/*type DialogsContainerPropsType = {
    store: StoreType
}*/

const DialogsContainer = () => {


    //function


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let stateDialogs = store.getState().dialogsPage
                    const sendNewMessageClick = () => {
                        store.dispatch(sendNewMessageActionCreator())
                    }
                    const updateMessageTextChange = (newMessageText: string) => {
                        store.dispatch(updateMessageTextActionCreator(newMessageText))
                    }

                    return <Dialogs stateDialog={stateDialogs} upDateMessageTextChange={updateMessageTextChange}
                             sendNewMessage={sendNewMessageClick}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;