import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../Redux/state";
import MyPost from "./MyPost/MyPost";

export type ProfilePropsType = {
    statePostsData: ProfilePageType
    dispatch: (action: ActionType) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost statePost={props.statePostsData}
                    newPostText={props.statePostsData.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;