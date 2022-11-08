import React from 'react';
import {ProfileType, saveProfileTC} from "../../../../Redux/reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {FormikErrors, useFormik} from "formik";
import {RootStateType} from "../../../../Redux/redux-store";
import {ContactsType, ProfileParamsType} from "../../../../api/api";

type ProfileDataForm = {
    setEditMode: () => void
}
// type ProfileDataFormErrorType = {
//     fullName?: string
//     lookingForAJobDescription?: string
//     aboutMe?: string
//     contacts: {
//         github: string
//         vk: string
//         facebook: string
//         instagram: string
//         twitter: string
//         website: string
//         youtube: string
//         mainLink: string
//     }
// }

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
            const errors: FormikErrors<ProfileParamsType & ContactsType> = {};
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
            // if (!/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/.test(values.contacts.twitter)) {
            //     errors.twitter = 'Invalid Twitter name';
            // }
            // if (!/^(((https?)\:\/\/)?(www\.)?)?(vk\.com\/[A-Za-z0-9-]\/?)$/.test(values.contacts.vk)) {
            //     errors.vk = 'Invalid VK name';
            // }
            // if (!/^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/.test(values.contacts.github)) {
            //     errors.github = 'Invalid Github name';
            // }
            // if (!/^(http\:\/\/)?(youtube\.com|youtu\.be)+$/.test(values.contacts.youtube)) {
            //     errors.youtube = 'Invalid Youtube name';
            // }
            // if (/(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/.test(values.contacts.facebook)) {
            //     errors.facebook = 'Invalid Facebook name';
            // }
            // if (!/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/.test(values.contacts.instagram)) {
            //     errors.instagram = 'Invalid Instagram name';
            // }
            // if (!/http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/.test(values.contacts.mainLink)) {
            //     errors.mainLink = 'Invalid Linkedin mainLink';
            // }
            // if (!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(values.contacts.website)) {
            //     errors.website = 'Invalid Website name';
            // }
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
                // @ts-ignore
                // @ts-ignore
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
                            {/*{formik.touched.contacts?[key] && formik.errors?[key]*/}
                            {/*    ? <div style={{color: "red"}}>{formik.errors?[key]}</div>*/}
                            {/*    : null}*/}
                        </div>
                    </div>
                )
            })}
            </div>
        </form>
    );
};

export default ProfileDataForm;