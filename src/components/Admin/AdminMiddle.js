import React from 'react';
import {Container} from "reactstrap";
import AddFrom from "../AddFrom";

const AdminMiddle = () => {
    return (
        <div className='AdminMiddle'>
            <Container>
                <h2 className='my-3'>Add footballers</h2>
                <AddFrom/>
            </Container>
        </div>
    );
};

export default AdminMiddle;
