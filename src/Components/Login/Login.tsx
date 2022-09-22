import React from 'react';
import {LoginReduxForm} from "./LoginForm/LoginReduxForm";
import {FormDataType} from "./LoginForm/LoginForm";
import {createLogin} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
type MapDispatchToPropsForLoginType = {
    createLogin: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsForLoginType = {
    isAuth: boolean
}
type LoginType = MapStateToPropsForLoginType & MapDispatchToPropsForLoginType

const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) =>{
       props.createLogin(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={"/Profile"}/>
    }
    else {
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        );
    }
};
const mapStateToProps = (state: AppStateType) =>{
    return{
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {createLogin})(Login);