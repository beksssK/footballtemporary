import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './MainFooter.css';

const MainFooter = () => {
    return (
        <footer className='MainFooter'>
            <Container>
                <Row className='FooterInfo text-center'>
                   <Col md='4'>
                       <p className='text-info FooterInfo_title mb-1'>Phone</p>
                       <p>+996 709 44 09 61</p>
                   </Col>
                    <Col md='4'>
                        <p className='text-info FooterInfo_title mb-1'>Address</p>
                        <p>Jaiyl Baatyra 77.68 Bishkek Kyrgyzstan</p>
                    </Col>
                    <Col md='4'>
                        <p className='text-info FooterInfo_title mb-1'>Email</p>
                        <p>hazootu@gmail.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        <p className='copyright text-center'>&copy; HNBM sports management 2020 All rights reserved</p>
                    </Col>
                    <Col md='4'/>
                    <Col md='4' className='text-center'>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a className='social' href='https://www.instagram.com/hnbm.sa/' target='_blank'><i className="fab fa-instagram"/></a>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a className='social' href='https://www.facebook.com/haza.hnbm' target='_blank'><i className="fab fa-facebook-f"/></a>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a className='social' href='https://twitter.com/Joneskobby41?s=20' target='_blank'><i className="fab fa-twitter"/></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default MainFooter;
