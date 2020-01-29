import React from 'react';
import { Slide } from 'react-slideshow-image';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import './Slider.css';

const props = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicator: true,
    arrows: true,
}

const Slideshow = () => {
    return(
        <div className="containerSlide">
            <Slide {...props}>
                <div className="each-slide">
                    <img src={image1} alt="image1"></img>
                </div>
                <div className="each-slide">
                    <img src={image2} alt="image2"></img>
                </div>
                <div className="each-slide">
                    <img src={image3} alt="image3"></img>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;