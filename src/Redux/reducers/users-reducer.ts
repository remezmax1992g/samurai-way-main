import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";

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

const FOLLOW_TO_USER = "FOLLOW-TO-USER"
const UNFOLLOW_TO_USER = "UNFOLLOW-TO-USER"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"


let initialState: UsersPageType = {
    items: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

const usersReducer = (state: UsersPageType = initialState, action: UserActionType): UsersPageType => {
    switch (action.type) {
        case SET_USERS:
            return {...state, items: action.payload.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload.totalCount}
        case FOLLOW_TO_USER:
            return {...state, items: state.items.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        case UNFOLLOW_TO_USER:
            return {...state, items: state.items.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
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
//actionCreator
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
//thunks
export const requestUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<UserActionType>) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}
export const changePageOfUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<UserActionType>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage,))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
}
export const follow = (userID: number) => (dispatch: Dispatch<UserActionType>) => {
    dispatch(toggleIsFollowingProgress(userID, true))
    usersAPI.postFollow(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followToUser(userID))
            }
            dispatch(toggleIsFollowingProgress(userID, false))
        })
}
export const unfollow = (userID: number) => (dispatch: Dispatch<UserActionType>) => {
    dispatch(toggleIsFollowingProgress(userID, true))
    usersAPI.deleteFollow(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowToUser(userID))
            }
            dispatch(toggleIsFollowingProgress(userID, false))
        })
}

export default usersReducer