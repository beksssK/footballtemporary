import React from 'react';
import './SportsmanCard.css';
import FootballerThumbnail from "../FootballerThumbnail/FootballerThumbnail";

const SportsmanCard = (props) => {
    return (
        <div className='Card col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='SportsmanCard' onClick={props.onClick}>
                <FootballerThumbnail image={props.image} imgType={props.imgType}/>
                <div className='Card-info'>
                    <h5 className='text-center'>{props.name} {props.surname}</h5>
                    <h6 className='text-center text-info'>{props.position}</h6>
                </div>
            </div>
        </div>
    );
};

export default SportsmanCard;
