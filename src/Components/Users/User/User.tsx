import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import {UserType} from "../../../Redux/reducers/users-reducer";

type UserPropsType = {
    user: UserType
    followingProgress: Array<number>
    followToUser: (id: number) => void
    unfollowToUser: (id: number) => void
}

const User = (props: UserPropsType) => {
    const {user, followingProgress, followToUser, unfollowToUser} = props
    const changeStatusOfUser = user.followed
            ? <button disabled={followingProgress.some(id => id === user.id)}
                      onClick={() => {
                          unfollowToUser(user.id)
                      }}>Unfollow</button>
            : <button disabled={followingProgress.some(id => id === user.id)}
                      onClick={() => {
                          followToUser(user.id)
                      }}>Follow</button>

    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/Profile/" + props.user.id}>
                        <img className={styles.photoUsers}
                             src={props.user.photos.small ? props.user.photos.small : userPhoto}
                             alt={"photoUser"}/>
                    </NavLink>
                </div>
                <div>
                    {changeStatusOfUser}
                </div>
            </span>
            <span>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </span>
        </div>)}
export default User