import {v1} from "uuid";
import {profileAPI} from "../../api/api";
import {AppThunk} from "../redux-store";

export type ProfileActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof setStatusText>
    | ReturnType<typeof savePhotos>

export type ProfilePageType = {
    profile: ProfileType
    postsData: Array<PostsDataType>
    newStatusText: string
}
export type PostsDataType = {
    id?: string,
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
    photos: PhotosType
}
type PhotosType = {
    small: string
    large: string
}

const ADD_POST = "profile/ADD-POST";
const SET_PROFILE = "profile/SET-PROFILE";
const SET_STATUS_TEXT = "profile/SET-STATUS-TEXT"
const SAVE_PHOTOS = "profile/SAVE-PHOTOS"

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
    newStatusText: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
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
        case SAVE_PHOTOS:
            return {...state, profile: {...state.profile, photos: action.payload.photos}}
        default:
            return state
    }
}
//actionCreator
export const addPost = (newPost: string) => ({
    type: ADD_POST,
    payload: {newPost}
}) as const
export const setStatusText = (newStatusText: string) => ({
    type: SET_STATUS_TEXT,
    payload: {newStatusText}
}) as const
export const setProfile = (profile: ProfileType) => ({
    type: SET_PROFILE,
    payload: {profile}
}) as const
export const savePhotos = (photos: PhotosType) => ({
    type: SAVE_PHOTOS,
    payload: {photos}
}) as const
//thunkCreators
export const getProfile = (userID: string): AppThunk => async dispatch => {
    const res = await profileAPI.getProfile(userID)
    dispatch(setProfile(res))

}
export const getStatus = (userID: string): AppThunk => async dispatch => {
    const res = await profileAPI.getStatus(userID)
    dispatch(setStatusText(res))
}
export const updateStatus = (newStatusText: string): AppThunk => async dispatch => {
    const res = await profileAPI.putStatus(newStatusText)
    if (res.resultCode === 0) {
        dispatch(setStatusText(newStatusText))
    }
}
export const savePhoto = (file: File): AppThunk => async dispatch => {
    const res = await profileAPI.putPhoto(file)
    if (res.resultCode === 0) {
        dispatch(savePhotos(res.data.photos))
    }
}