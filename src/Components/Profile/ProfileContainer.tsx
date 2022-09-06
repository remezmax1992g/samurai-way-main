import React from "react"
import Profile from "./Profile";
import {getProfile, ProfileType} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsForProfileContainerType = {
    profile: ProfileType
    isAuth: boolean
}
type MapDispatchToPropsForProfileContainer = {
    getProfile: (userID: string) => void
}
type ProfileContainerType = MapStateToPropsForProfileContainerType & MapDispatchToPropsForProfileContainer
type PathParamsType = {
    userId: string
}
type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {

    constructor(props: CommonProfileContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/Login"}/>
        return <Profile profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsForProfileContainerType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataProfileContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(WithUrlDataProfileContainerComponent)