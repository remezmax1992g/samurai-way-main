import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.imgProfileInfo} src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="myPhoto"/>
            </div>
            <div className={classes.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;