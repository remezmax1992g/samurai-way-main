import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {ProfileActionType, profileReducer} from "./reducers/profile-reducer";
import {DialogsActionType, dialogsReducer} from "./reducers/dialogs-reducer";
import {UserActionType, usersReducer} from "./reducers/users-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import {AuthActionType, authReducer} from "./reducers/auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {AppActionType, appReducer} from "./reducers/app-reducer";

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