import React from 'react';
import {connect} from "react-redux";
import {editStatusText} from "../../../../Redux/profile-reducer";
import {AppStateType} from "../../../../Redux/redux-store";
import ProfileStatus from "./ProfileStatus";

type MapStateToPropsForMyProfileStatusContainerType = {
    newStatusText: string
}

let mapStateToProps = (state: AppStateType): MapStateToPropsForMyProfileStatusContainerType => {
    return {
        newStatusText: state.profilePage.newStatusText
    }
}

const ProfileStatusContainer = connect(mapStateToProps, {editStatusText})(ProfileStatus)

export default ProfileStatusContainer;