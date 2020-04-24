import React, {useState} from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, Input, InputGroup, Row} from "reactstrap";

const ContactBottom = () => {
    const [contactForm, setContactForm] = useState({name: '', phoneNum: '', text: ''});
    const sendForm = async (e) => {
        e.preventDefault();
        let chatId = '-1001430778340';
        let token = '840636313:AAGVBmkU9pPWOhVtuTnesKlz4hE3P4u4K_Q';
        let text = `<b>Name:</b> ${contactForm.name} %0A<b>Phone Number:</b> ${contactForm.phoneNum} %0A<b>Text:</b> ${contactForm.text}`;
        try {
            const checking = await axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`);
            console.log(checking.data);
            setContactForm({name: '', phoneNum: '', text: ''});
            alert('Your message was successfully sent');
        } catch (e) {
            console.error(e);
            alert('Message wasn\'t sent');
        }
    };

    const onInputChange = (e) => {
        e.preventDefault();
        setContactForm({...contactForm, [e.target.name]: e.target.value});
    };

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
                                <p>Jaiyl Baatyra 77.68 Bishkek Kyrgyzstan</p>
                            </div>
                        </div>
                        <div className='ContactBlock__card'>
                            <div className='ContactBlock__card_icon'>
                                <i className="fas fa-mobile-alt"/>
                            </div>
                            <div className='ContactBlock__card_text'>
                                <h5>Phone</h5>
                                <p>+996 709 44 09 61</p>
                            </div>
                        </div>
                        <div className='ContactBlock__card'>
                            <div className='ContactBlock__card_icon'>
                                <i className="far fa-envelope"/>
                            </div>
                            <div className='ContactBlock__card_text'>
                                <h5>Mail</h5>
                                <p>hazootu@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ContactBlock-right'>
                    <h3>Send a call request</h3>
                    <div className='ContactBlock_form'>
                        <Form action="#" onSubmit={sendForm}>
                            <Row form>
                                <Col md={5}  className='mb-4'>
                                    <Input type="text" name="name" required={true} onChange={onInputChange} value={contactForm.name} id="name" placeholder="Your name" />
                                </Col>
                                <Col md={7} className='mb-4'>
                                    <Input type="text" name="phoneNum" required={true} onChange={onInputChange} value={contactForm.phoneNum} id="phone" placeholder="Your phone number" />
                                </Col>
                            </Row>
                            <InputGroup>
                                <Input type="textarea" name="text" required={true} onChange={onInputChange} id="text" value={contactForm.text} placeholder='Your message' />
                            </InputGroup>
                            <Button color='primary' type='submit' className='mt-3 px-4'>Send</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactBottom;
