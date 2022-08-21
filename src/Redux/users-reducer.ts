import {ActionType} from "./store";

export type UsersType = {
    name: string
    id: number
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}
type LocationType = {
    city: string,
    country: string
}

export type UsersPageType = {
    items: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type FollowToUserActionCreatorType = ReturnType<typeof followToUserActionCreator>
export type UnfollowToUserActionCreatorType = ReturnType<typeof unfollowToUserActionCreator>
export type SetUsersActionCreatorType = ReturnType<typeof setUsersActionCreator>
export type SetCurrentPageActionCreatorType = ReturnType<typeof setCurrentPageActionCreator>
export type SetTotalUsersCounterActionCreatorType = ReturnType<typeof setTotalUsersCountActionCreator>
export type ToggleIsFetchingActionCreatorType = ReturnType<typeof toggleIsFetchingActionCreator>

const FOLLOW_TO_USER = "FOLLOW-TO-USER"
const UNFOLLOW_TO_USER = "UNFOLLOW-TO-USER"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"


let initialState: UsersPageType = {
    items: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
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
        default:
            return state
    }
}
//actionCreator
export const followToUserActionCreator = (userID: number) => ({
    type: FOLLOW_TO_USER,
    payload: {userID}
}) as const
export const unfollowToUserActionCreator = (userID: number) => ({
    type: UNFOLLOW_TO_USER,
    payload: {userID}
}) as const
export const setUsersActionCreator = (users: Array<UsersType>) => ({
    type: SET_USERS,
    payload: {users}
}) as const
export const setCurrentPageActionCreator = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    payload: {currentPage}
}) as const
export const setTotalUsersCountActionCreator = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {totalCount}
}) as const
export const toggleIsFetchingActionCreator = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {isFetching}
}) as const

export default usersReducer