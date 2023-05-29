import React, { useState, useEffect, useRef } from "react";
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
  retrieveMemberReviews,
  retrieveTargetProducts,
} from "../../screens/MarketPage/selector";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenProduct,
  setChosenMarket,
  setMemberReviews,
  setTargetProducts,
} from "../../screens/MarketPage/slice";
import ProductApiService from "../../apiServices/productApiSevice";
import MarketApiService from "../../apiServices/marketApiService";
import { serverApi } from "../../../lib/config";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import {
  Review,
  ReviewInput,
  Reviews,
  SearchReviewsObj,
} from "../types/review";
import { ProductSearchByCategoryObj } from "../types/others";
import moment from "moment";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
  setChosenMarket: (data: Market) => dispach(setChosenMarket(data)),
  setMemberReviews: (data: Reviews) => dispach(setMemberReviews(data)),
  setTargetProducts: (data: Product[]) => dispach(setTargetProducts(data)),
});

/** REDUX SELECTOR */
const targetProductsRetriver = createSelector(
  retrieveTargetProducts,
  (targetProducts) => ({
    targetProducts,
  })
);

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
const memberReviewsRetriever = createSelector(
  retrieveMemberReviews,
  (memberReviews) => ({
    memberReviews,
  })
);

SwiperCore.use([Autoplay, Navigation, Pagination]);

export function ChosenProduct(props: any) {
  /* INITIALIZATION */
  const editorRef = useRef();
  const history = useHistory();
  const [value, setValue] = React.useState("1");

  const [reviewsRebuild, setReviewsRebuild] = useState<Date>(new Date());
  let { product_id } = useParams<{ product_id: string }>();
  const {
    setChosenProduct,
    setChosenMarket,
    setMemberReviews,
    setTargetProducts,
  } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { chosenMarket } = useSelector(chosenMarketRetriever);
  const { memberReviews } = useSelector(memberReviewsRetriever);
  const { targetProducts } = useSelector(targetProductsRetriver);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [message, setMessage] = useState("");

  //** for Creating values *//
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleCommentRequest = async () => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);
      const is_fulfilled = comment !== "" && rating !== 0;
      assert.ok(is_fulfilled, Definer.input_err1);
      const comment_data = {
        cmt_content: comment,
        rating_stars: rating,
        rating_ref_id: chosenProduct?._id,
      };
      const productService = new ProductApiService();
      await productService.createReview(comment_data);
      await sweetTopSmallSuccessAlert("Review is created successfully!");

      setReviewsRebuild(new Date());
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const CommentDelteHandler = async (review_id: string) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);
      let confirmation = window.confirm(
        "Are you sure to delete your comment ?"
      );
      if (confirmation) {
        const productService = new ProductApiService();
        const review_result = await productService.deleteReview(review_id);
        assert.ok(review_result, Definer.auth_err1);
        await sweetTopSmallSuccessAlert("success", 700, false);
        setReviewsRebuild(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const [targetSearchObj, setTargetSearchObj] = useState<SearchReviewsObj>({
    page: 1,
    limit: 100,
    order: "createdAt",
    rating_ref_id: product_id,
  });

  const chosenReviewHandler = (id: string) => {
    targetSearchObj.rating_ref_id = id;
    setTargetSearchObj({ ...targetSearchObj });
    setProductRebuild(new Date());
  };

  const productRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenProduct(
        product_id
      );
      setChosenProduct(product);

      const productReviews: Reviews = await productService.getReviewsChosenItem(
        targetSearchObj
      );
      setMemberReviews(productReviews);

      const marketService = new MarketApiService();
      const market = await marketService.getChosenMarket(product.market_mb_id);
      setChosenMarket(market);
    } catch (err) {
      console.log(`productRelatedProcess, ERROR:`, err);
    }
  };

  useEffect(() => {
    productRelatedProcess().then();
  }, [productRebuild, reviewsRebuild]);

  /** HANDLERS */

  const handlePaginationPage = (event: any, value: number) => {
    targetSearchObj.page = value;
    setTargetSearchObj({ ...targetSearchObj });
  };

  const targetLikeProduct = async (e: any, groupType: string) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: e.target.id,
          group_type: groupType,
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
    setRating(0);
    setComment("");
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
                  value={
                    chosenProduct?.reviews && chosenProduct?.reviews.length > 0
                      ? (chosenProduct?.reviews as Review[])[0]?.average_rating
                      : 0 // Provide a default value if there are no reviews
                  }
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box sx={{ ml: "-210px", mb: 0.5, fontSize: "18px" }}>
                  {chosenProduct?.reviews &&
                  chosenProduct?.reviews.length > 0 ? (
                    <span className="reviews_cnt">
                      {(chosenProduct?.reviews as Review[])[0]?.reviews_cnt}
                      <span>reviews</span>
                    </span>
                  ) : (
                    <span className="reviews_cnt">
                      0<span>reviews</span>
                    </span>
                  )}
                </Box>
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
                      onClick={(e) => targetLikeProduct(e, "product")}
                      checked={
                        chosenProduct?.me_liked &&
                        !!chosenProduct?.me_liked[0]?.my_favorite
                          ? true
                          : false
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
      <div className="review-form">
        <h2>Write Review</h2>
        <form onSubmit={handleSubmit}>
          <Rating
            name="half-rating"
            value={rating}
            onChange={(event, rating) => {
              setRating(rating);
            }}
          />
          <label htmlFor="review-message">Write your comment:</label>
          <textarea
            id="review-message"
            name="review-message"
            value={comment}
            required
            onChange={handleCommentChange}
            // onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <button type="submit" onClick={handleCommentRequest}>
            Submit Review
          </button>
        </form>
      </div>
      <h2 className="product-review">Product Reviews</h2>
      <div className="product-review_cont">
        {Array.isArray(memberReviews) &&
          memberReviews.map((reviews: Reviews, index: any) => {
            const image_url = reviews?.member_data[0].mb_image
              ? `${serverApi}/${reviews?.member_data[0].mb_image}`
              : "/images/default_user.svg";

            return (
              <div className="product-review_box" key={reviews._id}>
                {/* <div className="review_avatar"> */}
                <img src={image_url} alt="" className="review_avatar" />
                {/* </div> */}
                <div className="review_body">
                  <div className="review_info">
                    <div className="review_nick">
                      {reviews?.member_data[0]?.mb_nick}
                    </div>
                    <Rating
                      sx={{ marginRight: "15px" }}
                      name="text-feedback"
                      value={reviews.rating_stars}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    <span className="review_date">
                      {moment(reviews?.createdAt).format("LLL")}
                    </span>
                    <span className="review_like">
                      {reviews?.cmt_likes}
                      <Checkbox
                        className="review_like_icon"
                        icon={<AiOutlineLike style={{ fontSize: "20px" }} />}
                        id={reviews?._id}
                        checkedIcon={
                          <AiOutlineLike
                            style={{ color: "#000", fontSize: "20px" }}
                          />
                        }
                        checked={
                          reviews?.member_data[0]?.me_liked &&
                          reviews.member_data[0]?.me_liked[0].my_favorite
                            ? true
                            : false
                        }
                        onClick={(e) => targetLikeProduct(e, "review")}
                      />
                      {(verifiedMemberData?._id ===
                        reviews?.member_data[0]._id ||
                        verifiedMemberData?.mb_type === "ADMIN") && (
                        <IoMdTrash
                          className="review_like_icon"
                          onClick={() => CommentDelteHandler(reviews?._id)}
                        />
                      )}
                    </span>
                  </div>
                  <div className="review_text">{reviews.cmt_content}</div>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
}
