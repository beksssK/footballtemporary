import React, {useEffect, useState} from 'react';
import AddForm from "../Form/AddForm";
import axiosApi from "../../axiosApi";

const SinglePlayerUpdate = (props) => {
    const [oldPhoto, setOldPhoto] = useState('');
    const [formSuccess, setFormSuccess] = useState({is: false, message: ''});
    const [formError, setFormError] = useState({is: false, message: ''});
    const [updateButton, toggleUpdateButton] = useState(false);
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
            toggleUpdateButton(true);
            await axiosApi.put('/footballers/' + props.footballerId, formData);
            setFormError({...formError, is: false, message: ''});
            setFormSuccess({...formSuccess, is: true, message: 'Footballer info is updated successfully'});
            toggleUpdateButton(false);
        } catch (e) {
            setFormSuccess({...formSuccess, is: false, message: ''});
            setFormError({...formError, is: true, message: 'Error occured. Please reload the page'});
            toggleUpdateButton(false);
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
                postButton={updateButton}
            />
        </>
    );
};

export default SinglePlayerUpdate;
