import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getAuthUserData} from "../../Redux/auth-reducer";

type MapStateToPropsForHeaderContainerType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsForHeaderContainerType = {
    getAuthUserData:() => void
}
type HeaderContainerType = MapStateToPropsForHeaderContainerType & MapDispatchToPropsForHeaderContainerType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)