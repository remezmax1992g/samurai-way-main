import {ActionType} from "./store";
import {v1} from "uuid";

export type AddPostActionCreatorType = ReturnType<typeof addPost>
export type UpdateNewPostActionCreatorType = ReturnType<typeof updateNewPost>
export type SetProfileActionCreatorType = ReturnType<typeof setProfile>
export type ProfilePageType = {
    profile: ProfileType
    postsData: Array<PostsDataType>
    newPostText: string
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
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_PROFILE = "SET-PROFILE"

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
        }},
    postsData: [
        {id: v1(), message: "Hi, how are you?", likeCount: 11},
        {id: v1(), message: "It's my first post", likeCount: 12},
    ],
    newPostText: "",
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: v1(),
                message: state.newPostText,
                likeCount: 0
            }
            return {...state, postsData: [...state.postsData, newPost], newPostText: ""}
        case UPDATE_NEW_POST:
            return {...state, newPostText: action.payload.newPost}
        case SET_PROFILE:
            return  {...state, profile: action.payload.profile}
        default:
            return state
    }
}
//actionCreator
export const addPost = () => ({type: ADD_POST}) as const
export const updateNewPost = (newPost: string) => ({
    type: UPDATE_NEW_POST,
    payload: {newPost}
}) as const
export const setProfile = (profile: ProfileType) => ({
    type: SET_PROFILE,
    payload: {profile}
}) as const

export default profileReducer