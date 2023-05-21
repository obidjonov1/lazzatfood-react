import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MarketApiService from "../../apiServices/marketApiService";
import { SearchObj } from "../types/others";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import MemberApiService from "../../apiServices/memberApiService";
import { verifiedMemberData } from "../../apiServices/verify";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetMarkets } from "../../screens/MarketPage/selector";
import { Market } from "../../screens/types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetMarkets } from "../../screens/MarketPage/slice";
import { useHistory } from "react-router-dom";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTargetMarkets: (data: Market[]) => dispatch(setTargetMarkets(data)),
});

/** REDUX SELECTOR */
const targetMarketsRetriever = createSelector(
  retrieveTargetMarkets,
  (targetMarkets) => ({
    targetMarkets,
  })
);

export function AllMarkets() {
  /* INITIALIZATIONS */
  const refs: any = useRef([]);
  const history = useHistory();
  const { setTargetMarkets } = actionDispatch(useDispatch());
  const { targetMarkets } = useSelector(targetMarketsRetriever);
  const [targetSearchObject, setTargetSearchObject] = useState<SearchObj>({
    page: 1,
    limit: 8,
    order: "mb_point",
  });

  useEffect(() => {
    // TODO: Retrive targetMarketData
    const marketService = new MarketApiService();
    marketService
      .getMarkets(targetSearchObject)
      .then((data) => setTargetMarkets(data))
      .catch((err) => console.log(err));
  }, [targetSearchObject]);

  /* HANDLERS */
  // Chosen restaurnatHandler
  const chosenMarketHandler = (id: string) => {
    history.push(`/market/${id}`);
  };

  const searchHandler = (category: string) => {
    targetSearchObject.page = 1;
    targetSearchObject.order = category;
    /* setTargetSearchObject(...) butunlay o'zgargan obj qilish(kirish) kerak
      objni qiymatlarigina o'zgarsa "ComponentDidUpdate" bo'lmaydi[63]      */
    setTargetSearchObject({ ...targetSearchObject });
  };
  // Pagination handle
  const handlePaginationChange = (evenet: any, value: number) => {
    targetSearchObject.page = value;
    setTargetSearchObject({ ...targetSearchObject });
  };
  // LIKE handle
  const targetLikeHandler = async (e: any, id: string) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "member",
        });
      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerHTML--;
      }
      await sweetTopSmallSuccessAlert("succes", 800, false);
    } catch (err: any) {
      console.log("targetLikeTop, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Container>
      <div className="markets-container">
        <div className="container">
          <div className="markets-box">
            <div className="markets">
              <div className="sorts">
                <div className="sort_btns">
                  <button
                    className="sort_btn"
                    onClick={() => searchHandler("mb_point")}
                  >
                    Best
                  </button>
                  <button
                    className="sort_btn"
                    onClick={() => searchHandler("mb_views")}
                  >
                    Famous
                  </button>
                  <button
                    className="sort_btn"
                    onClick={() => searchHandler("mb_likes")}
                  >
                    In trend
                  </button>
                  <button
                    className="sort_btn"
                    onClick={() => searchHandler("createdAt")}
                  >
                    New
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="markets-main">
            <div className="markets-grid">
              {targetMarkets.map((ele: Market) => {
                const image_path = `${serverApi}/${ele.mb_image}`;

                return (
                  <div
                    className="markets_box"
                    onClick={() => chosenMarketHandler(ele._id)}
                  >
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
                            <p>{ele.mb_views}</p>
                          </div>
                          <p></p>
                          <div className="market_likes">
                            <AiFillHeart
                              className="icons"
                              style={{ color: "#a19d9d" }}
                            />
                            <div
                              ref={(element) =>
                                (refs.current[ele._id] = element)
                              }
                            >
                              {ele.mb_likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="market_like"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <AiFillHeart
                        onClick={(e) => targetLikeHandler(e, ele._id)}
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
        <div className="pagination">
          <Pagination
            count={
              targetSearchObject.page >= 3 ? targetSearchObject.page + 1 : 3
            }
            page={targetSearchObject.page}
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
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </Container>
  );
}
