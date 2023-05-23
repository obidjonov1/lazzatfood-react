import React, { useEffect } from "react";
// import { Container } from "@mui/system";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Box, Stack } from "@mui/material";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { setTrendBoArticles } from "./slice";
import { retrieveTrendBoArticles } from "./selector";
import { BoArticle } from "../../screens/types/boArticle";
import CommunityApiService from "../../apiServices/communityApiService";
import { serverApi } from "../../../lib/config";
import { TViewer } from "../../components/tuiEditor/tuiViewer";
import { useHistory } from "react-router-dom";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTrendBoArticles: (data: BoArticle[]) => dispatch(setTrendBoArticles(data)),
});

/** REDUX SELECTOR */

const trendBoArticlesRetriver = createSelector(
  retrieveTrendBoArticles,
  (trendBoArticles) => ({
    trendBoArticles,
  })
);

SwiperCore.use([Autoplay, Navigation, Pagination]);

export function RecommendedArticles(props: any) {
  /** INITIALIZATIONS **/
  const history = useHistory();
  const { setTrendBoArticles } = actionDispatch(useDispatch());
  const { trendBoArticles } = useSelector(trendBoArticlesRetriver);

  const goCommunityHandler = () => history.push("/community");

  useEffect(() => {
    const communityService = new CommunityApiService();

    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 10,
        order: "art_likes",
      })
      .then((data) => setTrendBoArticles(data))
      .catch((err) => console.log(err));
  }, []);

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
                  <h1 className="title title-recommended title_sale">
                    Best Articles
                  </h1>
                  <Stack className="events_main">
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
                        disableOnInteraction: true,
                      }}
                    >
                      {trendBoArticles?.map((article: BoArticle) => {
                        const art_image_url = article?.art_image
                          ? `${serverApi}/${article?.art_image}`
                          : "/community/article_img.svg";

                        return (
                          <SwiperSlide
                            className="events_info_frame"
                            key={article._id}
                          >
                            <div className="events-section">
                              <div className="event-cards">
                                <div
                                  className="event-card"
                                  onClick={goCommunityHandler}
                                >
                                  <div className="event-card__image">
                                    <img src={art_image_url} alt="" />
                                  </div>
                                  <div className="event-card__items">
                                    <div className="event-card__title">
                                      <img
                                        src={
                                          article?.member_data?.mb_image
                                            ? `${serverApi}/${article?.member_data?.mb_image}`
                                            : "/auth/profile.svg"
                                        }
                                        alt=""
                                      />
                                      <span>
                                        {article?.member_data?.mb_nick}
                                      </span>
                                    </div>
                                    <p className="article-text">
                                      {article?.art_subject}
                                    </p>
                                    <div className="article-box_bottom">
                                      <span>23-04-26 23:00</span>
                                      <div className="article-box_views">
                                        <AiFillEye className="icons" />
                                        <p>{article?.art_views}</p>
                                        <p className="stick"></p>
                                        <AiFillHeart className="icons" />
                                        <p>{article?.art_likes}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
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
