// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Container } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function BrandSlider() {
    return (
        <Container className='mt-5 d-flex flex-column border border-gray rounded '>
            <h2 className='Brand-h2 mx-auto'>محبوب ترین برند ها</h2>
            <div className='Brand-Slider'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    Navigation
                    scrollbar={{ draggable: true }}

                >
                    <SwiperSlide ><img src='images/PopularBrands1/1.png' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/1.png' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/2.jpg' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/3.png' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/4.png' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/5.jpg' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/6.png' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/7.png' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/8.png' /></SwiperSlide>
                    <SwiperSlide ><img src='images/PopularBrands1/9.jpg' /></SwiperSlide>

                </Swiper>
            </div >
        </Container>
    );
};

export default BrandSlider;