import React, { useState, Fragment } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


function SliderProductListLi({img, gallery}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  const imgGallery = gallery.map(obj => {
    return (
    <SwiperSlide>
      <img src={obj} alt='' />
    </SwiperSlide>
    );
  })

  console.log(imgGallery);



  return (
    
      <Fragment >
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}

          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper21 Slider-li mobile-slider-product-list "

        >
          <section className='d-flex flex-column'>
            <SwiperSlide>
              <img src={img} alt='' />
            </SwiperSlide>
            {imgGallery}
          </section>
        </Swiper>
      </Fragment>
  );
}


export default SliderProductListLi;