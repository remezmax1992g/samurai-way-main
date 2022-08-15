import React from 'react';
import MyPost from "./MyPost";
import {StoreType} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostContainer = () => {

    //function
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let stateProfilePage = store.getState().profilePage
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let addPostKeyboard = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onChangeNewPost = (newPost: string) => {
                   store.dispatch(updateNewPostActionCreator(newPost))
                }
                return <MyPost statePost={stateProfilePage} addPost={addPost} addPostKeyboard={addPostKeyboard}
                               onChangeNewPost={onChangeNewPost}/>
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostContainer;