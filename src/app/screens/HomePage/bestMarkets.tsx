import React from "react";
import { Container } from "@mui/system";
import { ImLocation2 } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AiOutlineEye, AiFillHeart } from "react-icons/ai";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveBestMarkets } from "../../screens/HomePage/selector";
import { Market } from "../types/user";
import { serviceApi } from "../../../lib/config";
import { NavLink } from "react-router-dom";

/** REDUX SELECTOR */
const bestMarketRetriever = createSelector(
  retrieveBestMarkets,
  (bestMarkets) => ({
    bestMarkets,
  })
);

export function BestMarkets(props: any) {
  /* INITIALIZATION */
  const { bestMarkets } = useSelector(bestMarketRetriever);
  // selector : takes data from store
  console.log("bestMarkets:::", bestMarkets);

  return (
    <Container>
      <div className="product-container">
        <div className="container">
          {/* hero */}
          <div className="product-box">
            <div
              className="product-main"
              style={{ margin: "0px 0px 30px 0px" }}
            >
              <h1 className="title title_sale">
                Best <span>Markets</span>
              </h1>
              <div className="markets-grid_box">
                {bestMarkets.map((ele: Market) => {
                  const image_path = `${serviceApi}/${ele.mb_image}`;

                  return (
                    <div className="markets_box">
                      <div className="markets_img">
                        <img src={image_path} alt="" />
                      </div>
                      <div className="markets_info">
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
                              <AiOutlineEye
                                style={{ color: "#3f3f3f" }}
                                className="icons"
                              />
                              {ele.mb_views}
                            </div>
                            <p></p>
                            <div className="market_likes">
                              <AiFillHeart
                                className="icons"
                                style={{ color: "#a19d9d" }}
                              />
                              <p>{ele.mb_likes}</p>
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
              <div className="view-markets">
                <button type="button" className="view-markets_btn">
                  <NavLink to={"/markets"}>
                    <p>View All</p>
                  </NavLink>
                  <MdOutlineKeyboardDoubleArrowRight className="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
