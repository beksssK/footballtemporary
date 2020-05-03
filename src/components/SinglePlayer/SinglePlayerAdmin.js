import React, {useState} from 'react';
import {Alert, Button, Col, Form, Input, Row, UncontrolledCollapse} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteFootballer, deleteFootballersGallery} from "../../store/actions/footballersActions";
import axiosApi from "../../axiosApi";
import SinglePlayerGalleryAdmin from "./SinglePlayerGalleryAdmin";
import SinglePlayerUpdate from "./SinglePlayerUpdate";

const SinglePlayerAdmin = (props) => {
    const [submitButton, setSubmitButton] = useState(false);
    const [formSuccess, setFormSuccess] = useState({is: false, message: ''});
    const [formError, setFormError] = useState({is: false, message: ''});
    const [footballerPhotos, setFootballerPhotos] = useState({images: []});
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();
    const deleteSingleFootballer = () => {
        try {
            if (user && user.role === 'admin') {
                dispatch(deleteFootballer(props.params.id));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const submitImages = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        Object.keys(footballerPhotos).forEach(key => {
            formData.append(key, footballerPhotos[key]);
        });
        for (let i = 0; i < footballerPhotos.images.length; i++) {
            formData.append('galleryImages', footballerPhotos.images[i]);
        }
        try {
            setSubmitButton(true);
            await axiosApi.post('/footballers/galleryPhoto/' + props.params.id, formData);
            setFormError({...formError, is: false, message: ""});
            setFormSuccess({...formSuccess, is: true, message: 'Images were sent successfully. Reload the page'})
        } catch (e) {
            setFormSuccess({...formSuccess, is: false, message: ''});
            setFormError({...formError, is: true, message: 'Please choose files again!!!'});
            console.error(e);
        }
        setSubmitButton(false)
    };
    const saveDeleteChanges = (filenames) => {
        dispatch(deleteFootballersGallery(props.params.id, filenames));
    };
    const onFileChange = (e) => {
        setFootballerPhotos({...footballerPhotos, [e.target.name]: e.target.files});
    };
    return (
        <>
            <h4 className='py-4'>Editor</h4>
            <Alert color='success' isOpen={formSuccess.is}
                   toggle={() => setFormSuccess({...formSuccess, is: false})}>{formSuccess.message}</Alert>
            <Alert color='danger' isOpen={formError.is}
                   toggle={() => setFormError({...formError, is: false})}>{formError.message}</Alert>
            <Form>
                <Row>
                    <Col xs={6} md={4}>
                        <p>Upload footballer's photos</p>
                    </Col>
                    <Col xs={6} md={6}>
                        <Input type='file' name='images' className='mb-2' multiple onChange={onFileChange}/>
                        <Button disabled={submitButton} onClick={submitImages} color='info'>Submit Photos</Button>
                    </Col>
                </Row>
            </Form>

            {props.galleryPhotos.length ? (
                <>
                    <Button className='mt-5 mb-3' color="primary" id="toggler">
                        Gallery Editor
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <SinglePlayerGalleryAdmin
                            galleryPhotos={props.galleryPhotos}
                            saveDeleteChanges={saveDeleteChanges}
                        />
                    </UncontrolledCollapse>
                </>
            ) : null}
            <div className='mt-5 mb-2'>
                <Button onClick={deleteSingleFootballer} color='danger'>Remove the footballer</Button>
            </div>
            <SinglePlayerUpdate footballerId={props.params.id} singleFootballer={props.singleFootballer}/>
        </>
    );
};

export default SinglePlayerAdmin;
