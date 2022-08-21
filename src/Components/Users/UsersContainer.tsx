import React from 'react';
import {connect} from "react-redux";
import {
    followToUserActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator,
    unfollowToUserActionCreator,
    UsersType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";

type MapStateToPropsForUsersContainerType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsForUsersContainerType = {
    followToUser: (userID:number) => void,
    unfollowToUser: (userID:number) => void,
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersContainerType = MapDispatchToPropsForUsersContainerType & MapStateToPropsForUsersContainerType

let mapStateToProps = (state:AppStateType): MapStateToPropsForUsersContainerType => {
    return{
        users: state.userPage.items,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForUsersContainerType => {
    return{
        followToUser: (userID: number) => dispatch(followToUserActionCreator(userID)),
        unfollowToUser: (userID: number) => dispatch(unfollowToUserActionCreator(userID)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageActionCreator(currentPage)),
        setTotalUsersCount: (totalCount:number) => dispatch(setTotalUsersCountActionCreator(totalCount))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;