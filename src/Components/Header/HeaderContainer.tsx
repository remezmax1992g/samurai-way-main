import React from "react";
import Header from "./Header";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {usersAPI} from "../../api/api";

type MapStateToPropsForHeaderContainerType = {
    isAuth: boolean
    login: string
}
type MapDispatchToPropsForHeaderContainerType = {
    setAuthUserData:(id:number, email: string, login: string) => void
}
type HeaderContainerType = MapStateToPropsForHeaderContainerType & MapDispatchToPropsForHeaderContainerType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        usersAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)