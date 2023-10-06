import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productSliderImagesDB } from '../db/dummyDb';
import {NavLink} from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';
import phones from '../PhoneSlider';

import { Navigation } from 'swiper/modules';

export default function ProductSlider() {
  const length = productSliderImagesDB.length;

  const flElements = productSliderImagesDB.map((obj, index) => {
    if(index === 0) {
     
        return (
            <SwiperSlide className='first-slide d-flex align-items-center justify-content-center flex-column'>
                <img className="" src={obj.img1} alt="" />
                <img className="" src={obj.img} alt="" />
                <span className='text-white'>{obj.title}</span>
            </SwiperSlide>
        )
    }
    if(index === length-1) {
      console.log(obj.title)
        return (
            <SwiperSlide className='d-flex align-items-center justify-content-center flex-column'>
                <span className=''>{obj.title}</span>
            </SwiperSlide>
        )
    }
    // return (
    //     <SwiperSlide className='product-slide d-flex align-itemscenter justify-content-center flex-column'>
    //         <img className="" src={obj.img} alt="" />
    //         <span className="fs-6" >{obj.title}</span>
    //     </SwiperSlide>
        

    // )
  });

  const elements = phones.map(obj => {
    return (
        <SwiperSlide className='product-slide d-flex align-itemscenter justify-content-center flex-column'>
            <img className="" src={obj.img} alt="" />
            <NavLink to={`list/phones/${obj.url}`}>
              <span className="fs-6" >{obj.title}</span>
            </NavLink>
        </SwiperSlide>
    )
  })

  return (
    <div className='container swiper-container rounded-3'>
      <Swiper
        navigation={true}
        slidesPerView={7}
        spaceBetween={3}
        modules={[Navigation]}
        breakpoints={{
            
            0: {
              slidesPerView: 2,
            },
            370: {
              slidesPerView: 2.2,
            },
            500: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
            1400: {
              slidesPerView: 7,
            },
          }}
        className="mySwiper"
      >
        {flElements[0]}
        {elements}
        {flElements[length]}
      </Swiper>
    </div>
  );
}
