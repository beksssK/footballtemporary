import React from 'react';
import MyCarousel from "../UI/MyCarousel/MyCarousel";
import {filesUrl} from "../../constants";

const SinglePlayerGallery = ({photoItems}) => {
    let footballers = photoItems.map(photo => ({src: filesUrl + photo, altText: '', caption: ''}));
    return (
        <div className='SinglePlayerGallery'>
            <MyCarousel items={footballers}/>
        </div>
    );
};

export default SinglePlayerGallery;
