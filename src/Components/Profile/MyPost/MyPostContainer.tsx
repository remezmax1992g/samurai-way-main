import React from 'react';
import MyPost from "./MyPost";
import {addPost, ProfilePageType, updateNewPost} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";

type MapStateToPropsForMyPostContainerType = {
    statePost: ProfilePageType
}

type MapDispatchToPropsForMyPostContainerType = {
    addPost: () => void,
    updateNewPost: (newPost: string) => void
}

export type MyPostContainerPropsType = MapStateToPropsForMyPostContainerType & MapDispatchToPropsForMyPostContainerType

let mapStateToProps = (state: AppStateType): MapStateToPropsForMyPostContainerType => {
    return {
        statePost: state.profilePage
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPost})(MyPost)

export default MyPostContainer;