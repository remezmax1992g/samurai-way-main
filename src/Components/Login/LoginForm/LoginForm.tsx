import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {required} from "../../../utilits/validation/validators";
import FormsControl from "../../../utilits/FormsControl/FormsControl";

export type FormDataType = {
    email: string,
    password: string
    rememberMe: boolean
}
const Input = FormsControl("input")
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email"
                       name="email"
                       component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       component={Input}
                       validate={required}
                       type="password"
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