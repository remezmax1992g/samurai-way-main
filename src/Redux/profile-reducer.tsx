import {ActionType, PostsDataType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likeCount: 11},
        {id: 2, message: "It's my first post", likeCount: 12},
    ],
    newPostText: "",
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: state.postsData.length + 1,
                message: state.newPostText,
                likeCount: 0
            }
            state.postsData.push(newPost);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}
//actionCreator
    export const addPostActionCreator = () => ({type: ADD_POST}) as const
    export const updateNewPostActionCreator = (newPost: string) => ({
        type: UPDATE_NEW_POST,
        newPostText: newPost
    }) as const

    export default profileReducer