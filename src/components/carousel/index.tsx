// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            src="	https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/OtXiemXanh.webp?v=gqOZEL"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/RiceMilk.webp?v=gqOZEL"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DzutDealHuHon.webp?v=gqOZEL"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DinnerP2.webp?v=gqOZEL"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DzutDealHuHon.webp?v=gqOZEL"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
