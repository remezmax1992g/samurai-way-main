import React from 'react';
import Contact from "./Contact/Contact";
import {ProfileType} from "../../../../Redux/reducers/profile-reducer";
import {ContactsType} from "../../../../api/api";
type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    setEditMode: () => void
}

const ProfileData = ({profile, isOwner, setEditMode}: ProfileDataType) => {
    return (
        <div>
            {isOwner && <div><button onClick={setEditMode}>EDIT</button></div>}
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
        </div>
    );
};

export default ProfileData;