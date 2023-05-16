import React, { useRef } from "react";
import { Container } from "@mui/system";
import { ImLocation2 } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { AiOutlineEye, AiFillHeart } from "react-icons/ai";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { useHistory } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopMarkets } from "../../screens/HomePage/selector";
import { Market } from "../types/user";

/** REDUX SELECTOR */
const topMarketRetriever = createSelector(retrieveTopMarkets, (topMarkets) => ({
  topMarkets,
}));

SwiperCore.use([Autoplay, Navigation, Pagination]);

export function TopMarkets(props: any) {
  /* INITIALIZATION */
  const history = useHistory();

  const { topMarkets } = useSelector(topMarketRetriever);
  // selector : takes data from store
  console.log("topMarkets:::", topMarkets);
  const refs: any = useRef([]);

  /* HANDLERS */
  const chosenMarketHandler = (id: string) => {
    history.push(`/markets/${id}`);
  };

  const targetLikeTop = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

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
                          onClick={(e) => targetLikeTop(e, ele._id)}
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
