import React, { useState } from 'react';
import './MyCarousel.css';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
let windowWidth = window.matchMedia("(max-width: 600px)");
const items = [
    {
        src: windowWidth.matches ? require('../../../assets/staff/CEO11.jpg') : require('../../../assets/staff/CEO11.jpg') ,
        altText: 'Our CEO',
        caption: 'our CEO'
    },
    {
        src: require('../../../assets/staff/organizer.jpg'),
        altText: 'Organizer',
        caption: 'our organizer'
    },
    {
        src: windowWidth.matches ? require('../../../assets/staff/secretary.jpg') : require('../../../assets/staff/secretary2.jpg'),
        altText: 'Secretary',
        caption: 'our secretary'
    },
    {
        src: windowWidth.matches ? require('../../../assets/staff/gManager2.jpg') : require('../../../assets/staff/gManager.jpg'),
        altText: 'General Manager',
        caption: 'general manager'
    },
    {
        src: windowWidth.matches ? require('../../../assets/staff/accountantImg.jpg') : require('../../../assets/staff/accountantImg2.jpg'),
        altText: 'Accountant',
        caption: 'our accountant'
    }
];

const MyCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <>
            <style>
                {
                    `.custom-tag {
                      max-width: 100%;
                      height: 200px;
                      background: black;
                    }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </>
    );
};

export default MyCarousel;
