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
                        src="https://maps.google.com/maps?hl=en&amp;q=ул. Ахунбаева, 134 перес, просп. Мира, Бишкек+(Footballers-shop)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
                        height="300" width='100%' allowFullScreen=""/>
                </div>
            </Container>

        </div>
    );
};

export default ContactMiddle;
