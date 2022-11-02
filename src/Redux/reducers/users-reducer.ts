import {usersAPI} from "../../api/api";
import {AppDispatch, AppThunk} from "../redux-store";
import {updateObjInArray} from "../../utilits/helper/helper";

export type UserType = {
    name: string
    id: number
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}

export type UsersPageType = {
    items: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

export type UserActionType =
    | ReturnType<typeof followToUser>
    | ReturnType<typeof unfollowToUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

const FOLLOW_TO_USER = "users/FOLLOW-TO-USER"
const UNFOLLOW_TO_USER = "users/UNFOLLOW-TO-USER"
const SET_USERS = "users/SET-USERS"
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS"


let initialState: UsersPageType = {
    items: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UserActionType): UsersPageType => {
    switch (action.type) {
        case SET_USERS:
            return {...state, items: action.payload.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload.totalCount}
        case FOLLOW_TO_USER:
            return {...state, items: updateObjInArray(state.items, action.payload.userID, {followed: true})}
        case UNFOLLOW_TO_USER:
            return {...state, items: updateObjInArray(state.items, action.payload.userID, {followed: false})}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.payload.isFetching ? [...state.followingProgress, action.payload.userID] : state.followingProgress.filter(id => id !== action.payload.userID)
            }
        default:
            return state
    }
}
//actionCreators
export const followToUser = (userID: number) => ({
    type: FOLLOW_TO_USER,
    payload: {userID}
}) as const
export const unfollowToUser = (userID: number) => ({
    type: UNFOLLOW_TO_USER,
    payload: {userID}
}) as const
export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    payload: {users}
}) as const
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    payload: {currentPage}
}) as const
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {totalCount}
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {isFetching}
}) as const
export const toggleIsFollowingProgress = (userID: number, isFetching: boolean) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {userID, isFetching}
}) as const
//thunkCreators
export const requestUsers = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(toggleIsFetching(true))
    const res = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
    dispatch(setTotalUsersCount(res.totalCount))
}
export const changePageOfUsers = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const res = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))

}
const flowFollowAndUnfollow = async (dispatch: AppDispatch, userID: number, apiMethod: Function, actionCreator: Function) => {
    dispatch(toggleIsFollowingProgress(userID, true))
    const res = await apiMethod(userID)
    if (res.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleIsFollowingProgress(userID, false))
}
export const follow = (userID: number): AppThunk => async dispatch => {
    flowFollowAndUnfollow(dispatch, userID, usersAPI.postFollow.bind(usersAPI), followToUser)
}
export const unfollow = (userID: number): AppThunk => async dispatch => {
    flowFollowAndUnfollow(dispatch, userID, usersAPI.deleteFollow.bind(usersAPI), unfollowToUser)
}