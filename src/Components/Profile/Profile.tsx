import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfileLocalType = {
    profile: ProfileType
}

const Profile = (props: ProfileLocalType) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
};

export default Profile;