import React, {useState} from 'react';
import {Button, Container} from "reactstrap";
import AddForm from "../Form/AddForm";
import axiosApi from "../../axiosApi";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../store/actions/usersActions";

const AdminMiddle = () => {
    const dispatch = useDispatch();
    const [formSuccess, setFormSuccess] = useState({is: false, message: ''});
    const [formError, setFormError] = useState({is: false, message: ''});
    const [postButton, setPostButton] = useState(false);

    const postPlayer = async (event, form) => {
        event.preventDefault();
        form.videoLink = form.videoLink.substring(form.videoLink.length - 11);
        const formData = new FormData();
        Object.keys(form).forEach(key => {
            formData.append(key, form[key]);
        });
        try{
            setPostButton(true);
            await axiosApi.post('/footballers', formData);
            setFormError({...formError, is: false, message: ''});
            setFormSuccess({...formSuccess, is: true, message: 'Footballer is added successfully'});
            setPostButton(false);
        } catch (e) {
            setFormSuccess({...formSuccess, is: false, message: ''});
            setFormError({...formError, is: true, message: 'Fill in the marked fields'});
            console.error(e);
        }
        setPostButton(false);
    };
    return (
        <div className='AdminMiddle py-4'>
            <Container>
                <h2 className='my-3'>Add footballers</h2>
                <AddForm
                    postPlayer={postPlayer}
                    formSuccess={formSuccess}
                    formError={formError}
                    saveText='Add the footballer'
                    postButton={postButton}
                />
                <Button color='danger' class='my-3' onClick={() => dispatch(logoutUser())}>Logout</Button>
            </Container>
        </div>
    );
};

export default AdminMiddle;
