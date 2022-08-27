import React from "react"
import Profile from "./Profile";
import axios from "axios";
import {ProfileType, setProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsForProfileContainerType = {
    profile: ProfileType
}
type MapDispatchToPropsForProfileContainer = {
    setProfile:(profile: ProfileType) => void
}
type ProfileContainerType = MapStateToPropsForProfileContainerType & MapDispatchToPropsForProfileContainer
type PathParamsType = {
    userId: string
}
type CommonProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<CommonProfileContainerPropsType>{

    constructor(props: CommonProfileContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        let userID = this.props.match.params.userId
        if(!userID){
            userID="2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsForProfileContainerType  => {
        return{
            profile: state.profilePage.profile
        }
}

let WithUrlDataProfileContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfile})(WithUrlDataProfileContainerComponent)