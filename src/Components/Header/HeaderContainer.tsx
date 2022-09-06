import React from "react";
import Header from "./Header";
import {setAuthUserDataServer} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsForHeaderContainerType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsForHeaderContainerType = {
    setAuthUserDataServer:() => void
}
type HeaderContainerType = MapStateToPropsForHeaderContainerType & MapDispatchToPropsForHeaderContainerType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.setAuthUserDataServer()
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

export default connect(mapStateToProps, {setAuthUserDataServer})(HeaderContainer)