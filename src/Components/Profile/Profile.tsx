import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {ProfileType} from "../../Redux/reducers/profile-reducer";

type ProfileLocalType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Profile = ({profile, isOwner, savePhoto}: ProfileLocalType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
            <MyPostContainer/>
        </div>
    );
};

export default Profile;