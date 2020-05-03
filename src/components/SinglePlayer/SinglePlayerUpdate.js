import React, {useEffect, useState} from 'react';
import AddForm from "../Form/AddForm";
import {useDispatch} from "react-redux";
import axiosApi from "../../axiosApi";
import {push} from "connected-react-router";

const SinglePlayerUpdate = (props) => {
    const [oldPhoto, setOldPhoto] = useState('');
    const [formSuccess, setFormSuccess] = useState({is: false, message: ''});
    const [formError, setFormError] = useState({is: false, message: ''});
    const dispatch = useDispatch();
    useEffect(() => {
        setOldPhoto(props.singleFootballer.profilePhoto);
    }, [props.singleFootballer.profilePhoto]);
    const updateSave = async (event, form) => {
        event.preventDefault();
        form.videoLink = form.videoLink.substring(form.videoLink.length - 11);
        const formData = new FormData();
        Object.keys(form).forEach(key => {
            formData.append(key, form[key]);
        });
        formData.append('oldPhoto', oldPhoto);
        try{
            await axiosApi.put('/footballers/' + props.footballerId, formData);
            setFormError({...formError, is: false, message: ''});
            setFormSuccess({...formSuccess, is: true, message: 'Footballer info is updated successfully'});
            setTimeout(() => dispatch(push('/')), 2000)
        } catch (e) {
            setFormSuccess({...formSuccess, is: false, message: ''});
            setFormError({...formError, is: true, message: 'Error occured. Please reload the page'});
            console.error(e);
        }
    };
    return (
        <>
            <AddForm
                postPlayer={updateSave}
                form={props.singleFootballer}
                formSuccess={formSuccess}
                formError={formError}
                saveText='Update info'
            />
        </>
    );
};

export default SinglePlayerUpdate;
