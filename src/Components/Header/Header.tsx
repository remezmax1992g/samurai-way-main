import React from 'react';
import classes from "./Header.module.css";
import NavBar from "../NavBar/NavBar";
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean,
    login: string | null
    photo: string
    logout: () => void
}

const Header = (props: HeaderType) => {

    return (
        <header className={classes.header}>
            <NavBar/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div className={classes.login}>
                        <span>{props.login} </span>
                        <img className={classes.avatar} src={props.photo}/>
                        <button onClick={props.logout}>Logout</button>
                    </div>
                    : <NavLink to="/Login"><button>Login</button></NavLink>}
            </div>
        </header>
    );
};

export default Header;