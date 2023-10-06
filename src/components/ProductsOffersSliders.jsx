
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import { Navigation } from 'swiper/modules';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Grid } from 'swiper/modules';
import {OfferDB} from '../db/dummyDb';

export default function ProductsOffersSlider() {
  const elements = OfferDB.map(obj=> {
    return (
      <SwiperSlide className='product-offer-slide d-flex flex-column'>
        <img className='img-fluid rounded-circle' src={obj.img} alt="" />
        <span className='fs-6'>{obj.title}</span>
      </SwiperSlide>
    )
})
  return (

      <div className='container mt-5 d-flex flex-column align-items-center'>
        <h2 className='p-0 m-0'>پشنهاد دیجی کالا</h2>

      <Swiper
        navigation={true}
        slidesPerView={7}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        spaceBetween={1}

        modules={[Grid, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: 'row',
            }
          },
          370: {
            slidesPerView: 2.4,
            grid: {
              rows: 2,
              fill: 'row',
            }
          },
          500: {
            slidesPerView: 3.4,
            grid: {
              rows: 2,
              fill: 'row',
            }
          },
          768: {
            slidesPerView: 4.4,
            grid: {
              rows: 2,
              fill: 'row',
            }
          },
          992: {
            slidesPerView: 5,
              grid: {
              rows: 2,
              fill: 'row',
            }
          },
          1200: {
            slidesPerView: 7,
            grid: {
              rows: 2,
              fill: 'row',
            }
          },
          1400: {
            slidesPerView: 7,
            grid: {
              rows: 2,
              fill: 'row',
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
