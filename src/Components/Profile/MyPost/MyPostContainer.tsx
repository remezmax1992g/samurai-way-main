import React from 'react';
import MyPost from "./MyPost";
import {addPost, ProfilePageType} from "../../../Redux/reducers/profile-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/redux-store";

type MapStateToPropsForMyPostContainerType = {
    statePost: ProfilePageType
}

type MapDispatchToPropsForMyPostContainerType = {
    addPost: (newPost: string) => void,
}

export type MyPostContainerPropsType = MapStateToPropsForMyPostContainerType & MapDispatchToPropsForMyPostContainerType

let mapStateToProps = (state: RootStateType): MapStateToPropsForMyPostContainerType => {
    return {
        statePost: state.profilePage
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost})(MyPost)

export default MyPostContainer;