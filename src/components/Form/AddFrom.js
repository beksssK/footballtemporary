import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, InputGroup, Label, Row} from "reactstrap";
import profilePlaceholder from '../../assets/images/placeholder_male1.jpg';
import axiosApi from "../../axiosApi";

const initialState = {
    profile_photo: '',
    type: '',
    name: '',
    surname: '',
    birthday: '',
    age: '',
    current_club: '',
    place_of_birth: '',
    citizenship: '',
    height: '',
    position: '',
    description: '',
    instagram: '',
    facebook: '',
    twitter: ''
};
const AddFrom = () => {
    const [placeholder, setPlaceholder] = useState(profilePlaceholder);
    const [playerForm, setPlayerForm] = useState(initialState);
    const onInputChange = event => {
        setPlayerForm({...playerForm, [event.target.name]: event.target.value});
    };
    const onFileChange = event => {
        setPlaceholder(URL.createObjectURL(event.target.files[0]));
        setPlayerForm({...playerForm, [event.target.name]: event.target.files[0]})
    };
    const postPlayer = async event => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(playerForm).forEach(key => {
            console.log(key);
            console.log(playerForm[key]);
            formData.append(key, playerForm[key]);
        });
        console.log(formData);
        try{
            await axiosApi.post('/sportsmen', formData);
            alert('Player added')
        } catch (e) {
            alert("Player not added");
            console.error(e);
        }

    };
    console.log(playerForm);
    return (
        <div className='py-4 text-primary'>
            <Form onSubmit={postPlayer}>
                <FormGroup>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={4}>
                                    <img src={placeholder} width='100%' height='auto' alt="" />
                                    <Input onChange={onFileChange} name='profile_photo' className='mt-3' type='file'/>
                                </Col>
                                <Col md={8}>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3'>Name: </Label>
                                        <Input type='text' name='name' onChange={onInputChange}/>
                                    </InputGroup>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3'>Surname: </Label>
                                        <Input type='text' name='surname' onChange={onInputChange}/>
                                    </InputGroup>
                                    <InputGroup className='my-3 align-items-center'>
                                        <Label className='mr-3'>Age: </Label>
                                        <Input type='number' name='age' onChange={onInputChange}/>
                                        <Label className='mr-3 ml-2'>Height</Label>
                                        <Input type='number' name='height' onChange={onInputChange}/>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col  md={6}>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Place of birth: </Label>
                                <Input type='text' name='place_of_birth' onChange={onInputChange} />
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Date of birth: </Label>
                                <Input type='date' name='birthday' onChange={onInputChange} />
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Citizenship: </Label>
                                <Input type='text' name='citizenship' onChange={onInputChange} />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Current Club</Label>
                                <Input type='text' name='current_club' onChange={onInputChange} />
                            </InputGroup>
                            <InputGroup className='my-3 align-items-center'>
                                <Label className='mr-3'>Position</Label>
                                <Input type='text' name='position' onChange={onInputChange} />
                            </InputGroup>
                        </Col>
                        <Col md={6}>
                            <InputGroup className='h-100 align-items-center'>
                                <Label className='mr-3'>Description</Label>
                                <Input className='h-75' type='textarea' name='description' onChange={onInputChange} />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Instagram</Label>
                                <Input type='text' name='instagram' onChange={onInputChange} />
                            </InputGroup>
                        </Col>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Facebook</Label>
                                <Input type='text' name='facebook' onChange={onInputChange} />
                            </InputGroup>
                        </Col>
                        <Col md={4} className='my-3'>
                            <InputGroup className='align-items-center'>
                                <Label className='mr-3'>Twitter</Label>
                                <Input type='text' name='twitter' onChange={onInputChange} />
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
