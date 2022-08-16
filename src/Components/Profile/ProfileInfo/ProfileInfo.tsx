import React from 'react';
import classes from "./ProfileInfo.module.css";
import myPhoto from "../../../assets/images/myPhoto.jpg"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.imgProfileInfo} src={myPhoto} alt="myPhoto"/>
            </div>
            <div className={classes.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;