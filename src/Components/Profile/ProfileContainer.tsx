import React from "react"
import Profile from "./Profile";
import {ProfileType, setProfileServer} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsForProfileContainerType = {
    profile: ProfileType
}
type MapDispatchToPropsForProfileContainer = {
    setProfileServer: (userID: string) => void
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
        this.props.setProfileServer(this.props.match.params.userId)
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

let WithUrlDataProfileContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileServer})(WithUrlDataProfileContainerComponent)