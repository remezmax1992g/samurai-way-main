import React from 'react';
import {UserType} from "../../Redux/users-reducer";
import User from "./User/User";
import PagesOfUsers from "./PagesOfUsers/PagesOfUsers";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
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
        users,
        followingProgress,
        followToUser,
        unfollowToUser,
        onClickChangePage
    } = props


    return (
        <div>
            <div>
                <PagesOfUsers totalUsersCount={totalUsersCount}
                              pageSize={pageSize}
                              currentPage={currentPage}
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