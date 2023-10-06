import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productSliderImagesDB } from '../db/dummyDb';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function ProductSlider() {
  const length = productSliderImagesDB.length;

  const elements = productSliderImagesDB.map((obj, index) => {
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
    return (
        <SwiperSlide className='product-slide d-flex align-itemscenter justify-content-center flex-column'>
            <img className="" src={obj.img} alt="" />
            <span className="fs-6" >{obj.title}</span>
            <div className='px-1 d-flex w-100 justify-content-between'>
                <span className='percent text-white px-1 rounded-3'>71%</span>
                <div className='d-flex'>
                    <div className='d-flex flex-column'>
                        <span className='price'>290000</span>
                        <span className='price'><s>990000</s></span>
                    </div>
                    <span className='toman'>
                        <img className='' src="/images/homeProductSlider/toman.svg" alt="" />
                    </span>
                </div>
            </div>
        </SwiperSlide>
        

    )
  });
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
        {elements}
      </Swiper>
    </div>
  );
}
