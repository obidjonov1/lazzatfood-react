import React, { useEffect } from "react";
// import { Container } from "@mui/system";
import { AiFillEye, AiFillHeart, AiFillLike } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Box, Stack, Checkbox } from "@mui/material";
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
import moment from "moment";
import useDeviceDetect from "../../../lib/responsiveDetector";
import { MdDateRange } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MemberApiService from "../../apiServices/memberApiService";
import { verifiedMemberData } from "../../apiServices/verify";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import assert from "assert";

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

  const {
    chosenMemberBoArticles,
    renderChosenArticleHandler,
    setArticlesRebuild,
  } = props;

  useEffect(() => {
    const communityService = new CommunityApiService();

    let limit = 10;
    if (isMobile()) {
      limit = 4;
    }

    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit,
        order: "art_likes",
      })
      .then((data) => setTrendBoArticles(data))
      .catch((err) => console.log(err));
  }, []);

  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 800, false);
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const { isMobile } = useDeviceDetect();
  const handlePushConstruction = () => {
    history.push("/construction");
  };

  if (isMobile()) {
    return (
      <Container>
        <div className="product-container">
          <div className="container">
            <div className="product-box">
              <div
                className="product-main article-section"
                style={{ margin: "0px 0px 30px 0px" }}
              >
                <div className="rec-community_art">
                  <h1 className="title title-recommended title_sale">
                    Best Articles
                  </h1>
                </div>
                <div className="community_container">
                  {/* targetBoArticles? - crashni oldidni olish ichida ma'lumot bo'lsa */}
                  {trendBoArticles?.map((article: BoArticle) => {
                    const art_image_url = article?.art_image
                      ? `${serverApi}/${article.art_image}`
                      : "/community/article_img.svg";

                    const user_image = article?.member_data.mb_image
                      ? `${serverApi}/${article?.member_data.mb_image}`
                      : "/images/default_user.svg";

                    return (
                      <div className="community_box">
                        <div className="community_image">
                          <img src={art_image_url} alt="" />
                        </div>
                        <div className="community_body">
                          <div className="community_user">
                            <img src={user_image} alt="" />
                            <span>{article?.member_data.mb_nick}</span>
                          </div>
                          <p className="community_title">
                            {article?.art_subject.length > 22
                              ? article?.art_subject.slice(0, 22) + "..."
                              : article?.art_subject}
                          </p>

                          <div className="like_vs_view">
                            <span className="community_date">
                              <MdDateRange
                                style={{
                                  fontSize: "16px",
                                  marginRight: "5px",
                                }}
                              />
                              {moment(article?.createdAt).format("LL")}
                            </span>
                            <Checkbox
                              sx={{ padding: "3px" }}
                              icon={
                                <AiFillLike
                                  style={{
                                    fontSize: "12px",
                                    color: "#4c4a4a",
                                  }}
                                />
                              }
                              checkedIcon={
                                <AiFillLike
                                  style={{
                                    color: "primary",
                                    fontSize: "12px",
                                  }}
                                />
                              }
                              id={article?._id}
                              onClick={targetLikeHandler}
                              checked={
                                article?.me_liked &&
                                article.me_liked[0]?.my_favorite
                                  ? true
                                  : false
                              }
                            />
                            <span
                              style={{ marginRight: "10px", fontSize: "11px" }}
                            >
                              {article?.art_likes}
                            </span>
                            <RemoveRedEyeIcon
                              style={{ fontSize: "13px", color: "#4c4a4a" }}
                            />
                            <span
                              style={{ marginLeft: "5px", fontSize: "11px" }}
                            >
                              {article?.art_views}
                            </span>
                          </div>
                          <p
                            style={{ display: "inline-block" }}
                            onClick={handlePushConstruction}
                          >
                            <button className="community-read_btn">
                              read more{" "}
                              <RiArrowRightSLine style={{ fontSize: "14px" }} />
                            </button>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
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
                    <div className="rec-community_art">
                      <h1 className="title title-recommended title_sale">
                        Best Articles
                      </h1>
                      <p
                        onClick={goCommunityHandler}
                        className="rec-community_art_view"
                      >
                        View All
                      </p>
                    </div>
                    <Stack className="events_main">
                      <Box className={"prev_next_frame"}>
                        {/* <div
                        className={"dot_frame_pagination swiper-pagination"}
                      ></div> */}
                      </Box>
                      <Swiper
                        className="events_info swiper-wrapper"
                        slidesPerView={"auto"}
                        centeredSlides={false}
                        navigation={{
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev",
                        }}
                        pagination={{
                          el: ".swiper-pagination",
                          clickable: true,
                        }}
                      >
                        {trendBoArticles?.map((article: BoArticle) => {
                          const art_image_url = article?.art_image
                            ? `${serverApi}/${article?.art_image}`
                            : "/community/article_img.svg";

                          return (
                            <SwiperSlide
                              style={{ cursor: "pointer" }}
                              className="events_info_frame"
                              key={article._id}
                            >
                              <div className="events-section">
                                <div className="event-cards">
                                  <a
                                    className="event-card"
                                    // onClick={goCommunityHandler}
                                    href={`/member-page/other?mb_id=${article.mb_id}&art_id=${article._id}`}
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
                                        <span
                                          style={{
                                            textTransform: "capitalize",
                                          }}
                                        >
                                          {article?.member_data?.mb_nick}
                                        </span>
                                      </div>
                                      <p className="article-text">
                                        {article?.art_subject}
                                      </p>
                                      <div className="article-box_bottom">
                                        <span>
                                          {moment(article?.createdAt).format(
                                            "YY-MM-DD HH:mm"
                                          )}
                                        </span>
                                        <div className="article-box_views">
                                          <AiFillEye className="icons" />
                                          <p>{article?.art_views}</p>
                                          <p className="stick"></p>
                                          <AiFillHeart className="icons" />
                                          <p>{article?.art_likes}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
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
}
