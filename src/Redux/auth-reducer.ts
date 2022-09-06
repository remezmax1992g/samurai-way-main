import {authAPI} from "../api/api";
import {Dispatch} from "redux";

export type HeaderStateType = {
    id: number,
    email: string
    login: string
    isAuth: boolean
}

type SetAuthUserDataType = ReturnType<typeof setAuthUserData>

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA"

let initialState: HeaderStateType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,
}

export const authReducer = (state: HeaderStateType = initialState, action:SetAuthUserDataType): HeaderStateType => {
        switch(action.type){
            case SET_AUTH_USER_DATA:
                return {...state, ...action.payload, isAuth:true}
            default:
                return state
        }

}

export const setAuthUserData = (userID: number, email: string, login: string) => {
    return{
        type: SET_AUTH_USER_DATA,
        payload: {userID, email, login}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<SetAuthUserDataType>) =>{
    debugger
    authAPI.getAuth()
        .then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}