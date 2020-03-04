import React from 'react';
import {Button, Col, Container, Form, Input, InputGroup, Row} from "reactstrap";

const ContactBottom = () => {
    return (
        <Container className='pb-4'>
            <div className='ContactBlock'>
                <div className='ContactBlock-left'>
                    <h3>Contact us</h3>
                    <div className='ContactBlock__info'>
                        <div className='ContactBlock__card'>
                            <div className='ContactBlock__card_icon'>
                                <i className="fas fa-map-marker-alt"/>
                            </div>
                            <div className='ContactBlock__card_text'>
                                <h5>Address</h5>
                                <p>Ahunbaev str. 134, Mir Avenue, Bishkek, Kyrgyzstan</p>
                            </div>
                        </div>
                        <div className='ContactBlock__card'>
                            <div className='ContactBlock__card_icon'>
                                <i className="fas fa-mobile-alt"/>
                            </div>
                            <div className='ContactBlock__card_text'>
                                <h5>Phone</h5>
                                <p>+996 554 440 961</p>
                            </div>
                        </div>
                        <div className='ContactBlock__card'>
                            <div className='ContactBlock__card_icon'>
                                <i className="far fa-envelope"/>
                            </div>
                            <div className='ContactBlock__card_text'>
                                <h5>Mail</h5>
                                <p>example@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ContactBlock-right'>
                    <h3>Send a call request</h3>
                    <div className='ContactBlock_form'>
                        <Form action="#">
                            <Row form>
                                <Col md={5}  className='mb-4'>
                                    <Input type="text" name="name" id="name" placeholder="Your name" />
                                </Col>
                                <Col md={7} className='mb-4'>
                                    <Input type="email" name="email" id="email" placeholder="e-mail" />
                                </Col>
                            </Row>
                            <InputGroup>
                                <Input type="textarea" name="text" id="text"  />
                            </InputGroup>
                            <Button color='primary' className='mt-3'>Send a message</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactBottom;
