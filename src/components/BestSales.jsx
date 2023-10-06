import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import { Navigation } from 'swiper/modules';

import { Grid } from 'swiper/modules';
import bestsales from '../db/images/BestSales/bestsales';
import { AiOutlineFire } from 'react-icons/ai'; 

export default function BestSales() {
  const elements = bestsales.map(obj=> {
    return (
      <SwiperSlide className='p-2 best-sales-slide d-flex'>
        <img className='' src={obj.img} alt="" />
        <span className='fs-4 mx-2'>{obj.number}</span>
        <span className='text-end'>{obj.description}</span>
      </SwiperSlide>
    )
})
  return (

      <div className='position-relative container mt-5 d-flex flex-column align-items-center'>
      <span className='best-sales-all-link position-absolute'>مشاهده همه</span>
      <span className='d-flex align-items-center justify-content-center'>
        <AiOutlineFire className='h-100 ai-outline-fire fs-3'/>
        <h2 className='best-sales-header fs-4 p-0 m-0'>پرفروش ترین کالاها</h2>
      </span>

      <Swiper
        navigation={true}
        slidesPerView={3}
        grid={{
          rows: 3,
          fill: 'row',
        }}
        spaceBetween={1}

        modules={[Grid, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: {
              rows: 3,
            }
          },
          370: {
            slidesPerView: 2,
            grid: {
              rows: 3,
            }
          },
          500: {
            slidesPerView: 2,
            grid: {
              rows: 3,
            }
          },
          768: {
            slidesPerView: 3,
            grid: {
              rows: 3,
            }
          },
        }}
        className="mt-4 mySwiper products-swiper"
      >

        {elements}

      </Swiper>
          </div>
    
  );
}
