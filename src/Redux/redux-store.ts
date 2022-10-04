import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";
import usersReducer, {UserActionType} from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {AppActionType, appReducer} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    }
)

export type RootStateType = ReturnType<typeof store.getState>
export type CommonActionType =
    | AuthActionType
    | DialogsActionType
    | ProfileActionType
    | UserActionType
    | AppActionType
export type AppDispatch = ThunkDispatch<RootStateType, unknown, CommonActionType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, CommonActionType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

// @ts-ignore
window.store = store