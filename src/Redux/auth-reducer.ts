import {authAPI, LoginParamsType} from "../api/api";
import {Dispatch} from "redux";
import {AppThunk} from "./redux-store";

export type HeaderStateType = {
    id: number | null,
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = ReturnType<typeof setAuthUserData>

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA"

let initialState: HeaderStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: HeaderStateType = initialState, action: AuthActionType): HeaderStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }

}

export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {userID, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<AuthActionType>) => {
    authAPI.getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const createLogin = (data: LoginParamsType): AppThunk => async dispatch => {
    const res = await authAPI.login(data)
    if (res.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}
export const deleteLogin = (): AppThunk => async dispatch => {
    const res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}