import React from "react";
// import { Container } from "@mui/system";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Box, Stack } from "@mui/material";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function RecommendedArticles(props: any) {
  return (
    <Container>
      <div className="product-container">
        <div className="container">
          <div className="product-box">
            <div
              className="product-main article-section"
              style={{ margin: "0px 0px 30px 0px" }}
            >
              <div className="events_frame">
                <div className="article-swiper_cont">
                  <Stack className="events_main">
                    <h1 className="title title-recommended title_sale">
                      Best Articles
                    </h1>
                    <Box className={"prev_next_frame"}>
                      <div
                        className={"dot_frame_pagination swiper-pagination"}
                      ></div>
                    </Box>

                    <Swiper
                      className="events_info swiper-wrapper"
                      slidesPerView={"auto"}
                      centeredSlides={true}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: true, //slider to'xtatish uchun.
                      }}
                    >
                      <SwiperSlide className="events_info_frame">
                        <div className="events-section">
                          <div className="event-cards">
                            <div className="event-card">
                              <div className="event-card__image">
                                <img src="./images/kolbasa.jpeg" alt="" />
                              </div>
                              <div className="event-card__items">
                                <div className="event-card__title">
                                  <img src="./images/burak.jpeg" alt="" />
                                  <span>Admin</span>
                                </div>
                                <p className="article-text">
                                  " Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Beatae, eveniet! "
                                </p>
                                <div className="article-box_bottom">
                                  <span>23-04-26 23:00</span>
                                  <div className="article-box_views">
                                    <AiFillEye className="icons" />
                                    <p>99</p>
                                    <p className="stick"></p>
                                    <AiFillHeart className="icons" />
                                    <p>99</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className={"events_info_frame"}>
                        <div className="events-section">
                          <div className="event-cards">
                            <div className="event-card">
                              <div className="event-card__image">
                                <img src="./images/kolbasa.jpeg" alt="" />
                              </div>
                              <div className="event-card__items">
                                <div className="event-card__title">
                                  <img src="./images/burak.jpeg" alt="" />
                                  <span>Admin</span>
                                </div>
                                <p className="article-text">
                                  " Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Beatae, eveniet! "
                                </p>
                                <div className="article-box_bottom">
                                  <span>23-04-26 23:00</span>
                                  <div className="article-box_views">
                                    <AiFillEye className="icons" />
                                    <p>99</p>
                                    <p className="stick"></p>
                                    <AiFillHeart className="icons" />
                                    <p>99</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className={"events_info_frame"}>
                        <div className="events-section">
                          <div className="event-cards">
                            <div className="event-card">
                              <div className="event-card__image">
                                <img src="./images/kolbasa.jpeg" alt="" />
                              </div>
                              <div className="event-card__items">
                                <div className="event-card__title">
                                  <img src="./images/burak.jpeg" alt="" />
                                  <span>Admin</span>
                                </div>
                                <p className="article-text">
                                  " Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Beatae, eveniet! "
                                </p>
                                <div className="article-box_bottom">
                                  <span>23-04-26 23:00</span>
                                  <div className="article-box_views">
                                    <AiFillEye className="icons" />
                                    <p>99</p>
                                    <p className="stick"></p>
                                    <AiFillHeart className="icons" />
                                    <p>99</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

{
  /* <h1 className="title title-recommended title_sale">
                Best Articles
              </h1>
              <div className="events-section">
                <div className="event-cards">
                  <div className="event-card">
                    <div className="event-card__image">
                      <img src="./images/kolbasa.jpeg" alt="" />
                    </div>
                    <div className="event-card__items">
                      <div className="event-card__title">
                        <img src="./images/burak.jpeg" alt="" />
                        <span>Admin</span>
                      </div>
                      <p className="article-text">
                        " Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, eveniet! "
                      </p>
                      <div className="article-box_bottom">
                        <span>23-04-26 23:00</span>
                        <div className="article-box_views">
                          <AiFillEye className="icons" />
                          <p>99</p>
                          <p className="stick"></p>
                          <AiFillHeart className="icons" />
                          <p>99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */
}
