import React, {ComponentType} from 'react';
import Dialogs from "./Dialogs";
import {
    DialogsPageType,
    sendNewMessage,
    updateMessageTextChange,
} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

type MapStateToPropsForDialogsContainerType = {
    stateDialog:DialogsPageType
}

type MapDispatchToPropsForDialogsContainerType = {
    sendNewMessage: () => void,
    updateMessageTextChange: (newMessageText: string) => void
}

export type DialogsContainerPropsType = MapStateToPropsForDialogsContainerType & MapDispatchToPropsForDialogsContainerType
class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    constructor(props: DialogsContainerPropsType) {
        super(props);
    }
    render(){
        return <Dialogs stateDialog={this.props.stateDialog}
                        sendNewMessage={this.props.sendNewMessage}
                        updateMessageTextChange={this.props.updateMessageTextChange}/>
    }
}
let mapStateToProps = (state: AppStateType): MapStateToPropsForDialogsContainerType => {
    return {
        stateDialog: state.dialogsPage,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {sendNewMessage, updateMessageTextChange}),
    WithAuthRedirect)
(DialogsContainer);