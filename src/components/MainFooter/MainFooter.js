import React from 'react';
import {Col, Container, Row} from "reactstrap";
import './MainFooter.css';

const MainFooter = () => {
    return (
        <footer className='MainFooter'>
            <Container>
                <Row className='FooterInfo text-center'>
                   <Col md='4'>
                       <p className='text-primary FooterInfo_title mb-1'>Phone</p>
                       <p>+996 778 78 78 78</p>
                   </Col>
                    <Col md='4'>
                        <p className='text-primary FooterInfo_title mb-1'>Address</p>
                        <p>Ahunbaev str. 134, Mir Avenue, Bishkek, Kyrgyzstan</p>
                    </Col>
                    <Col md='4'>
                        <p className='text-primary FooterInfo_title mb-1'>Email</p>
                        <p>someemail@gmial.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        <p className='copyright text-center'>Copyright &copy; 2020 All rights reserved</p>
                    </Col>
                    <Col md='4'/>
                    <Col md='4' className='text-center'>
                        <a className='social' href='#1' target='_blank'><i className="fab fa-instagram"/></a>
                        <a className='social' href='#2' target='_blank'><i className="fab fa-facebook-f"/></a>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a className='social' href='https://twitter.com/Joneskobby41?s=20' target='_blank'><i className="fab fa-twitter"/></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default MainFooter;
