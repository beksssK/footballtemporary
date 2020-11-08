import React from 'react';
//
import ContactMiddle from "../../components/Contact/ContactMiddle";
import ContactBottom from "../../components/Contact/ContactBottom";
import PageTop from "../../components/Page/PageTop/PageTop";
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <PageTop classname="Contact" title="Contacts"/>
            <ContactMiddle/>
            <ContactBottom/>
        </>
    );
};

export default Contact;
