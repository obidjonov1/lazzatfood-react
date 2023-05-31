import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "react-toastify/dist/ReactToastify.css";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function NavbarHomeBanner(props: any) {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <img src="/images/slide.jpeg" alt="" className="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide4.jpeg" alt="" className="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide1.jpeg" alt="" className="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide5.jpeg" alt="" className="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider3.jpeg" alt="" className="slide_img" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
