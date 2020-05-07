import React, {useEffect, useState} from 'react';
import AddForm from "../Form/AddForm";
import axiosApi from "../../axiosApi";

const SinglePlayerUpdate = (props) => {
    const [oldPhoto, setOldPhoto] = useState('');
    const [formSuccess, setFormSuccess] = useState({is: false, message: ''});
    const [formError, setFormError] = useState({is: false, message: ''});
    useEffect(() => {
        setOldPhoto(props.singleFootballer.profilePhoto);
    }, [props.singleFootballer.profilePhoto]);
    const updateSave = async (event, form) => {
        event.preventDefault();
        if (form.videoLink){
            form.videoLink = form.videoLink.substring(form.videoLink.length - 11);
        }
        const formData = new FormData();
        Object.keys(form).forEach(key => {
            formData.append(key, form[key]);
        });
        if (form.profilePhoto !== oldPhoto) {
            formData.append('oldPhoto', oldPhoto);
        }
        try{
            await axiosApi.put('/footballers/' + props.footballerId, formData);
            setFormError({...formError, is: false, message: ''});
            setFormSuccess({...formSuccess, is: true, message: 'Footballer info is updated successfully'});
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
