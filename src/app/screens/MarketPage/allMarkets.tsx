import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetMarkets } from "../../screens/MarketPage/selector";
import { Market } from "../../screens/types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetMarkets } from "../../screens/MarketPage/slice";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTargetMarkets: (data: Market[]) => dispatch(setTargetMarkets(data)),
});

// cardlarni ko'paytirish uchun->
const order_list = Array.from(Array(8).keys());

/** REDUX SELECTOR */
const targetMarketsRetriever = createSelector(
  retrieveTargetMarkets,
  (targetMarkets) => ({
    targetMarkets,
  })
);

export function AllMarkets() {
  /* INITIALIZATIONS */
  const { setTargetMarkets } = actionDispatch(useDispatch());
  const { targetMarkets } = useSelector(targetMarketsRetriever);

  useEffect(() => {
    // TODO: Retrive targetMarketData
  }, []);

  return (
    <Container>
      <div className="markets-container">
        <div className="container">
          <div className="markets-box">
            <div className="markets">
              <div className="sorts">
                <div className="sort_btns">
                  <button className="sort_btn">Zo'r</button>
                  <button className="sort_btn">Mashhur</button>
                  <button className="sort_btn">Trendagi</button>
                  <button className="sort_btn">Yangi</button>
                </div>
              </div>
            </div>
          </div>

          <div className="markets-main">
            <div className="markets-grid">
              {order_list.map((ele) => {
                return (
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
                );
              })}
            </div>
          </div>
        </div>
        <div className="pagination">
          <Pagination
            count={3}
            page={1}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color="primary"
                sx={{ color: "#43bb59" }}
              />
            )}
          />
        </div>
      </div>
    </Container>
  );
}
