import React from 'react';
import classes from "./Profile.module.css";
import MyPost, {MyPostArrayPropsType} from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
    statePostsData: MyPostArrayPropsType
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost statePostsData={props.statePostsData}/>
        </div>
    );
};

export default Profile;