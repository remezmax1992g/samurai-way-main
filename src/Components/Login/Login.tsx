import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createLogin} from "../../Redux/auth-reducer";
import {useFormik} from "formik";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../Redux/redux-store";

const Login = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(createLogin(values))
        },
        validate: values => {
            if (!values.email) {
                return  {email: "Email is required"}
            }
            if (!values.password) {
               return {password: "Password is required"}
            }
        }
    })
    if (isLogin) {
        return <Redirect to={"/Profile"}/>
    }
    return( <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="email"
                       name="email"
                       placeholder="Email"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                />
            </div>
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <div>
                <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                />
                <span>Remember me</span>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;