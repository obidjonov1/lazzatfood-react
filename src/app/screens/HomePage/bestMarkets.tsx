import React, { useRef } from "react";
import { Container } from "@mui/system";
import { ImLocation2 } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AiOutlineEye, AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import assert from "assert";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveBestMarkets } from "../../screens/HomePage/selector";
import { Market } from "../types/user";
import { serverApi } from "../../../lib/config";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { Button } from "@mui/material";
import { verifiedMemberData } from "../../apiServices/verify";

/** REDUX SELECTOR */
const bestMarketRetriever = createSelector(
  retrieveBestMarkets,
  (bestMarkets) => ({
    bestMarkets,
  })
);

export function BestMarkets(props: any) {
  /* INITIALIZATION */

  // selector : takes data from store
  const history = useHistory();
  const { bestMarkets } = useSelector(bestMarketRetriever);
  const refs: any = useRef([]);

  /* HANDLERS */
  const chosenMarketHandler = (id: string) => {
    history.push(`/market/${id}`);
  };

  const goMarketsHandler = () => history.push("/market");

  const targetLikeBest = async (e: any, id: string) => {
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
      console.log("targetLikeBest, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

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
                  const image_path = `${serverApi}/${ele.mb_image}`;

                  return (
                    <div
                      className="markets_box"
                      key={ele._id}
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
                              {ele.mb_views}
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
                          onClick={(e) => targetLikeBest(e, ele._id)}
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
                <Button
                  type="button"
                  className="view-markets_btn"
                  onClick={goMarketsHandler}
                >
                  <p>View All</p>
                  <MdOutlineKeyboardDoubleArrowRight className="arrow" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
