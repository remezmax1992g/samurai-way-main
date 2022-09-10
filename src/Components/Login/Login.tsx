import React from 'react';
import {LoginReduxForm} from "./LoginForm/LoginReduxForm";
import {FormDataType} from "./LoginForm/LoginForm";

const Login = () => {
    const onSubmit = (formData: FormDataType) =>{
        console.log((formData))
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;