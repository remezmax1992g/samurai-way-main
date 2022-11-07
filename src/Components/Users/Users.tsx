import React from 'react';
import {UserType} from "../../Redux/reducers/users-reducer";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    users: Array<UserType>
    followingProgress: Array<number>
    followToUser: (id: number) => void
    unfollowToUser: (id: number) => void
    onClickChangePage: (page: number) => void
}

const Users = (props: UsersPropsType) => {
    const {
        totalUsersCount,
        pageSize,
        currentPage,
        portionSize,
        users,
        followingProgress,
        followToUser,
        unfollowToUser,
        onClickChangePage
    } = props


    return (
        <div>
            <div>
                <Paginator totalItemsCount={totalUsersCount}
                           pageSize={pageSize}
                           currentPage={currentPage}
                           portionSize={portionSize}
                           onClickChangePage={onClickChangePage}/>
            </div>
            <div>{
                users.map((u) => {
                    return <div key={u.id}>
                        <User user={u}
                              followingProgress={followingProgress}
                              followToUser={followToUser}
                              unfollowToUser={unfollowToUser}/>
                    </div>
                })
            }</div>

        </div>
    );
}

export default Users