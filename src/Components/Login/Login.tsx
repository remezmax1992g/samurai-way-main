import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {createLogin} from "../../Redux/auth-reducer";
import {useFormik} from "formik";
import {Redirect} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
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
                return {email: "Email is required"}
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
            {formik.errors.email ? formik.errors.email : null}
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            {formik.errors.password ? formik.errors.password : null}
            <div>
                <input
                    type="checkbox"
                    name="rememberMe"
                    placeholder="Remember me"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                />
                Remember me
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;