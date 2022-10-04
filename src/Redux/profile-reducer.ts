import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {RootStateType} from "./redux-store";

export type ProfileActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof setStatusText>

export type ProfilePageType = {
    profile: ProfileType
    postsData: Array<PostsDataType>
    newPostText: string
    newStatusText: string
}
export type PostsDataType = {
    id: string,
    message: string,
    likeCount: number,
}
export type ProfileType = {
    userId: number
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS_TEXT = "SET-STATUS-TEXT"

let initialState: ProfilePageType = {
    profile: {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },
        photos: {
            small: "",
            large: ""
        }
    },
    postsData: [
        {id: v1(), message: "Hi, how are you?", likeCount: 11},
        {id: v1(), message: "It's my first post", likeCount: 12},
    ],
    newPostText: "",
    newStatusText: "Hi"
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: v1(),
                message: action.payload.newPost,
                likeCount: 0
            }
            return {...state, postsData: [...state.postsData, newPost]}
        case SET_STATUS_TEXT:
            return {...state, newStatusText: action.payload.newStatusText}
        case SET_PROFILE:
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}
//actionCreator
export const addPost = (newPost: string) => ({
    type: ADD_POST,
    payload:{newPost}}) as const
export const setStatusText = (newStatusText:string) => ({
    type: SET_STATUS_TEXT,
    payload:{newStatusText}}) as const
export const setProfile = (profile: ProfileType) => ({
    type: SET_PROFILE,
    payload: {profile}
}) as const
//thunks
export const getProfile = (userID: string) => (dispatch: Dispatch<ProfileActionType>, getState: () => RootStateType) => {
    if (!userID) {
        userID = JSON.stringify(getState().auth.userID)
    }
    profileAPI.getProfile(userID)
        .then(data => {
            dispatch(setProfile(data))
        })
}
export const getStatus = (userID: string) => (dispatch: Dispatch<ProfileActionType>, getState: () => RootStateType) => {
    if (!userID) {
        userID = JSON.stringify(getState().auth.userID)
    }
    profileAPI.getStatus(userID)
        .then(statusText => dispatch(setStatusText(statusText)))
}
export const updateStatus = (newStatusText: string) => (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.putStatus(newStatusText)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setStatusText(newStatusText))
            }
        })
}

export default profileReducer