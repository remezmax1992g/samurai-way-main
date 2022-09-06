import React from 'react';
import {connect} from "react-redux";
import {
    changePageOfUsers,
    follow,
    getUsers,
    unfollow,
    UsersType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsForUsersContainerType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
type MapDispatchToPropsForUsersContainerType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
    changePageOfUsers: (currentPage: number, pageSize: number) => void
}
export type UsersContainerType = MapDispatchToPropsForUsersContainerType & MapStateToPropsForUsersContainerType

class UsersContainer extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickChangePageHandler = (currentPage: number) => {
        this.props.changePageOfUsers(currentPage, this.props.pageSize)
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
                         followToUser={this.props.follow}
                         unfollowToUser={this.props.unfollow}
                         onClickChangePage={this.onClickChangePageHandler}/>}
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
    {follow, unfollow, getUsers, changePageOfUsers})(UsersContainer);
