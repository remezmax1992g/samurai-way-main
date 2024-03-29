import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createLogin} from "../../Redux/reducers/auth-reducer";
import {useFormik} from "formik";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../Redux/redux-store";

type LoginFieldsType = {
    email?: string
    password?: string
}
const Login = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const userID = useSelector<RootStateType, number | null>(state => state.auth.userID)
    const captchaURL = useSelector<RootStateType, string>(state => state.auth.captchaURL)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
            captcha: ""
        },
        onSubmit: values => {
            dispatch(createLogin(values))
        },
        validate: values => {
            const errors: LoginFieldsType = {}
            if (!values.email) {
                errors.email = 'Email is required'
            }
            if (!values.password) {
                errors.password = 'Password is required'
            }
            return errors
        }
    })
    if (isLogin) {
        return <Redirect to={`/Profile/${userID}`}/>
    }
    return (
        <div>
            <label>
                <p>
                    To log in get registered <a href="https://social-network.samuraijs.com/"
                                                target={"_blank"}>here</a>
                </p>
                <p>
                    or use common test account credentials:
                </p>
                <p>
                    Email: free@samuraijs.com
                </p>
                <p>
                    Password: free
                </p>
            </label>
            <form onSubmit={formik.handleSubmit}>
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
                <div>
                    {captchaURL &&
                        <img src={captchaURL}/>}
                    {captchaURL &&
                        <div>
                            <input type="text"
                                   name="captcha"
                                   placeholder="Enter captcha"
                                   onChange={formik.handleChange}
                                   value={formik.values.captcha}/>
                        </div>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;