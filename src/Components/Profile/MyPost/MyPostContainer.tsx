import React from 'react';
import MyPost from "./MyPost";
import {StoreType} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";

type MyPostContainerPropsType = {
    store: StoreType
}
const MyPostContainer = (props: MyPostContainerPropsType) => {
    let stateProfilePage = props.store.getState().profilePage
    //function
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let addPostKeyboard = () => {
            props.store.dispatch(addPostActionCreator())
    }

    let onChangeNewPost = (newPost: string) => {
        props.store.dispatch(updateNewPostActionCreator(newPost))
    }

    return (
        <div>
            <MyPost statePost={stateProfilePage} addPost={addPost} addPostKeyboard={addPostKeyboard} onChangeNewPost={onChangeNewPost}/>
        </div>
    );
};

export default MyPostContainer;