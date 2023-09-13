import React, { useRef, useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'; // Agregamos los iconos de comillas
import 'swiper/swiper-bundle.css';
import './BanerBg.css'
export default function BanerBg() {
    const swiperRef = useRef(null);
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className='BanerBgContain'>

            <div className='deColumnBaner'>
                <h2>Lo que dice la gente</h2>
                <Swiper
                    effect='coverflow'
                    grabCursor={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    id='swiper_container2'
                >

                    <SwiperSlide id='SwiperSlide2'>

                        <div className='bgTextimonial'>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                            <p>
                                "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                            </p>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                        </div>


                    </SwiperSlide>

                    <SwiperSlide id='SwiperSlide2'>


                        <div className='bgTextimonial'>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                            <p>
                                "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                            </p>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                        </div>


                    </SwiperSlide>

                    <SwiperSlide id='SwiperSlide2'>


                        <div className='bgTextimonial'>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                            <p>
                                "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                            </p>
                            <FontAwesomeIcon icon={faQuoteLeft} className='iconTestimonios' />
                        </div>


                    </SwiperSlide>


                </Swiper>
            </div>
            <div>

            </div>

        </div>
    )
}
