import React from 'react';
import MyCarousel from "../UI/MyCarousel/MyCarousel";

const SinglePlayerGallery = ({photoItems}) => {
    let footballers = photoItems.map(photo => ({src: photo, altText: '', caption: ''}));
    return (
        <div className='SinglePlayerGallery'>
            <MyCarousel items={footballers}/>
        </div>
    );
};

export default SinglePlayerGallery;
