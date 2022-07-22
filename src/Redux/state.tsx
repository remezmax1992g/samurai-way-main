const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

type DialogDataType = {
    id: number,
    name: string,
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

type AddPostActionType = ReturnType<typeof  addPostActionCreator>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostActionCreator>

export type ActionType = AddPostActionType | UpdateNewPostActionType

export type StoreType = {
    //state
    _state: RootStateType
    getState: () => RootStateType
    //function
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostActionType) => void
}

const store: StoreType = {
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
        },
    },

    _callSubscriber(){
        console.log("State was changed")
    },
    getState(){return this._state},

    subscribe(observer: () => void){
        this._callSubscriber = observer
    },

    dispatch(action: AddPostActionType | UpdateNewPostActionType){
        if(action.type === ADD_POST){
            let newPost: PostsDataType = {
                id: this._state.profilePage.postsData.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber()
        }
        else if(action.type === UPDATE_NEW_POST){
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber()
        }
    }

}

export const addPostActionCreator = () =>{
    return {type: ADD_POST} as const
}
export const updateNewPostActionCreator = (newPost: string) =>({type: UPDATE_NEW_POST, newPostText: newPost}) as const

export default store