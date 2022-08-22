import React from 'react';
import classes from "./ProfileInfo.module.css";
import myPhoto from "../../../assets/images/myPhoto.jpg"
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType

}

const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile){
        return <div>
            <Preloader/>
        </div>
    }
    return (
        <div>
            {/*<div>
                <img className={classes.imgProfileInfo} src={myPhoto} alt="myPhoto"/>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <div><img src={props.profile.photos.large}/></div>
                <div>{props.profile.fullName}</div>
                <h3>Description</h3>
                <div>{props.profile.lookingForAJobDescription}</div>

            </div>
        </div>
    );
};

export default ProfileInfo;