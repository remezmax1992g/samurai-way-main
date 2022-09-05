import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    followingProgress: Array<number>
    followToUser: (id: number) => any
    unfollowToUser: (id: number) => any
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
                    <span>
                        <div>
                            <NavLink to={"/Profile/" + u.id}><img className={styles.photoUsers}
                                                                  src={u.photos.small ? u.photos.small : userPhoto}
                                                                  alt={"photoUser"}/></NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollowToUser(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.followToUser(u.id)
                                }}>Follow</button>}
                                </div>
                                </span>
                    <span>
                                <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                </span>
                        {/*<span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>*/}
                                </span>
                </div>)
            }

        </div>
    );
}

export default Users