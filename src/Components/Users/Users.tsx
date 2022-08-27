import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
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
                    <span>
                        <div>
                            <NavLink to={"/Profile/" + u.id}><img className={styles.photoUsers}
                                                                  src={u.photos.small ? u.photos.small : userPhoto}
                                                                  alt={"photoUser"}/></NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "8a3ca6c1-dfb0-48cf-8608-08d82687d761"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollowToUser(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "8a3ca6c1-dfb0-48cf-8608-08d82687d761"
                                        }
                                    })
                                        .then(response => {
                                            console.log(response)
                                            if (response.data.resultCode === 0) {
                                                props.followToUser(u.id)
                                            }
                                        })
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