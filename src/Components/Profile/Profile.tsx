import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/store";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = () => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    );
};

export default Profile;