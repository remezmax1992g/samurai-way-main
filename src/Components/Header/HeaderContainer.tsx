import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {deleteLogin, getAuthUserData} from "../../Redux/auth-reducer";

type MapStateToPropsForHeaderContainerType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsForHeaderContainerType = {
    getAuthUserData:() => void
    deleteLogin:() => void
}
type HeaderContainerType = MapStateToPropsForHeaderContainerType & MapDispatchToPropsForHeaderContainerType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.deleteLogin}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

export default connect(mapStateToProps, {getAuthUserData, deleteLogin})(HeaderContainer)