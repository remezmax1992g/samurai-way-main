import React from 'react';
import MyPost from "./MyPost";
import {ProfilePageType} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

type MapStateToPropsForMyPostContainerType = {
    statePost: ProfilePageType
}

type MapDispatchToPropsForMyPostContainerType = {
    addPost: () => void,
    addPostKeyboard: () =>  void,
    onChangeNewPost: (newPost: string) => void
}

export type MyPostContainerPropsType = MapStateToPropsForMyPostContainerType & MapDispatchToPropsForMyPostContainerType

let mapSateToProps = (state: AppStateType): MapStateToPropsForMyPostContainerType => {
    return {
        statePost: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForMyPostContainerType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        addPostKeyboard: () =>  dispatch(addPostActionCreator()),
        onChangeNewPost: (newPost: string) => dispatch(updateNewPostActionCreator(newPost))

    }
}

const MyPostContainer = connect(mapSateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;