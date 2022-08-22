import React from "react"
import Profile from "./Profile";
import axios from "axios";
import {ProfileType, setProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsForProfileContainerType = {
    profile: ProfileType
}
type MapDispatchToPropsForProfileContainer = {
    setProfile:(profile: ProfileType) => void
}

type ProfileContainerType = MapStateToPropsForProfileContainerType & MapDispatchToPropsForProfileContainer

class ProfileContainer extends React.Component<ProfileContainerType>{

    constructor(props: ProfileContainerType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                console.log(response.data)
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

export default connect(mapStateToProps, {setProfile})(ProfileContainer)