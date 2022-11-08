import React from 'react';
import {ProfileType, saveProfileTC} from "../../../../Redux/reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {RootStateType} from "../../../../Redux/redux-store";

type ProfileDataForm = {
    setEditMode: () => void
}

const ProfileDataForm = ({setEditMode}: ProfileDataForm) => {
    const dispatch = useDispatch()
    const profile = useSelector<RootStateType, ProfileType>(state => state.profilePage.profile)
    const formik = useFormik({
        initialValues: {
            userId: profile.userId,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            contacts: {
                github: profile.contacts.github,
                vk: profile.contacts.vk,
                facebook: profile.contacts.facebook,
                instagram: profile.contacts.instagram,
                twitter: profile.contacts.twitter,
                website: profile.contacts.website,
                youtube: profile.contacts.youtube,
                mainLink: profile.contacts.mainLink
            }
        },
        onSubmit: (values) => {
            dispatch(saveProfileTC(values))
            setEditMode()
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <button type="submit">SAVE</button>
            </div>
            <div>
                <b>Full name:</b><input type="text"
                                        name="fullName"
                                        placeholder="Enter fullName"
                                        onChange={formik.handleChange}
                                        value={formik.values.fullName}
            />
            </div>
            <div>
                <b>Looking for a job:</b><input type="checkbox"
                                                name="lookingForAJob"
                                                onChange={formik.handleChange}
                                                checked={formik.values.lookingForAJob}
            />
            </div>
            <div>
                <b>My professional skills:</b><textarea name="lookingForAJobDescription"
                                                        placeholder="Enter professional skills"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.lookingForAJobDescription}
            />
            </div>
            <div>
                <b>My personal information:</b><textarea name="aboutMe"
                                                        placeholder="Enter personal information"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.aboutMe}
            />
            </div>
        </form>
    );
};

export default ProfileDataForm;