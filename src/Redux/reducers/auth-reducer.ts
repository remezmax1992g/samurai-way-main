import {authAPI, LoginParamsType, securityAPI} from "../../api/api";
import {AppThunk} from "../redux-store";

export type HeaderStateType = {
    userID: number | null,
    email: string | null
    login: string | null
    captchaURL: string
    isAuth: boolean
}
export type AuthActionType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setCaptchaURL>

const SET_AUTH_USER_DATA = "auth/SET-AUTH-USER-DATA"
const SET_CAPTCHA_URL = "auth/SET-CAPTCHA-URL"

let initialState: HeaderStateType = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: ""
}

export const authReducer = (state: HeaderStateType = initialState, action: AuthActionType): HeaderStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.payload}
        case SET_CAPTCHA_URL:
            return {...state, captchaURL: action.payload.captchaURL}
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
export const setCaptchaURL = (captchaURL: string) => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaURL}
}as const)
//thunkCreators
export const getAuthUserData = (): AppThunk => async dispatch => {
    const res = await authAPI.getAuth()
    let {id, email, login} = res.data
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const createLogin = (data: LoginParamsType): AppThunk => async dispatch => {
    const res = await authAPI.login(data)
    if (res.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else if (res.resultCode === 10){
        dispatch(getCaptcha())
    }

}
export const deleteLogin = (): AppThunk => async dispatch => {
    const res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(setCaptchaURL(""))
    }
}
export const getCaptcha = (): AppThunk => async dispatch => {
    const res = await securityAPI.getCaptchaURL()
    console.log(res)
    dispatch(setCaptchaURL(res.url))
}
