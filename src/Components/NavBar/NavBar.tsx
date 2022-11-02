import React from 'react';
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";

const NavBar = () => {
    const userID = useSelector<RootStateType, number| null>(state => state.auth.userID)
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={`/Profile/${userID}`} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/Users"} activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div >
            <div className={classes.item}>
                <NavLink to="/News" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;