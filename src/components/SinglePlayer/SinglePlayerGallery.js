import React from 'react';
import MyCarousel from "../UI/MyCarousel/MyCarousel";
import {apiURL} from "../../constants";

const SinglePlayerGallery = ({photoItems}) => {
    let footballers = photoItems.map(photo => ({src: apiURL + '/uploads/' + photo, altText: '', caption: ''}));
    return (
        <div className='SinglePlayerGallery'>
            <MyCarousel items={footballers}/>
        </div>
    );
};

export default SinglePlayerGallery;
