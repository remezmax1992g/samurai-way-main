import React, {ComponentType} from "react"
import Profile from "./Profile";
import {getProfile, ProfileType} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStateToPropsForProfileContainerType = {
    profile: ProfileType
}
type MapDispatchToPropsForProfileContainer = {
    getProfile: (userID: string) => void
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
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsForProfileContainerType => {
    return {
        profile: state.profilePage.profile
    }
}
export default compose<ComponentType>(connect(mapStateToProps, {getProfile}),withRouter,WithAuthRedirect)(ProfileContainer)