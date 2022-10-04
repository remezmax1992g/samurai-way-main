import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/reducers/profile-reducer";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

type ProfileInfoType = {
    profile: ProfileType

}

const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile){
        return <div>
            <Preloader/>
        </div>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div><img src={props.profile.photos.large} alt="myPhoto"/></div>
                <div>{props.profile.fullName}</div>
                <ProfileStatusContainer/>
                <h3>Description</h3>
                <div>{props.profile.lookingForAJobDescription}</div>

            </div>
        </div>
    );
};

export default ProfileInfo;