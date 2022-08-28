import React from 'react';
import {connect} from "react-redux";
import {
    followToUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollowToUser,
    UsersType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type MapStateToPropsForUsersContainerType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
type MapDispatchToPropsForUsersContainerType = {
    followToUser: (userID: number) => void,
    unfollowToUser: (userID: number) => void,
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress:(userID: number, isFetching: boolean) => void
}
export type UsersContainerType = MapDispatchToPropsForUsersContainerType & MapStateToPropsForUsersContainerType

class UsersContainer extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onClickChangePage = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         followingProgress={this.props.followingProgress}
                         followToUser={this.props.followToUser}
                         unfollowToUser={this.props.unfollowToUser}
                         toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                         onClickChangePage={this.onClickChangePage}/>}
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsForUsersContainerType => {
    return {
        users: state.userPage.items,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingProgress: state.userPage.followingProgress
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsForUsersContainerType => {
    return {
        followToUser: (userID: number) => dispatch(followToUserActionCreator(userID)),
        unfollowToUser: (userID: number) => dispatch(unfollowToUserActionCreator(userID)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageActionCreator(currentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountActionCreator(totalCount)),
        toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingActionCreator(isFetching))
    }
}*/


export default connect(mapStateToProps,
    {followToUser, unfollowToUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress})(UsersContainer);
