import React from 'react';
import style from './FormsControl.module.css'

const FormsControl = (Element: string) => ({input, meta: {touched, error}, ...props}: any) => {
    const hasError = touched && error
    return (
        <div>
            <div className={style.textarea + " " + (hasError ? style.error : "")}>
                <Element {...input} {...props}/>
            </div>
            {hasError && <span className={style.textError}>{error}</span>}
        </div>
    );
};

export default FormsControl;