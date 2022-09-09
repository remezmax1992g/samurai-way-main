import React from 'react';
import styles from "./Users.module.css";
import {UserType} from "../../Redux/users-reducer";
import User from "./User/User";

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

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p, i) => {
                    return <span key={i}
                                 className={props.currentPage === p ? `${styles.page} + ${styles.selectedPage}` : styles.page}
                                 onClick={() => props.onClickChangePage(p)}>{p}</span>
                })
                }
            </div>
            {
                props.users.map((u) => <div key={u.id}>
                    <User user={u}
                          followingProgress={props.followingProgress}
                          followToUser={props.followToUser}
                          unfollowToUser={props.unfollowToUser}
                          onClickChangePage={props.onClickChangePage}/>
                </div>)
            }

        </div>
    );
}

export default Users