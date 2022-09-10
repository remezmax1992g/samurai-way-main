import React from 'react';
import {Field, InjectedFormProps} from "redux-form";

export type FormDataType = {
    login: string,
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name="login" component="input"/>
            </div>
            <div>
                <Field placeholder="Password" name="password" component="input"/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default LoginForm;