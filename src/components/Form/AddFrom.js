import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, InputGroup, Label, Row} from "reactstrap";
import profilePlaceholder from '../../assets/images/placeholder_male1.jpg';

const AddFrom = () => {
    const [placeholder, setPlaceholder] = useState(profilePlaceholder);
    return (
        <div className='py-4 text-primary'>
            <Form>
                <FormGroup>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={4}>
                                    <img src={placeholder} width='100%' height='auto' alt="" />
                                    <Input onChange={(e) => setPlaceholder(URL.createObjectURL(e.target.files[0]))} className='mt-3' type='file'/>
                                </Col>
                                <Col md={8}>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3'>Name: </Label>
                                        <Input type='text'/>
                                    </InputGroup>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3'>Surname: </Label>
                                        <Input type='text'/>
                                    </InputGroup>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3'>Age: </Label>
                                        <Input type='number'/>
                                        <Label className='mr-3 ml-2'>Height</Label>
                                        <Input type='number'/>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col  md={6}>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Place of birth: </Label>
                                <Input type='text'/>
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Date of birth: </Label>
                                <Input type='date'/>
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Citizenship: </Label>
                                <Input type='text'/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Current Club</Label>
                                <Input type='text'/>
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Position</Label>
                                <Input type='text'/>
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <InputGroup className='h-100 align-items-center'>
                                <Label className='mr-3'>Description</Label>
                                <Input className='h-75' type='textarea'/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Instagram</Label>
                                <Input type='text'/>
                            </InputGroup>
                        </Col>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Facebook</Label>
                                <Input type='text'/>
                            </InputGroup>
                        </Col>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Twitter</Label>
                                <Input type='text'/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className='justify-content-end'>
                        <Button className='mt-4 mr-3' type='submit' color='primary'>Add the player</Button>
                    </Row>
                </FormGroup>
            </Form>
        </div>
    );
};

export default AddFrom;
