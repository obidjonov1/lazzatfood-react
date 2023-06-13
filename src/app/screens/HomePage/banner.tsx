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
    <div>
      <div className="home_home"></div>
      <Container sx={{ position: "relative" }}>
        <div className="home-navbar_txt">
          <h1 className="home-navbar_title">
            Solve your halal food need with us!
          </h1>
          <p className="home-navbar_subtitle">
            We find and sell the best vegetables. <br /> sources of apples and
            other products with great care of the farmer.
          </p>
        </div>
      </Container>
    </div>
  );
}
