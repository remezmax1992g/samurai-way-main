import React from 'react';
import {ProfileType} from "../../../../Redux/reducers/profile-reducer";

type ProfileDataForm = {
    profile: ProfileType
    setEditMode: () => void
}

const ProfileDataForm = ({profile, setEditMode}:ProfileDataForm) => {
    return (
        <div>
            <div><button onClick={setEditMode}>SAVE</button></div>
            Form
        </div>
    );
};

export default ProfileDataForm;