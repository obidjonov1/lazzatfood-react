import React from "react";
import { Container } from "@mui/system";
import { ImLocation2 } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { AiOutlineEye, AiFillHeart } from "react-icons/ai";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopMarkets } from "../../screens/HomePage/selector";
import { Market } from "../types/user";
import { serviceApi } from "../../../lib/config";

/** REDUX SELECTOR */
const topMarketRetriever = createSelector(retrieveTopMarkets, (topMarkets) => ({
  topMarkets,
}));

SwiperCore.use([Autoplay, Navigation, Pagination]);

export function TopMarkets(props: any) {
  /* INITIALIZATION */
  const { topMarkets } = useSelector(topMarketRetriever);
  // selector : takes data from store
  console.log("topMarkets:::", topMarkets);

  return (
    <Container>
      <div className="product-container">
        <div className="container">
          {/* hero */}
          <div className="product-box">
            <div className="product-main">
              <h1 className="title">
                Top <span>Markets</span>
              </h1>
              <div className="markets-grid_box">
                {topMarkets.map((ele: Market) => {
                  const image_path = `${serviceApi}/${ele.mb_image}`;

                  return (
                    <div className="markets_box">
                      <div className="markets_img">
                        <img src={image_path} alt="" />
                      </div>
                      <div className="markets_info-box">
                        <div className="info_top">
                          <p className="info-top_nick">{ele.mb_nick}</p>
                          <p className="info-top_address">
                            <ImLocation2 className="info_top-icon" />
                            {ele?.mb_address}
                          </p>
                          <p className="info-top_address">
                            <FiPhone className="info_top-icon" />
                            {ele.mb_phone}
                          </p>
                        </div>
                        <div className="info_bottom">
                          <div className="market_bottom">
                            <div className="market_views">
                              <AiOutlineEye className="icons" />
                              {ele.mb_views}
                            </div>
                            <p></p>
                            <div className="market_likes">
                              <AiFillHeart className="icons" />
                              {ele.mb_likes}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="market_like">
                        <AiFillHeart
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white",
                          }}
                          className="market-like_icon"
                        />
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
}
