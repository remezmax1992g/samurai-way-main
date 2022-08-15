import profileReducer, {addPostActionCreator, updateNewPostActionCreator} from "./profile-reducer";
import dialogsReducer, {sendNewMessageActionCreator, updateMessageTextActionCreator} from "./dialogs-reducer";
import {v1} from "uuid";
import sidebarReducer from "./sidebar-reducer";

//type
export type DialogDataType = {
    id: string,
    name: string,
}
export type MessagesDataType = {
    id: string,
    message: string,
}
export type PostsDataType = {
    id: string,
    message: string,
    likeCount: number,
}
export type DialogsPageType = {
    dialogData: Array<DialogDataType>,
    messagesData: Array<MessagesDataType>,
    newMessageText: string
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>,
    newPostText: string,
}
export type SidebarType ={}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostActionCreator>
type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextActionCreator>
type SendNewMessageActionType = ReturnType<typeof sendNewMessageActionCreator>
export type ActionType = AddPostActionType | UpdateNewPostActionType | UpdateMessageTextActionType | SendNewMessageActionType
export type StoreType = {
    //state
    _state: RootStateType
    getState: () => RootStateType
    setState: (state: RootStateType) => void
    //function
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
//store
const store: StoreType = {
    //state
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: "Hi, how are you?", likeCount: 11},
                {id: v1(), message: "It's my first post", likeCount: 12},
            ],
            newPostText: "",
        },
        dialogsPage: {
            messagesData: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "How is your IT-learning?"},
                {id: v1(), message: "How are you?"},
                {id: v1(), message: "What are you doing"},
                {id: v1(), message: "Bye"},
                {id: v1(), message: "What's up"},
                {id:v1(), message: "Sound great"},
            ],
            dialogData: [
                {id: v1(), name: "Max"},
                {id: v1(), name: "Dima"},
                {id: v1(), name: "Andrey"},
                {id: v1(), name: "Victor"},
                {id: v1(), name: "Sveta"},
                {id: v1(), name: "Artur"}
            ],
            newMessageText: ""
        },
        sidebar: {}
    },
    //function
    _callSubscriber() {
        console.log("State was changed")
    },
    getState() {
        return this._state
    },
    setState(state: RootStateType){
        this._state = state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this.getState().profilePage, action)
        this._state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action)
        this._state.sidebar = sidebarReducer(this.getState().sidebar, action)
        this._callSubscriber()
    }
}

export default store