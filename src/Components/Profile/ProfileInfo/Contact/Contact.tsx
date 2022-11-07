import React from 'react';
import s from "./Contact.module.css"
type ContactType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}:ContactType) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    );
};

export default Contact;