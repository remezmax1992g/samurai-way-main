import {RootStateType} from "../redux-store";
import {UserType} from "../reducers/users-reducer";

export const getUsers = (state: RootStateType): Array<UserType> => {return state.userPage.items}
export const getPageSize = (state: RootStateType): number => {return state.userPage.pageSize}
export const getTotalUsersCount = (state: RootStateType): number => {return state.userPage.totalUsersCount}
export const getCurrentPage = (state: RootStateType): number => {return state.userPage.currentPage}
export const getIsFetching = (state: RootStateType): boolean => {return state.userPage.isFetching}
export const getFollowingProgress = (state: RootStateType): Array<number> => {return state.userPage.followingProgress}