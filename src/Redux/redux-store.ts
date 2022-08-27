import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    userPage: usersReducer,
    auth: authReducer,
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store

// @ts-ignore
window.store = store