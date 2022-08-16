import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";

const Users = (props: UsersContainerType) => {
   /* if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data)
        })
    }*/
    return (
        <div>
            {
                props.users.map((u) => <div key={u.id}>
                    <span>
                        <div>
                            <img className = {styles.photoUsers} src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.follow ? <button onClick={() => props.unfollowToUser(u.id)}>Unfollow</button> : <button onClick={() => props.followToUser(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }

        </div>
    );
};

export default Users;