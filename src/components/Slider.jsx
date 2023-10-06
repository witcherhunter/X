import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Container from 'react-bootstrap/Container';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css';

function Slider ()  {
  return (
    <Container className="mb-10 mt-4 top-header object-fit Container top-home-slider slider"  fluid>
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      effect='fade'
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className='top-home-swiper'
    >
      <SwiperSlide className='top-home-slide'>
        <img src='/images/slider/1.jpg' alt=''  />
      </SwiperSlide>

      <SwiperSlide className='top-home-slide'>
        <img src='/images/slider/3.jpg' alt=''  />
      </SwiperSlide>

      <SwiperSlide className='top-home-slide'>
        <img src='/images/slider/4.jpg' alt=''  />
      </SwiperSlide>
      <SwiperSlide className='top-home-slide'>
        <img src='/images/slider/3.jpg' alt=''  />
      </SwiperSlide>
    </Swiper>
    </Container>
  );
};

export default Slider;