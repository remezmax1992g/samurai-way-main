import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsForDirect = {
    isAuth: boolean
}

let mapStateToPropsForDirect = (state: AppStateType): MapStateToPropsForDirect => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>){
    const RedirectComponent = (props: MapStateToPropsForDirect) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/Login"}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToPropsForDirect)(RedirectComponent)
}

