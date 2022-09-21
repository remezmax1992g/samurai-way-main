import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {required} from "../../../utilits/validation/validators";
import FormsControl from "../../../utilits/FormsControl/FormsControl";

export type FormDataType = {
    login: string,
    password: string
    rememberMe: boolean
}
const Input = FormsControl("input")
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login"
                       name="login"
                       component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       component={Input}
                       validate={required}
                />
            </div>
            <div>
                <Field type="checkbox"
                       name="rememberMe"
                       component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export default LoginForm;