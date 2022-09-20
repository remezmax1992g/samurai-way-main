import {reduxForm} from "redux-form";
import AddMessageForm, {AddMessageFormType} from "./AddMessageForm";

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({form:"dialogAddMessageForm"})(AddMessageForm)