import React from 'react';
import Dialogs from "./Dialogs";
import {
    DialogsPageType,
    sendNewMessageActionCreator,
    updateMessageTextActionCreator
} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {HeaderStateType} from "../../Redux/auth-reducer";

type MapStateToPropsForDialogsContainerType = {
    stateDialog:DialogsPageType
    auth: HeaderStateType
}

type MapDispatchToPropsForDialogsContainerType = {
    sendNewMessage: () => void,
    updateMessageTextChange: (newMessageText: string) => void
}

export type DialogsContainerPropsType = MapStateToPropsForDialogsContainerType & MapDispatchToPropsForDialogsContainerType

let mapStateToProps = (state: AppStateType): MapStateToPropsForDialogsContainerType => {
    return {
        stateDialog: state.dialogsPage,
        auth: state.auth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForDialogsContainerType => {
    return {
        sendNewMessage: () => dispatch(sendNewMessageActionCreator()),
        updateMessageTextChange: (newMessageText: string) => dispatch(updateMessageTextActionCreator(newMessageText))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;