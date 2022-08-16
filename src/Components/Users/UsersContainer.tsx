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
    followToUser: (userID:number) => void,
    unfollowToUser: (userID:number) => void,
    setUsers: (users: Array<UsersType>) => void
}

export type UsersContainerType = MapDispatchToPropsForUsersContainerType & MapStateToPropsForUsersContainerType

let mapStateToProps = (state:AppStateType): MapStateToPropsForUsersContainerType => {
    return{
        users: state.userPage.items
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForUsersContainerType => {
    return{
        followToUser: (userID: number) => dispatch(followToUserActionCreator(userID)),
        unfollowToUser: (userID: number) => dispatch(unfollowToUserActionCreator(userID)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersActionCreator(users))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;