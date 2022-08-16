import {ActionType, PostsDataType, ProfilePageType} from "./store";
import {v1} from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
let initialState = {
    postsData: [
        {id: v1(), message: "Hi, how are you?", likeCount: 11},
        {id: v1(), message: "It's my first post", likeCount: 12},
    ],
    newPostText: "",
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: v1(),
                message: state.newPostText,
                likeCount: 0
            }
            state.postsData.push(newPost);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.payload.newPost
            return state
        default:
            return state
    }
}
//actionCreator
export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostActionCreator = (newPost: string) => ({
    type: UPDATE_NEW_POST,
    payload: {newPost}
}) as const

export default profileReducer