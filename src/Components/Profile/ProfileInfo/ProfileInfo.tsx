import React, {ChangeEvent} from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/reducers/profile-reducer";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";
import unknownUser from "../../../assets/images/user.png"

type ProfileInfoType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo = ({profile, isOwner, savePhoto}: ProfileInfoType) => {
    const onChangeProfilePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div> {!profile
        ? <Preloader/>
        : <div className={classes.descriptionBlock}>
                <div className={classes.imgProfileInfo}><img src={profile.photos.large || unknownUser}/></div>
                {isOwner && <input type="file" onChange={onChangeProfilePhoto}/>}
                <div>{profile.fullName}</div>
                <ProfileStatusContainer/>
                <h3>Description</h3>
                <div>{profile.lookingForAJobDescription}</div>

            </div>}
        </div>
    );
};

export default ProfileInfo;