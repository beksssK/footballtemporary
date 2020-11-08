import React from 'react';
//
import StaffMiddle from "../../components/Staff/StaffMiddle";
import PageTop from "../../components/Page/PageTop/PageTop";
import "./Staff.css";

const Staff = () => {
    return (
        <>
            <PageTop classname="Staff" title="Our Staff"/>
            <StaffMiddle/>
        </>
    );
};

export default Staff;
