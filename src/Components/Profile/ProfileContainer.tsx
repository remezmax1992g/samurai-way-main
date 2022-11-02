import React, {ComponentType} from "react"
import Profile from "./Profile";
import {getProfile, getStatus, ProfileType} from "../../Redux/reducers/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {RootStateType} from "../../Redux/redux-store";

type MapStateToPropsForProfileContainerType = {
    profile: ProfileType
    authUserID: number | null
}
type MapDispatchToPropsForProfileContainer = {
    getProfile: (userID: string) => void
    getStatus: (userID: string) => void
}
type ProfileContainerType = MapStateToPropsForProfileContainerType & MapDispatchToPropsForProfileContainer
type PathParamsType = {
    userId: string
}
export type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {

    constructor(props: CommonProfileContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = String(this.props.authUserID)
        }
            this.props.getProfile(userID)
            this.props.getStatus(userID)
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsForProfileContainerType => {
    return {
        profile: state.profilePage.profile,
        authUserID: state.auth.userID
    }
}
export default compose<ComponentType>(connect(mapStateToProps, {
    getProfile,
    getStatus
}), withRouter, WithAuthRedirect)(ProfileContainer)