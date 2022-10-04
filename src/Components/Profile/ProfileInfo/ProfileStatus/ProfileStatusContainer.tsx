import React from 'react';
import {connect} from "react-redux";
import {updateStatus} from "../../../../Redux/reducers/profile-reducer";
import ProfileStatus from "./ProfileStatus";
import {RootStateType} from "../../../../Redux/redux-store";

type MapStateToPropsForMyProfileStatusContainerType = {
    newStatusText: string
}

let mapStateToProps = (state: RootStateType): MapStateToPropsForMyProfileStatusContainerType => {
    return {
        newStatusText: state.profilePage.newStatusText
    }
}

const ProfileStatusContainer = connect(mapStateToProps, {updateStatus})(ProfileStatus)

export default ProfileStatusContainer;