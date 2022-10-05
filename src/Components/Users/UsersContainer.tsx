import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {
    changePageOfUsers,
    follow,
    requestUsers,
    unfollow, UserType,
} from "../../Redux/reducers/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {RootStateType} from "../../Redux/redux-store";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/selectors/users-selector";

type MapStateToPropsForUsersContainerType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
type MapDispatchToPropsForUsersContainerType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    requestUsers: (currentPage: number, pageSize: number) => void
    changePageOfUsers: (currentPage: number, pageSize: number) => void
}
export type UsersContainerType = MapDispatchToPropsForUsersContainerType & MapStateToPropsForUsersContainerType

class UsersContainer extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onClickChangePageHandler = (currentPage: number) => {
        const {pageSize} = this.props;
        this.props.changePageOfUsers(currentPage, pageSize);
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

let mapStateToProps = (state: RootStateType): MapStateToPropsForUsersContainerType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,
        {follow, unfollow, requestUsers, changePageOfUsers}))
(UsersContainer)
