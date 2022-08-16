import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";
import {UsersContainerType} from "./UsersContainer";

class Users extends React.Component<UsersContainerType> {
    constructor(props:UsersContainerType) {
        super(props);
    }
    componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map((u) => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.photoUsers} src={u.photos.small ? u.photos.small : userPhoto}
                                 alt={"photoUser"}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => this.props.unfollowToUser(u.id)}>Unfollow</button> :
                                <button onClick={() => this.props.followToUser(u.id)}>Follow</button>}
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
}

export default Users