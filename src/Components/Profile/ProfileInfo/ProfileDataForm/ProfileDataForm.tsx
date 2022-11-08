import React from 'react';
import {ProfileType, saveProfileTC} from "../../../../Redux/reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {RootStateType} from "../../../../Redux/redux-store";
import Contact from "../ProfileData/Contact/Contact";
import {ContactsType} from "../../../../api/api";

type ProfileDataForm = {
    setEditMode: () => void
}

const ProfileDataForm = ({setEditMode}: ProfileDataForm) => {
    const dispatch = useDispatch()
    const profile = useSelector<RootStateType, ProfileType>(state => state.profilePage.profile)
    console.log(profile.contacts["facebook"])
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
                <b>Full name:</b>
                <div>
                    <input type="text"
                           name="fullName"
                           placeholder="Enter fullName"
                           onChange={formik.handleChange}
                           value={formik.values.fullName}
                    />
                </div>
            </div>
            <div>
                <b>Looking for a job:</b>
                <div>
                    <input type="checkbox"
                           name="lookingForAJob"
                           onChange={formik.handleChange}
                           checked={formik.values.lookingForAJob}
                    />
                </div>
            </div>
            <div>
                <b>My professional skills:</b>
                <div>
                    <textarea name="lookingForAJobDescription"
                              placeholder="Enter professional skills"
                              onChange={formik.handleChange}
                              value={formik.values.lookingForAJobDescription}
                    />
                </div>
            </div>
            <div>
                <b>My personal information:</b>
                <div>
                    <textarea name="aboutMe"
                              placeholder="Enter personal information"
                              onChange={formik.handleChange}
                              value={formik.values.aboutMe}
                    />
                </div>
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map((key) => {
                return (
                    <div>
                        <b>{key}:</b>
                        <div>
                            <input type="text"
                                   name={"contacts." + key}
                                   placeholder={key}
                                   onChange={formik.handleChange}
                                   value={formik.values.contacts[key as keyof ContactsType]}
                                   />
                        </div>
                    </div>
                )
            })}
            </div>
        </form>
    );
};

export default ProfileDataForm;