import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import TypewriterComponent from 'typewriter-effect';


const HeroSec = () => {
    const sliderRef = useRef();

    const [slide1, setSlide1] = useState(true)
    const [slide2, setSlide2] = useState(false)
    const [slide3, setSlide3] = useState(false)
    const [slide4, setSlide4] = useState(false)

    const settings = {
        arrows: false,
        dots: false,
        pauseOnHover: false,
        draggable: false,
        fade: true,
        infinite: true,
        speed: 1000,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
    };

    return (
        <div style={{ backgroundColor: "black" }}>
            <Container >
                <Slider {...settings}
                    ref={sliderRef}>
                    <div className='parent'>
                        <img className=" w-100" src="https://koyolegal02.web.app/static/media/carousel1.6f266b62.jpg" alt="" />
                        <div className="caption">
                            {slide1 && <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(`CREATIVE AGGRESSIVE RELENTLESS`)
                                        .deleteAll()
                                        .typeString(`CREATIVE AGGRESSIVE RELENTLESS`)
                                        .deleteAll()
                                        .typeString(`CREATIVE AGGRESSIVE RELENTLESS`)
                                        .deleteAll()
                                        .callFunction(() => {
                                            setSlide2(true)
                                            sliderRef.current.slickGoTo(1);
                                            setSlide1(false)
                                        })
                                        .start();
                                }}
                            />}
                            <button className='btn-hero'>Play Video</button>
                        </div>
                    </div>
                    <div className='parent'>
                        <img
                            className="w-100"
                            src="https://koyolegal02.web.app/static/media/carousel2.33d59c52.jpg"
                            alt=""
                        />
                        <div className="caption">
                            {slide2 && <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter

                                        .typeString(`THIS IS WHO WE ARE`)
                                        .deleteAll()
                                        .typeString(`THIS IS WHO WE ARE`)
                                        .deleteAll()
                                        .typeString(`THIS IS WHO WE ARE`)
                                        .deleteAll()
                                        // move to next and disable others 
                                        .callFunction(() => {
                                            setSlide3(true)
                                            sliderRef.current.slickGoTo(2);
                                            setSlide2(false)
                                        })
                                        .start();
                                }}
                            />}
                            <button className='btn-hero'>Play Video</button>
                        </div>
                    </div>
                    <div className='parent'>
                        <img
                            className="w-100"
                            src="https://koyolegal02.web.app/static/media/carousel3.59a3a24c.jpg"
                            alt=""
                        />
                        <div className="caption">
                            {slide3 && <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(`something`)
                                        .deleteAll()
                                        .typeString(`something`)
                                        .deleteAll()
                                        .typeString(`something`)
                                        .deleteAll()
                                        // move to next and disable others 
                                        .callFunction(() => {
                                            setSlide4(true)
                                            sliderRef.current.slickGoTo(3);
                                            setSlide3(false)
                                        })
                                        .start();
                                }}
                            />}
                            <button className='btn-hero'>Play Video</button>
                        </div>
                    </div>
                    <div className='parent'>
                        <img
                            className="w-100"
                            src="https://koyolegal02.web.app/static/media/carousel4.ec4a16ca.jpg"
                            alt=""
                        />
                        <div className="caption">
                            {slide4 && <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(`something`)
                                        .deleteAll()
                                        .typeString(`something`)
                                        .deleteAll()
                                        .typeString(`something`)
                                        .deleteAll()
                                        // move to next and disable others 
                                        .callFunction(() => {
                                            setSlide1(true)
                                            sliderRef.current.slickGoTo(0);
                                            setSlide4(false)
                                        })
                                        .start();
                                }}
                            />}
                            <button className='btn-hero'>Play Video</button>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>
    );
};

export default HeroSec;

