import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";
import MyPost from "./MyPost/MyPost";

export type ProfilePropsType = {
    statePostsData: ProfilePageType
    addPost: () => void;
    onChangeNewPostHandler: (newPostText: string) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost statePost={props.statePostsData}
                    addPost={props.addPost}
                    newPostText={props.statePostsData.newPostText}
                    onChangeNewPostHandler={props.onChangeNewPostHandler}/>
        </div>
    );
};

export default Profile;