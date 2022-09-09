import React from 'react';
import {connect} from "react-redux";
import {updateStatus} from "../../../../Redux/profile-reducer";
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

const ProfileStatusContainer = connect(mapStateToProps, {updateStatus})(ProfileStatus)

export default ProfileStatusContainer;