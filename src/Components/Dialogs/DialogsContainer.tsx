import React, {ComponentType} from 'react';
import Dialogs from "./Dialogs";
import {
    DialogsPageType,
    sendNewMessage,
} from "../../Redux/reducers/dialogs-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {RootStateType} from "../../Redux/redux-store";

type MapStateToPropsForDialogsContainerType = {
    stateDialog:DialogsPageType
}

type MapDispatchToPropsForDialogsContainerType = {
    sendNewMessage: (newMessage: string) => void,
}

export type DialogsContainerPropsType = MapStateToPropsForDialogsContainerType & MapDispatchToPropsForDialogsContainerType
class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    constructor(props: DialogsContainerPropsType) {
        super(props);
    }
    render(){
        return <Dialogs stateDialog={this.props.stateDialog}
                        sendNewMessage={this.props.sendNewMessage}
                       />
    }
}
let mapStateToProps = (state: RootStateType): MapStateToPropsForDialogsContainerType => {
    return {
        stateDialog: state.dialogsPage,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {sendNewMessage}),
    WithAuthRedirect)
(DialogsContainer);