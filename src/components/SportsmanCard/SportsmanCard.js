import React, {useEffect} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import './SportsmanCard.css';
import FootballerThumbnail from "../FootballerThumbnail/FootballerThumbnail";

const SportsmanCard = (props) => {
    useEffect(() => {

    }, []);
    return (
        <Card className='SportsmanCard col-md-3' onClick={props.onClick}>
                <FootballerThumbnail image={props.image} imgType={props.imgType}/>
                <CardBody className='text-center'>
                    <CardTitle>{props.name} {props.surname}</CardTitle>
                    <CardSubtitle className='mb-4'>{props.position}</CardSubtitle>
                    <Button className='mt-auto'>Button</Button>
                </CardBody>
        </Card>
    );
};

export default SportsmanCard;
