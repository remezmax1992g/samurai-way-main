import profileReducer, {addPostActionCreator, updateNewPostActionCreator} from "./profile-reducer";
import dialogsReducer, {sendNewMessageActionCreator, updateMessageTextActionCreator} from "./dialogs-reducer";

//type
export type DialogDataType = {
    id: number,
    name: string,
}
export type MessagesDataType = {
    id: number,
    message: string,
}
export type PostsDataType = {
    id: number,
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
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
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
            newMessageText: ""
        },
    },
    //function
    _callSubscriber() {
        console.log("State was changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this.getState().profilePage, action)
        this._state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action)
        this._callSubscriber()
    }
}

export default store