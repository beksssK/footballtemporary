import React from 'react';
import MyCarousel from "../UI/MyCarousel/MyCarousel";
import {filesUrl} from "../../constants";

const settings = {
  adaptiveHeight: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SinglePlayerGallery = ({photoItems}) => {
    let footballers = photoItems.map(photo => ({src: filesUrl + photo, altText: '', caption: ''}));
    return (
        <div className='SinglePlayerGallery'>
            <MyCarousel settings={settings} items={footballers}/>
        </div>
    );
};

export default SinglePlayerGallery;
