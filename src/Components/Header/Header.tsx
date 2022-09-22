import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean,
    login: string | null
    logout: () => void
}

const Header = (props: HeaderType) => {
    return (
        <header className={classes.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnDz08lUWsDll_7m1NYkHV_U2gNmfvTWCGg&usqp=CAU"/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={"/Login"}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;