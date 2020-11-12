import React from 'react';
import './ContactMiddle.css';
import {Container} from "reactstrap";

const ContactMiddle = () => {
    return (
        <div className='ContactMiddle'>
            <Container>
                <div className="map">
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5852.063702097343!2d74.565775!3d42.829941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ5JzQ3LjgiTiA3NMKwMzMnNTYuOCJF!5e0!3m2!1sru!2skg!4v1587231536093!5m2!1sru!2skg"
                        width="100%" height="400" frameBorder="0" style={{border:0}} allowFullScreen=""
                        aria-hidden="false" tabIndex="0"/>
                </div>
            </Container>
        </div>
    );
};

export default ContactMiddle;
