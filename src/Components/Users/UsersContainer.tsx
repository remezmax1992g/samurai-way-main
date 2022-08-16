import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followToUserActionCreator, setUsersActionCreator,
    unfollowToUserActionCreator,
    UsersType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsForUsersContainerType = {
    users: Array<UsersType>
}
type MapDispatchToPropsForUsersContainerType = {
    followToUser: (userID:string) => void,
    unfollowToUser: (userID:string) => void,
    setUsers: (users: Array<UsersType>) => void
}

export type UsersContainerType = MapDispatchToPropsForUsersContainerType & MapStateToPropsForUsersContainerType

let mapStateToProps = (state:AppStateType): MapStateToPropsForUsersContainerType => {
    return{
        users: state.userPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForUsersContainerType => {
    return{
        followToUser: (userID: string) => dispatch(followToUserActionCreator(userID)),
        unfollowToUser: (userID: string) => dispatch(unfollowToUserActionCreator(userID)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersActionCreator(users))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;