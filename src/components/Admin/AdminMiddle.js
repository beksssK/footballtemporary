import React, {useState} from 'react';
import {Container} from "reactstrap";
import AddForm from "../Form/AddForm";
import {useDispatch} from "react-redux";
import axiosApi from "../../axiosApi";
import {push} from "connected-react-router";

const AdminMiddle = () => {
    const [formSuccess, setFormSuccess] = useState({is: false, message: ''});
    const [formError, setFormError] = useState({is: false, message: ''});
    const [postButton, setPostButton] = useState(false);
    const dispatch = useDispatch();
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
            dispatch(push('/'));
        } catch (e) {
            setFormSuccess({...formSuccess, is: false, message: ''});
            setFormError({...formError, is: true, message: 'Fill in the marked fields'});
            console.error(e);
        }
        setPostButton(false);
    };
    return (
        <div className='AdminMiddle'>
            <Container>
                <h2 className='my-3'>Add footballers</h2>
                <AddForm
                    postPlayer={postPlayer}
                    formSuccess={formSuccess}
                    formError={formError}
                    saveText='Add the footballer'
                    postButton={postButton}
                />
            </Container>
        </div>
    );
};

export default AdminMiddle;
