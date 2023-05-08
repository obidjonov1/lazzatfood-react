import React from "react";
import { Container } from "@mui/system";
import { ImLocation2 } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AiOutlineEye, AiFillHeart } from "react-icons/ai";

export function BestMarkets(props: any) {
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
                <div className="markets_box">
                  <div className="markets_img">
                    <img src="./images/burak.jpeg" alt="" />
                  </div>
                  <div className="markets_info">
                    <div className="info_top">
                      <p className="info-top_nick">LazzatFood</p>
                      <p className="info-top_address">
                        <ImLocation2 className="info_top-icon" />
                        Toshkent, Chirchiq, Olmazor 4-9
                      </p>
                      <p className="info-top_address">
                        <FiPhone className="info_top-icon" />
                        01054489811
                      </p>
                    </div>
                    <div className="info_bottom">
                      <div className="market_bottom">
                        <div className="market_views">
                          <AiOutlineEye
                            style={{ color: "#3f3f3f" }}
                            className="icons"
                          />
                          <p>99</p>
                        </div>
                        <p></p>
                        <div className="market_likes">
                          <AiFillHeart
                            className="icons"
                            style={{ color: "#a19d9d" }}
                          />
                          <p>99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="market_like">
                    <AiFillHeart className="market-like_icon" />
                  </div>
                </div>
                <div className="markets_box">
                  <div className="markets_img">
                    <img src="./images/burak.jpeg" alt="" />
                  </div>
                  <div className="markets_info">
                    <div className="info_top">
                      <p className="info-top_nick">LazzatFood</p>
                      <p className="info-top_address">
                        <ImLocation2 className="info_top-icon" />
                        Toshkent, Chirchiq, Olmazor 4-9
                      </p>
                      <p className="info-top_address">
                        <FiPhone className="info_top-icon" />
                        01054489811
                      </p>
                    </div>
                    <div className="info_bottom">
                      <div className="market_bottom">
                        <div className="market_views">
                          <AiOutlineEye
                            style={{ color: "#3f3f3f" }}
                            className="icons"
                          />
                          <p>99</p>
                        </div>
                        <p></p>
                        <div className="market_likes">
                          <AiFillHeart
                            className="icons"
                            style={{ color: "#a19d9d" }}
                          />
                          <p>99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="market_like">
                    <AiFillHeart className="market-like_icon" />
                  </div>
                </div>
                <div className="markets_box">
                  <div className="markets_img">
                    <img src="./images/burak.jpeg" alt="" />
                  </div>
                  <div className="markets_info">
                    <div className="info_top">
                      <p className="info-top_nick">LazzatFood</p>
                      <p className="info-top_address">
                        <ImLocation2 className="info_top-icon" />
                        Toshkent, Chirchiq, Olmazor 4-9
                      </p>
                      <p className="info-top_address">
                        <FiPhone className="info_top-icon" />
                        01054489811
                      </p>
                    </div>
                    <div className="info_bottom">
                      <div className="market_bottom">
                        <div className="market_views">
                          <AiOutlineEye
                            style={{ color: "#3f3f3f" }}
                            className="icons"
                          />
                          <p>99</p>
                        </div>
                        <p></p>
                        <div className="market_likes">
                          <AiFillHeart
                            className="icons"
                            style={{ color: "#a19d9d" }}
                          />
                          <p>99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="market_like">
                    <AiFillHeart className="market-like_icon" />
                  </div>
                </div>
              </div>
              <div className="view-markets">
                <button type="button" className="view-markets_btn">
                  <p>View All</p>
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
