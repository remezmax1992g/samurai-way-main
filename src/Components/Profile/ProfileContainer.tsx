import React, {ComponentType} from "react"
import Profile from "./Profile";
import {getProfile, getStatus, ProfilePageType, ProfileType, savePhoto} from "../../Redux/reducers/profile-reducer";
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
    savePhoto: (file: File) => void
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
    refreshProfile(){
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = String(this.props.authUserID)
        }
        this.props.getProfile(userID)
        this.props.getStatus(userID)
    }

    componentDidMount() {
       this.refreshProfile()
    }
    componentDidUpdate(prevProps: CommonProfileContainerPropsType, prevState: ProfilePageType) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }

    }

    render() {
        return <Profile profile={this.props.profile} isOwner={this.props.match.params.userId === String(this.props.authUserID)} savePhoto={this.props.savePhoto}/>;
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
    getStatus,
    savePhoto,
}), withRouter, WithAuthRedirect)(ProfileContainer)