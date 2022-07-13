import {rerenderEntireTree} from "../render";

type DialogDataType = {
    id:number,
    name:string,
}

type MessagesDataType = {
    id: number,
    message: string,
}

type PostsDataType = {
    id: number,
    message: string,
    likeCount: number,
}

export type DialogsPageType = {
    dialogData: Array<DialogDataType>,
    messagesData: Array<MessagesDataType>,
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>,
    newPostText: string,
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}


let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi, how are you?", likeCount: 11},
            {id: 2, message: "It's my first post", likeCount: 12},
        ],
        newPostText: "",
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your IT-learning?"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "What are you doing"},
            {id: 5, message: "Bye"},
            {id: 6, message: "What's up"},
            {id: 7, message: "Sound great"},
        ],
        dialogData: [
            {id: 1, name: "Max"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Andrey"},
            {id: 4, name: "Victor"},
            {id: 5, name: "Sveta"},
            {id: 6, name: "Artur"}
        ],
    },
}

export const addPost = () =>{
    let newPost: PostsDataType = {
        id: state.profilePage.postsData.length + 1,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state)
    state.profilePage.newPostText = ""
}

export const onChangeNewPostHandler = (newPostText: string) => {
        state.profilePage.newPostText = newPostText
        rerenderEntireTree(state)
}
export default state