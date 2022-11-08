import React, {ChangeEvent, useState} from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/reducers/profile-reducer";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";
import unknownUser from "../../../assets/images/user.png"
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo = ({profile, isOwner, savePhoto}: ProfileInfoType) => {
    const [isEdit, setIsEdit] = useState(false)
    const onChangeEditMode = () => {
        setIsEdit(!isEdit)
    }
    const onChangeProfilePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div> {!profile
            ? <Preloader/>
            : <div className={classes.descriptionBlock}>
                <div className={classes.imgProfileInfo}><img src={profile.photos.large || unknownUser}/></div>
                {isOwner && <input type="file" onChange={onChangeProfilePhoto}/>}
                <div>
                    {isEdit ? <ProfileDataForm setEditMode={onChangeEditMode}/>: <ProfileData profile={profile} setEditMode={onChangeEditMode} isOwner={isOwner}/>}
                    <ProfileStatusContainer/>
                </div>

            </div>
        }
        </div>
    );
};

export default ProfileInfo;