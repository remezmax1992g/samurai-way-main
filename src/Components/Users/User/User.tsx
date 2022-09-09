import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import {UserType} from "../../../Redux/users-reducer";

type UserPropsType = {
    user: UserType
    followingProgress: Array<number>
    followToUser: (id: number) => void
    unfollowToUser: (id: number) => void
    onClickChangePage: (page: number) => void
}

const User = (props: UserPropsType) => {
    const changeStatusOfUser = props.user.followed
            ? <button disabled={props.followingProgress.some(id => id === props.user.id)}
                      onClick={() => {
                          props.unfollowToUser(props.user.id)
                      }}>Unfollow</button>
            : <button disabled={props.followingProgress.some(id => id === props.user.id)}
                      onClick={() => {
                          props.followToUser(props.user.id)
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