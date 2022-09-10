import {reduxForm} from "redux-form";
import LoginForm, {FormDataType} from "./LoginForm";

export const LoginReduxForm = reduxForm<FormDataType>({form:"login"})(LoginForm)