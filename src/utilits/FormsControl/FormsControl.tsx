import React from 'react';
import style from './FormsControl.module.css'

const FormsControl = (Element: string) => ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div className={style.textarea + " " + (hasError ? style.error : "")}>
                <Element {...input} {...props}/>
            </div>
            {hasError && <span className={style.textError}>{meta.error}</span>}
        </div>
    );
};

export default FormsControl;