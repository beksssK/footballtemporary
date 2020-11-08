import React  from 'react';
import Slider from 'react-slick';
//
import "./MyCarousel.css";

const MyCarousel = ({settings, items}) => {
    return (
      <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index}>
                <img className="slider__item" src={item.src} alt={item.altText}/>
            </div>
          ))}
      </Slider>
    );
};

export default MyCarousel;
