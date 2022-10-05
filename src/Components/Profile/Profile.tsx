import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/reducers/profile-reducer";

type ProfileLocalType = {
    profile: ProfileType
}

const Profile = ({profile}: ProfileLocalType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile}/>
            <MyPostContainer/>
        </div>
    );
};

export default Profile;