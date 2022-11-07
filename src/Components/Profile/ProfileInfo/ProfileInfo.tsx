import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/reducers/profile-reducer";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";
import unknownUser from "../../../assets/images/user.png"

type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo = ({profile}: ProfileInfoType) => {
    if(!profile){
        return <div>
            <Preloader/>
        </div>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                 <div className={classes.imgProfileInfo}> {profile.photos.large ? <img src={profile.photos.large}/> : <img src={unknownUser}/>}</div>
                <div>{profile.fullName}</div>
                <ProfileStatusContainer/>
                <h3>Description</h3>
                <div>{profile.lookingForAJobDescription}</div>

            </div>
        </div>
    );
};

export default ProfileInfo;