import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {deleteLogin} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/redux-store";

type MapStateToPropsForHeaderContainerType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsForHeaderContainerType = {
    deleteLogin:() => void
}
type HeaderContainerType = MapStateToPropsForHeaderContainerType & MapDispatchToPropsForHeaderContainerType

class HeaderContainer extends React.Component<HeaderContainerType> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.deleteLogin}/>
    }
}

const mapStateToProps = (state: RootStateType) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

export default connect(mapStateToProps, {deleteLogin})(HeaderContainer)