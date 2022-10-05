import React from 'react';
import {addPost, PostsDataType} from "../../../Redux/reducers/profile-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";

type MapStateToPropsForMyPostContainerType = {
    statePost: Array<PostsDataType>
}

type MapDispatchToPropsForMyPostContainerType = {
    addPost: (newPost: string) => void,
}

export type MyPostContainerPropsType = MapStateToPropsForMyPostContainerType & MapDispatchToPropsForMyPostContainerType

let mapStateToProps = (state: RootStateType): MapStateToPropsForMyPostContainerType => {
    return {
        statePost: state.profilePage.postsData
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostContainer;