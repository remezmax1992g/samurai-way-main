import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/store";
import MyPostContainer from "./MyPost/MyPostContainer";

export type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>
    );
};

export default Profile;