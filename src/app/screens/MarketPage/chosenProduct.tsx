import React, { useState, useEffect } from "react";
import { Favorite } from "@mui/icons-material";
import { Container, Rating, Button, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Marginer from "../../components/marginer";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { FreeMode, Thumbs } from "swiper";
import { useParams } from "react-router-dom";
import { Product } from "../../screens/types/product";
import { Market } from "../../screens/types/user";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { useHistory } from "react-router-dom";
import { verifiedMemberData } from "../../apiServices/verify";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrieveChosenProduct,
  retrieveChosenMarket,
} from "../../screens/MarketPage/selector";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenProduct,
  setChosenMarket,
} from "../../screens/MarketPage/slice";
import ProductApiService from "../../apiServices/productApiSevice";
import MarketApiService from "../../apiServices/marketApiService";
import { serverApi } from "../../../lib/config";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
  setChosenMarket: (data: Market) => dispach(setChosenMarket(data)),
});
/** REDUX SELECTOR */
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);
const chosenMarketRetriever = createSelector(
  retrieveChosenMarket,
  (chosenMarket) => ({
    chosenMarket,
  })
);

SwiperCore.use([Autoplay, Navigation, Pagination]);

export function ChosenProduct(props: any) {
  /* INITIALIZATION */
  const history = useHistory();
  const value = 5;
  let { product_id } = useParams<{ product_id: string }>();
  const { setChosenProduct, setChosenMarket } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { chosenMarket } = useSelector(chosenMarketRetriever);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [message, setMessage] = useState("");

  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const productRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenDish(product_id);
      setChosenProduct(product);

      const marketService = new MarketApiService();
      const market = await marketService.getChosenMarket(product.market_mb_id);
      setChosenMarket(market);
    } catch (err) {
      console.log(`productRelatedProcess, ERROR:`, err);
    }
  };

  useEffect(() => {
    productRelatedProcess().then();
  }, [productRebuild]);

  /** HANDLERS */
  const targetLikeProduct = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: e.target.id,
          group_type: "product",
        });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  const chosenMarketHandler = (id: string) => {
    history.push(`/market/${id}`);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitted review:", { message });
    // add code to send review data to server or do something else with it
  };

  return (
    <Container>
      <div className="chosen_dish_page">
        <Container className="dish_container">
          <div className={"chosen_dish_slider"}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="swip"
            >
              {chosenProduct?.product_images.map((ele: string) => {
                const image_path = `${serverApi}/${ele}`;
                return (
                  <SwiperSlide className="chosen-dish_slider">
                    <img src={image_path} alt="" className="slide_img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className={"chosen_dish_info_container"}>
            <div className={"chosen_dish_info_box"}>
              <strong
                className={"dish_txt"}
                // onClick={() => chosenMarketHandler(ele._id)}
              >
                {chosenProduct?.product_name}
              </strong>
              <span className={"resto_name"}>
                {chosenMarket?.mb_nick} market
              </span>
              <div className={"rating_box"}>
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box sx={{ ml: "-285px", mb: 0.5, fontSize: "18px" }}>(5)</Box>
                <div className="evaluation_box">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "20px",
                    }}
                  >
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      /* @ts-ignore */
                      id={chosenProduct?._id}
                      onClick={targetLikeProduct}
                      checked={
                        chosenProduct?.me_liked &&
                        !!chosenProduct?.me_liked[0]?.my_favorite
                      }
                    />

                    <span>{chosenProduct?.product_likes}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                    <span>{chosenProduct?.product_views}</span>
                  </div>
                </div>
              </div>
              <p className={"dish_desc_info"}>
                {chosenProduct?.product_description
                  ? chosenProduct?.product_description
                  : "No description"}
              </p>
              <Marginer
                direction="horizontal"
                height="1"
                width="100%"
                bg="#c8c7c7"
              />
              <div className="dish_price_box">
                {chosenProduct?.product_discount &&
                chosenProduct?.product_price ? (
                  <>
                    <span>Price:</span>
                    <del>
                      ₩{chosenProduct?.product_discount.toLocaleString()}
                    </del>
                    <span>
                      ₩{chosenProduct?.product_price.toLocaleString()}
                    </span>
                  </>
                ) : chosenProduct?.product_discount ? (
                  <>
                    <span>Price:</span>
                    <del>
                      ₩{chosenProduct?.product_discount.toLocaleString()}
                    </del>
                  </>
                ) : (
                  <>
                    <span>Price:</span>
                    <span>
                      ₩{chosenProduct?.product_price.toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              <div className="button_box">
                <Button
                  variant="contained"
                  style={{ color: "#fff", background: "#ff6600d3" }}
                  onClick={() => {
                    props.onAdd(chosenProduct);
                  }}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <h2 className="product-review">Product Reviews</h2>
      <div className="product-review_cont">
        <div className="product-review_box">
          <div className="review_avatar">
            <img src="/images/default_user.svg" alt="" />
          </div>
          <div className="review_body">
            <div className="review_nick">Sarvar</div>
            <div className="review_info">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span className="review_date">23-05-13</span>
              <span className="review_like">
                99
                <AiOutlineLike className="review_like_icon" />
                <IoMdTrash className="review_like_icon" />
              </span>
            </div>
            <div className="review_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              maxime ad deleniti dicta aliquid perspiciatis non repudiandae
              mollitia facere accusantium. maxime ad deleniti dicta aliquid
              perspiciatis non repudiandae mollitia facere accusantium
            </div>
          </div>
        </div>
        <div className="product-review_box">
          <div className="review_avatar">
            <img src="/images/default_user.svg" alt="" />
          </div>
          <div className="review_body">
            <div className="review_nick">Sarvar</div>
            <div className="review_info">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span className="review_date">23-05-13</span>
              <span className="review_like">
                99
                <AiOutlineLike className="review_like_icon" />
                <IoMdTrash className="review_like_icon" />
              </span>
            </div>
            <div className="review_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              maxime ad deleniti dicta aliquid perspiciatis non repudiandae
              mollitia facere accusantium. maxime ad deleniti dicta aliquid
              perspiciatis non repudiandae mollitia facere accusantium
            </div>
          </div>
        </div>
        <div className="product-review_box">
          <div className="review_avatar">
            <img src="/images/default_user.svg" alt="" />
          </div>
          <div className="review_body">
            <div className="review_nick">Sarvar</div>
            <div className="review_info">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span className="review_date">23-05-13</span>
              <span className="review_like">
                99
                <AiOutlineLike className="review_like_icon" />
                <IoMdTrash className="review_like_icon" />
              </span>
            </div>
            <div className="review_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              maxime ad deleniti dicta aliquid perspiciatis non repudiandae
              mollitia facere accusantium. maxime ad deleniti dicta aliquid
              perspiciatis non repudiandae mollitia facere accusantium
            </div>
          </div>
        </div>
        <div className="product-review_box">
          <div className="review_avatar">
            <img src="/images/default_user.svg" alt="" />
          </div>
          <div className="review_body">
            <div className="review_nick">Sarvar</div>
            <div className="review_info">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span className="review_date">23-05-13</span>
              <span className="review_like">
                99
                <AiOutlineLike className="review_like_icon" />
                <IoMdTrash className="review_like_icon" />
              </span>
            </div>
            <div className="review_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              maxime ad deleniti dicta aliquid perspiciatis non repudiandae
              mollitia facere accusantium. maxime ad deleniti dicta aliquid
              perspiciatis non repudiandae mollitia facere accusantium
            </div>
          </div>
        </div>
      </div>
      <div className="review-form">
        <h2>Write Review</h2>
        <form onSubmit={handleSubmit}>
          <Rating name="half-rating" defaultValue={0} precision={0.5} />
          <label htmlFor="review-message">Write your comment:</label>
          <textarea
            id="review-message"
            name="review-message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </Container>
  );
}
