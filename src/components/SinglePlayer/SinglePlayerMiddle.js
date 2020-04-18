import React, {useEffect} from 'react';
import moment from 'moment';
import './SinglePlayer.css';
import placeHolder from '../../assets/images/placeholder_male1.jpg';
import {Button, Col, Container, Row, Spinner} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteFootballers, fetchSingleFootballer} from "../../store/actions/footballersActions";

const SinglePlayerMiddle = (props) => {
    const user = useSelector(state => state.users.user);
    const singleFootballer = useSelector(state => state.allPlayers.singleFootballer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleFootballer(props.params.id));
    }, [props.params.id, dispatch]);
    const deleteFootballer = () => {
        try {
            if (user && user.role === 'admin') {
                dispatch(deleteFootballers(props.params.id));
            }
        } catch (e) {
            console.log(e);
        }
    };
    if (singleFootballer && singleFootballer.id === parseInt(props.params.id)){
        return (
            <div className='SinglePlayerMiddle py-5'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={5}>
                                    <img
                                        src={singleFootballer ? `data:${singleFootballer.type_photo};base64, ${singleFootballer.profile_photo}` : placeHolder}
                                        width='100%' height='auto' alt=""/>
                                </Col>
                                <Col md={7}>
                                    <p className='my-3'><b>Name:</b> {singleFootballer && singleFootballer.name}</p>
                                    <p className='my-3'><b>Surname:</b> {singleFootballer && singleFootballer.surname}</p>
                                    <p className='my-3'><b>Age:</b> {singleFootballer && singleFootballer.age} <b
                                        className='ml-2'>Height:</b> {singleFootballer && singleFootballer.height}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <p className='my-3'><b>Place of
                                birth: </b> {singleFootballer && singleFootballer.place_of_birth}</p>
                            <p className='my-3'><b>Date of
                                birth: </b> {singleFootballer && moment(singleFootballer.birthday).format('LL')}</p>
                            <p className='my-3'><b>Citizenship: </b> {singleFootballer && singleFootballer.citizenship}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p className='my-3'><b>Current club: </b> {singleFootballer && singleFootballer.current_club}
                            </p>
                            <p className='my-3'><b>Position: </b> {singleFootballer && singleFootballer.position}</p>
                        </Col>
                        <Col md={6}>
                            <p className='my-3'><b>Description: </b> {singleFootballer && singleFootballer.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='my-3'>
                            <p className='my-3'><b>Instagram: </b> {singleFootballer && singleFootballer.instagram}</p>
                        </Col>
                        <Col md={4} className='my-3'>
                            <p className='my-3'><b>Facebook: </b> {singleFootballer && singleFootballer.facebook}</p>
                        </Col>
                        <Col md={4} className='my-3'>
                            <p className='my-3'><b>Twitter: </b> {singleFootballer && singleFootballer.twitter}</p>
                        </Col>
                    </Row>
                    {user && user.role === 'admin' && (<Button onClick={deleteFootballer} color='danger'>Delete</Button>)}

                </Container>
            </div>
        )
    } else {
        return (
            <div className='SinglePlayerMiddle py-5'>
                <div className='text-center'>
                    <Spinner className='Spinner mt-5' color="primary" />
                </div>
            </div>
        )
    }

};


export default SinglePlayerMiddle;
