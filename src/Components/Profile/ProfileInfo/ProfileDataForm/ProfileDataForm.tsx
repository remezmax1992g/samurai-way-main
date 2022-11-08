import React from 'react';
import {ProfileType, saveProfileTC} from "../../../../Redux/reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {RootStateType} from "../../../../Redux/redux-store";
import {ContactsType} from "../../../../api/api";

type ProfileDataForm = {
    setEditMode: () => void
}
type ProfileDataFormErrorType = {
    fullName?: string
    lookingForAJobDescription?: string
    aboutMe?: string
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

        },
        validate: values => {
            const errors: ProfileDataFormErrorType = {};
            if (!values.fullName) {
                errors.fullName = 'Required';
            } else if (values.fullName.length > 20) {
                errors.fullName = 'Must be 20 characters or less';
            }
            if (!values.lookingForAJobDescription) {
                errors.lookingForAJobDescription = 'Required';
            } else if (values.lookingForAJobDescription.length > 1000) {
                errors.lookingForAJobDescription = 'Must be 1000 characters or less';
            }
            if (!values.aboutMe) {
                errors.aboutMe = 'Required';
            } else if (values.aboutMe.length > 1000) {
                errors.aboutMe = 'Must be 1000 characters or less';
            }
            return errors;
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
                {formik.touched.fullName && formik.errors.fullName &&
                    <div style={{color: "red"}}>{formik.errors.fullName}</div>}
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
                {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                    <div style={{color: "red"}}>{formik.errors.lookingForAJobDescription}</div>}
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
                {formik.touched.aboutMe && formik.errors.aboutMe &&
                    <div style={{color: "red"}}>{formik.errors.aboutMe}</div>}
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map((key) => {
                return (
                    <div key={key}>
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