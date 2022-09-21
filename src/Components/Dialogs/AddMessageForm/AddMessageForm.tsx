import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validation/validators";
import FormsControl from "../../../utilits/FormsControl/FormsControl";
export type AddMessageFormType = {
    textarea: string
}
const maxLength50 = maxLengthCreator(50)
const Textarea = FormsControl("textarea")
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message"
                       name="newMessageBody"
                       component={Textarea}
                validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export default AddMessageForm;