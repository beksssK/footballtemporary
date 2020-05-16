import React, {useEffect} from 'react';
import './SinglePlayer.css';
import {Button, Col, Container, Row, Table, UncontrolledCollapse} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleFootballer} from "../../store/actions/footballersActions";
import SinglePlayerAdmin from "./SinglePlayerAdmin";
import SinglePlayerGallery from "./SinglePlayerGallery";
import FootballerThumbnail from "../FootballerThumbnail/FootballerThumbnail";
import Preloader from "../UI/Preloader/Preloader";

const SinglePlayerMiddle = (props) => {
    const user = useSelector(state => state.users.user);
    const singleFootballer = useSelector(state => state.footballers.singleFootballer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleFootballer(props.params.id));
    }, [props.params.id, dispatch]);

    if (singleFootballer && singleFootballer._id === props.params.id) {
        return (
            <div className='SinglePlayerMiddle py-5'>
                <Container>
                    <Row>
                        <Col md={4} className='px-4 px-sm-5 px-md-3'>
                            <FootballerThumbnail image={singleFootballer && singleFootballer.profilePhoto}/>
                        </Col>
                        <Col md={8} className='px-3 px-sm-5 px-md-3'>
                            <Table dark className='mt-5 mt-md-0'>
                                <tbody>
                                <tr className='table-first'>
                                    <th scope="row">Name: </th>
                                    <td>{singleFootballer.name}</td>
                                    <th>Nationality: </th>
                                    <td>{singleFootballer.nationality}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Surname: </th>
                                    <td>{singleFootballer.surname}</td>
                                    <th>Citizenship: </th>
                                    <td>{singleFootballer.citizenship}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Current Club: </th>
                                    <td>{singleFootballer.club}</td>
                                    <th>Age: </th>
                                    <td>{singleFootballer.age}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Position: </th>
                                    <td>{singleFootballer.position}</td>
                                    <th>Height: </th>
                                    <td>{singleFootballer.height}</td>
                                </tr>
                                </tbody>
                            </Table>
                            {singleFootballer.description ? (
                                <p style={{borderRadius: '8px'}} className='bg-dark p-2 mt-4 mt-md-0'>
                                    {singleFootballer.description}
                                </p>
                            ) : null}
                        </Col>
                    </Row>
                    <Row className='pt-4 pb-3 justify-content-center'>
                        {singleFootballer && singleFootballer.instagramLink ? (
                            <>
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                <a className='social SinglePlayerMiddle_social' href={singleFootballer.instagramLink} target='_blank'><i className="fab fa-instagram"/></a>
                            </>
                        ) : null}
                        {singleFootballer && singleFootballer.facebookLink ? (
                            <>
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                <a className='social SinglePlayerMiddle_social' href={singleFootballer.facebookLink} target='_blank'><i className="fab fa-facebook-f"/></a>
                            </>
                        ) : null}
                        {singleFootballer && singleFootballer.twitterLink ? (
                            <>
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                <a className='social SinglePlayerMiddle_social' href={singleFootballer.twitterLink} target='_blank'><i className="fab fa-twitter"/></a>
                            </>
                        ) : null}
                    </Row>
                    <Row className='SinglePlayerMedia mt-3'>
                        <Col md={6} className='mt-4 mb-5 px-4 px-sm-5 px-md-3'>
                            <iframe
                                title='framee'
                                src={singleFootballer.videoLink ? "https://www.youtube.com/embed/" + singleFootballer.videoLink : "https://www.youtube.com/embed/bKOTKHtbM54"}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                        </Col>
                        {singleFootballer && singleFootballer.galleryImages.length ? (
                            <Col md={6} className='mb-5 mt-4 px-4 px-sm-5 px-md-3'>
                                <SinglePlayerGallery photoItems={singleFootballer.galleryImages}/>
                            </Col>
                        ) : null
                        }
                    </Row>
                    {user && (user.role === 'admin' || user.role === 'moderator') && (
                        <div className='pt-5'>
                            <Button id='editorToggler' color="primary">Editor</Button>
                            <UncontrolledCollapse toggler="#editorToggler">
                                <SinglePlayerAdmin
                                    galleryPhotos={singleFootballer.galleryImages}
                                    params={props.params}
                                    singleFootballer={singleFootballer}
                                />
                            </UncontrolledCollapse>
                        </div>
                    )}
                </Container>
            </div>
        )
    } else {
        return (
            <div className='SinglePlayerMiddle py-5'>
                <div className='text-center'>
                    <Preloader/>
                </div>
            </div>
        )
    }

};


export default SinglePlayerMiddle;
