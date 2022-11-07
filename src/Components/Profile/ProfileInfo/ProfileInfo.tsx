import React, {ChangeEvent} from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ContactsType, ProfileType} from "../../../Redux/reducers/profile-reducer";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";
import unknownUser from "../../../assets/images/user.png"
import Contact from "./Contact/Contact";

type ProfileInfoType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo = ({profile, isOwner, savePhoto}: ProfileInfoType) => {
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
                    <div>
                        <b>Full name:</b> {profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
                    </div>
                    <div>
                        {profile.lookingForAJob &&
                            <span><b>My professional skills:</b>{profile.lookingForAJobDescription}</span>}
                    </div>
                    <div>
                        <b>Contacts:</b>{Object.keys(profile.contacts).map((key)=> {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                    })}
                    </div>

                    <ProfileStatusContainer/>
                </div>

            </div>
        }
        </div>
    );
};

export default ProfileInfo;