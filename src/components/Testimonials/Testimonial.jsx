import React from 'react';
import { Data } from './Data';
import './Testimonial.css';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section_title">My Clients Say</h2>
            <span className="section_subtitle">Testimonial</span>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                loop={true}
                grabCursor= {true}
                spaceBetween={24}
                pagination={{ clickable: true }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                    
                }}
               
                className="testimonial_container">
                {
                    Data.map(({ id, image, title, description }) => {
                        return (
                            <SwiperSlide className='testimonial_card' key={id}>
                                <img src={image} className="testimonial_img" alt="" />
                                <h3 className="testimonial_name">{title}</h3>
                                <p className="testimonial_description">{description}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;