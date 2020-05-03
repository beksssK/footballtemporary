import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "reactstrap";
import FootballerThumbnail from "../FootballerThumbnail/FootballerThumbnail";

const SinglePlayerGalleryAdmin = ({galleryPhotos, saveDeleteChanges}) => {
    const [galleryPhotosLocal, setGalleryPhotosLocal] = useState([]);
    const [deletedPhotos, setDeletedPhotos] = useState([]);
    useEffect(() => {
        setGalleryPhotosLocal(() => galleryPhotos);
    }, [galleryPhotos]);
    const removePhotos = (filename) => {
        setDeletedPhotos([...deletedPhotos, filename]);
        setGalleryPhotosLocal(() => galleryPhotosLocal.filter(photo => photo !== filename));
    };
    return (
        <>
            <Row className='my-3'>
                {galleryPhotosLocal.map(photo => (
                    <Col xs={4} md={2} key={photo}>
                        <FootballerThumbnail image={photo}/>
                        <Button color='danger' onClick={() => removePhotos(photo)} className='mt-3'>Delete</Button>
                    </Col>
                ))}
            </Row>
            <Button color='info' onClick={() => saveDeleteChanges(deletedPhotos)} className='mt-5'>Save delete changes</Button>
        </>
    );
};

export default SinglePlayerGalleryAdmin;
