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
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

type MapStateToPropsForDialogsContainerType = {
    stateDialog:DialogsPageType
}

type MapDispatchToPropsForDialogsContainerType = {
    sendNewMessage: () => void,
    updateMessageTextChange: (newMessageText: string) => void
}

export type DialogsContainerPropsType = MapStateToPropsForDialogsContainerType & MapDispatchToPropsForDialogsContainerType

let mapStateToProps = (state: AppStateType): MapStateToPropsForDialogsContainerType => {
    return {
        stateDialog: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForDialogsContainerType => {
    return {
        sendNewMessage: () => dispatch(sendNewMessageActionCreator()),
        updateMessageTextChange: (newMessageText: string) => dispatch(updateMessageTextActionCreator(newMessageText))
    }
}
let AuthRedirectComponent = WithAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;