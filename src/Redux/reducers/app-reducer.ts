import {AppThunk} from "../redux-store";
import {getAuthUserData} from "./auth-reducer";

export type AppStateType = {
    isInitialized: boolean
}
export type AppActionType = ReturnType<typeof setIsInitialized>

const SET_IS_INITIALIZED = "SET-IS-INITIALIZED"

let initialState: AppStateType = {
    isInitialized: false
}

export const appReducer = (state: AppStateType = initialState, action: AppActionType): AppStateType => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {...state, isInitialized: true}
        default:
            return state
    }

}

export const setIsInitialized = () => ({type: SET_IS_INITIALIZED}) as const


export const initializing = (): AppThunk => async dispatch => {
    await dispatch(getAuthUserData())
    dispatch(setIsInitialized())
}
