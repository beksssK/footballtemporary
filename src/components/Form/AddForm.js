import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Form, FormGroup, Input, InputGroup, Label, Row} from "reactstrap";
import profilePlaceholder from "../../assets/images/placeholder_male1.jpg";

const POSITIONS = ['the sweeper', 'center fullback', 'left fullback', 'right fullback', 'wingback', 'left midfielder', 'right midfielder', 'defensive midfielder', 'central midfielder', 'the winger', 'striker', 'goalkeeper', 'second striker', 'center forward', 'attacking midfielder'];
const initialState = {
    name: '',
    surname: '',
    age: '',
    nationality: '',
    citizenship: '',
    club: '',
    position: '',
    height: '',
    description: '',
    instagramLink: '',
    facebookLink: '',
    twitterLink: '',
    videoLink: '',
    profilePhoto: '',
};
const AddForm = (props) => {
    const [playerForm, setPlayerForm] = useState(initialState);
    const [placeholder, setPlaceholder] = useState(profilePlaceholder);
    const onInputChange = event => {
        setPlayerForm({...playerForm, [event.target.name]: event.target.value});
    };
    const onFileChange = event => {
        setPlaceholder(URL.createObjectURL(event.target.files[0]));
        setPlayerForm({...playerForm, [event.target.name]: event.target.files[0]})
    };
    useEffect(() => {
        if (props.form) {
            setPlayerForm(props.form);
        }
    }, [props.form]);
    return (
        <div className='py-4 text-primary'>
            <Form onSubmit={(event) => props.postPlayer(event, playerForm)}>
                <FormGroup>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={4}>
                                    <img src={placeholder} width='100%' height='auto' alt="" />
                                    <Label className='required'>Profile photo: </Label>
                                    <Input onChange={onFileChange} name='profilePhoto' className='mt-3' type='file'/>
                                </Col>
                                <Col md={8}>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3 required'>Name: </Label>
                                        <Input type='text' name='name' value={playerForm.name} required onChange={onInputChange}/>
                                    </InputGroup>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3 required'>Surname: </Label>
                                        <Input type='text' name='surname' value={playerForm.surname} required onChange={onInputChange}/>
                                    </InputGroup>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3 required'>Age: </Label>
                                        <Input type='number' name='age' value={playerForm.age} required onChange={onInputChange}/>
                                        <Label className='mr-3 ml-2' >Height(cm): </Label>
                                        <Input type='number' name='height' value={playerForm.height} onChange={onInputChange}/>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col  md={6}>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Nationality: </Label>
                                <Input type='text' name='nationality' onChange={onInputChange} value={playerForm.nationality}/>
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3 required'>Citizenship: </Label>
                                <Input type='text' name='citizenship' required onChange={onInputChange} value={playerForm.citizenship}/>
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Video: </Label>
                                <Input type='text' name='videoLink' onChange={onInputChange} value={playerForm.videoLink} />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Current Club</Label>
                                <Input type='text' name='club'  onChange={onInputChange} value={playerForm.club}/>
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3 required'>Position</Label>
                                <Input type="select" name="position" required onChange={onInputChange} value={playerForm.position}>
                                    <option value={null}>Select the position</option>
                                    {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                                </Input>
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <InputGroup className='h-100 align-items-center'>
                                <Label className='mr-3'>Description</Label>
                                <Input className='h-75' type='textarea' name='description' onChange={onInputChange} value={playerForm.description}/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Instagram: </Label>
                                <Input type='text' name='instagramLink' onChange={onInputChange} value={playerForm.instagramLink}/>
                            </InputGroup>
                        </Col>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Facebook: </Label>
                                <Input type='text' name='facebookLink' onChange={onInputChange} value={playerForm.facebookLink}/>
                            </InputGroup>
                        </Col>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Twitter</Label>
                                <Input type='text' name='twitterLink' onChange={onInputChange} value={playerForm.twitterLink}/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className='justify-content-end'>
                        <Button className='mt-4 mr-3' disabled={props.postButton} type='submit' color='primary'>{props.saveText}</Button>
                    </Row>
                </FormGroup>
            </Form>
            <Alert color='success' isOpen={props.formSuccess.is} toggle={() => props.setFormSuccess({...props.formSuccess, is: false})}>{props.formSuccess.message}</Alert>
            <Alert color='danger' isOpen={props.formError.is} toggle={() => props.setFormError({...props.formError, is: false})}>{props.formError.message}</Alert>
        </div>
    );
};

export default AddForm;
