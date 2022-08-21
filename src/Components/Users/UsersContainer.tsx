import React from 'react';
import {connect} from "react-redux";
import {
    followToUserActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator,
    unfollowToUserActionCreator,
    UsersType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import Users from "./Users";

type MapStateToPropsForUsersContainerType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsForUsersContainerType = {
    followToUser: (userID: number) => void,
    unfollowToUser: (userID: number) => void,
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersContainerType = MapDispatchToPropsForUsersContainerType & MapStateToPropsForUsersContainerType

class UsersContainer extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onClickChangePage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      followToUser={this.props.followToUser}
                      unfollowToUser={this.props.unfollowToUser}
                      onClickChangePage={this.onClickChangePage}/>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsForUsersContainerType => {
    return {
        users: state.userPage.items,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForUsersContainerType => {
    return {
        followToUser: (userID: number) => dispatch(followToUserActionCreator(userID)),
        unfollowToUser: (userID: number) => dispatch(unfollowToUserActionCreator(userID)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageActionCreator(currentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountActionCreator(totalCount))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
