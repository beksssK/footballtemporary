import React, {useState} from 'react';
import AdminTop from "../../components/Admin/AdminTop";
import AdminMiddle from "../../components/Admin/AdminMiddle";
import {Button, Container, Form} from "reactstrap";
import FormElement from "../../components/UI/Form/FormElement";
const check = {userName: 'allen', password: 'allenhnbm'};
const Admin = (props) => {
    const [adminForm, setAdminForm] = useState({
        userName: '',
        password: ''
    });
    const [allowAdmin, setAllowAdmin] = useState(false);
    const checkData = (e) => {
        e.preventDefault();
        if (check.userName === adminForm.userName && check.password === adminForm.password) {
            setAllowAdmin(true);
        } else {
          alert("Unauthorized user");
          setTimeout(() => {
              props.history.push('/');
          }, 2000);
        }
    };
    if(allowAdmin) {
        return (
            <>
                <AdminTop/>
                <AdminMiddle/>
            </>
        );
    } else {
        return (
            <Container className='pt-5'>
                <Form onSubmit={checkData} className='py-5 mt-5'>
                    <FormElement
                        propertyName='userName'
                        title='Username' value={adminForm.userName}
                        onChange={(e) => setAdminForm({...adminForm, userName: e.target.value})}
                    />
                    <FormElement
                        propertyName='password' title='Password'
                        type='password'
                        value={adminForm.password}
                        onChange={(e) => setAdminForm({...adminForm, password: e.target.value})}
                    />
                    <Button color='info' type='submit'>Submit</Button>
                </Form>

            </Container>
        )
    }

};

export default Admin;
