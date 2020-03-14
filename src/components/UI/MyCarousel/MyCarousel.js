import React, { useState } from 'react';
import './MyCarousel.css';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: require('../../../assets/staff/president'),
        altText: 'Our CEO',
        caption: 'Our CEO'
    },
    {
        src: require('../../../assets/staff/chief-scout'),
        altText: 'Chief-Scout',
        caption: 'Our Chief-Scout'
    },
    {
        src: require('../../../assets/staff/organizer'),
        altText: 'Organizer',
        caption: 'Our Organizer'
    },
    {
        src: require('../../../assets/staff/staff-secretary'),
        altText: 'Secretary',
        caption: 'Our Secretary'
    },
];

const MyCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

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
