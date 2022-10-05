import {authAPI, LoginParamsType} from "../../api/api";
import {AppThunk} from "../redux-store";

export type HeaderStateType = {
    userID: number | null,
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = ReturnType<typeof setAuthUserData>

const SET_AUTH_USER_DATA = "auth/SET-AUTH-USER-DATA"

let initialState: HeaderStateType = {
    userID: null,
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
//actionCreators
export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {userID, email, login, isAuth}
    } as const
}
//thunkCreators
export const getAuthUserData = (): AppThunk => async dispatch => {
    const res = await authAPI.getAuth()
    if (res.resultCode === 0) {
        let {id, email, login} = res.data
        dispatch(setAuthUserData(id, email, login, true))
    }
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