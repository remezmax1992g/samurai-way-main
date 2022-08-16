import {
    AddPostActionType,
    ProfilePageType,
    UpdateNewPostActionType
} from "./profile-reducer";
import {
    DialogsPageType,
    SendNewMessageActionType,
    UpdateMessageTextActionType
} from "./dialogs-reducer";
import {SidebarPageType} from "./sidebar-reducer";
import {
    FollowToUserActionCreatorType,
    SetUsersActionCreatorType,
    UnfollowToUserActionCreatorType, UsersPageType
} from "./users-reducer";

//type
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebarPage: SidebarPageType
    userPage: UsersPageType
}
export type ActionType =
    AddPostActionType
    | UpdateNewPostActionType
    | UpdateMessageTextActionType
    | SendNewMessageActionType
    | FollowToUserActionCreatorType
    | UnfollowToUserActionCreatorType
    | SetUsersActionCreatorType
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
/*
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
                {id: v1(), message: "Sound great"},
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
        sidebarPage: {},
        userPage: {
            users: [
                {
                    id: v1(),
                    follow: false,
                    fullName: "Maxim",
                    status: "I'm boss",
                    location: {city: "Minsk", country: "Belarus"},
                    photoUrl:"https://sun9-44.userapi.com/impf/c837437/v837437877/1c8b3/1oyCdQScwEY.jpg?size=2560x1920&quality=96&sign=46274b18ea4bae87fee7ceea49983881&type=album"
                },
                {
                    id: v1(),
                    follow: true,
                    fullName: "Artem",
                    status: "I'm boss",
                    location: {city: "Moscow", country: "Russia"},
                    photoUrl: "https://sun2.beltelecom-by-minsk.userapi.com/impg/x-6BrTMlYjtGtPchPHQUT6v0o1EkWh08GWiDsw/fumKmvIYugc.jpg?size=1067x1601&quality=96&sign=456da46bcc49287764e8483aea2a1c44&type=album"
                },
                {
                    id: v1(),
                    follow: false,
                    fullName: "Alex",
                    status: "I'm boss",
                    location: {city: "Kiev", country: "Ukraine"},
                    photoUrl: "https://sun9-64.userapi.com/impg/RWYP17KNufgHQHHkmw3a0pdZQESsOVwjo532hg/j_mdcacpszc.jpg?size=1152x2048&quality=96&sign=09235f4485cc7a4eebd3dfee3e0c6d6e&type=album"

                },
                {
                    id: v1(),
                    follow: true,
                    fullName: "Pavel",
                    status: "I'm boss",
                    location: {city: "Berlin", country: "Germany"},
                    photoUrl: "https://sun9-41.userapi.com/impg/6YA9vXfZ-BYNjuOrkpL2_j-u-hZSbZfxyofKxg/nGy2ezA9RKo.jpg?size=1442x2160&quality=96&sign=d78d458081655cdfe78b4186a99163eb&type=album"
                },
            ]
        }
    },
    //function
    _callSubscriber() {
        console.log("State was changed")
    },
    getState() {
        return this._state
    },
    setState(state: RootStateType) {
        this._state = state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this.getState().profilePage, action)
        this._state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this.getState().sidebarPage, action)
        this._callSubscriber()
    }
}

export default store*/
