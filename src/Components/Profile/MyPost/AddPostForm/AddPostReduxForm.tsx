import {reduxForm} from "redux-form";
import AddPostForm, {AddPostFormType} from "./AddPostForm";

export const AddPostReduxForm = reduxForm<AddPostFormType>({form:"profileAddPostForm"})(AddPostForm)