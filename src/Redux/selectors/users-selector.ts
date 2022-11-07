import {RootStateType} from "../redux-store";
import {UserType} from "../reducers/users-reducer";
import {createSelector} from "reselect";
const getUsersSelector = (state: RootStateType): Array<UserType> => {return state.userPage.items}
export const getUsers = createSelector(getUsersSelector, (users: Array<UserType>) => { return users})
export const getPageSize = (state: RootStateType): number => {return state.userPage.pageSize}
export const getTotalUsersCount = (state: RootStateType): number => {return state.userPage.totalUsersCount}
export const getCurrentPage = (state: RootStateType): number => {return state.userPage.currentPage}
export const getPortionSize = (state: RootStateType): number => {return state.userPage.portionSize}
export const getIsFetching = (state: RootStateType): boolean => {return state.userPage.isFetching}
export const getFollowingProgress = (state: RootStateType): Array<number> => {return state.userPage.followingProgress}