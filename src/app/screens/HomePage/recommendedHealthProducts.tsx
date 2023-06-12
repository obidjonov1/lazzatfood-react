import React, { useEffect, useRef, useState } from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Badge, Checkbox, Container, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Typed from "typed.js";
import { motion } from "framer-motion";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setHealthProducts, setRecommendedProducts } from "./slice";
import { Product } from "../types/product";
import ProductApiService from "../../apiServices/productApiSevice";
import {
  retrieveHealthProducts,
  retrieveRecommendedProducts,
} from "./selector";
import { createSelector } from "reselect";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { verifiedMemberData } from "../../apiServices/verify";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { ProductSearchObj } from "../types/others";
import { setTargetProducts } from "../MarketPage/slice";
import { Review } from "../types/review";
import useDeviceDetect from "../../../lib/responsiveDetector";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  // from reduxToolkit sends actions to redux store
  setHealthProducts: (data: Product[]) => dispatch(setHealthProducts(data)),
});

/** REDUX SELECTOR */
const healthProductsRetriever = createSelector(
  retrieveHealthProducts,
  (healthProducts) => ({
    healthProducts,
  })
);

export function RecommendedHealthProducts(props: any) {
  /* INITIALIZATION */
  const history = useHistory();
  const { setHealthProducts } = actionDispatch(useDispatch());
  const { healthProducts } = useSelector(healthProductsRetriever);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const [targetProductSearchObj, setTargetProductSearchObj] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 5,
      order: "product_views",
      product_collection: "parfumerie",
    });

  useEffect(() => {
    const productServise = new ProductApiService();
    productServise
      .getTargetProducts({
        order: "product_views",
        page: 1,
        limit: 5,
        product_collection: "parfumerie",
      })
      .then((data) => setHealthProducts(data))
      .catch((err) => console.log(err));
  }, [productRebuild]);

  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: ["Find your healthy new habit"],
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    };
    const typed = new Typed(textRef.current, options);
    if (textRef.current) {
      textRef.current.classList.add("color");
    }
    return () => {
      typed.destroy();
    };
  }, []);

  /* HANDLERS */
  // chosenDish
  const chosenProductHandler = (id: string) => {
    history.push(`/market/product/${id}`);
  };

  // Like handle
  const targetLikeProduct = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: e.target.id,
          group_type: "product",
        });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("succes", 800, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  const { isMobile } = useDeviceDetect();
  const handlePushConstruction = () => {
    history.push("/construction");
  };

  if (isMobile()) {
    return (
      <div>
        <div className="health_product">
          <div className="health_product_text">
            <span ref={textRef}></span>
            <p>
              Get all you need from vitamins, supplements, and more. <br /> Buy
              vitamins and supplements from the best brands.
            </p>
          </div>
        </div>
        <Container>
          <div className="product-container">
            <div className="container">
              <div className="product-box">
                <div
                  className="product-main"
                  style={{ margin: "0px 0px 30px 0px" }}
                >
                  <h1 className="title title_sale">Health & Beauty</h1>
                  <div className="product-grid">
                    {healthProducts.map((ele: Product) => {
                      const image_path = `${serverApi}/${ele.product_images[0]}`;
                      const size_volume =
                        ele.product_collection === "drink"
                          ? ele.product_volume + " L"
                          : ele.product_collection === "meat" ||
                            ele.product_collection === "fresh"
                          ? ele.product_weight + " kg"
                          : ele.product_collection === "family" ||
                            ele.product_collection === "readyToEat" ||
                            ele.product_collection === "parfumerie" ||
                            ele.product_collection === "texno"
                          ? ele.product_family + " pc"
                          : ele.product_size === "1" ||
                            ele.product_size === "2" ||
                            ele.product_size === "3"
                          ? ele.product_size + " liter"
                          : ele.product_size;

                      return (
                        <div
                          className="showcase"
                          key={`${ele._id}`}
                          onClick={handlePushConstruction}
                        >
                          <div className="showcase-banner">
                            <p className="showcase-badge">{size_volume}</p>
                            <div className="showcase-actions">
                              {/* <button className="btn-action">
                                <span className="product_view_cnt">
                                  {ele.product_views}
                                </span>
                                <Badge
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                  <Checkbox
                                    className="like_btn like_btn_action"
                                    icon={
                                      <AiFillHeart
                                        className="like_btn"
                                        style={{
                                          color: "#fff",
                                          fontSize: "27px",
                                        }}
                                      />
                                    }
                                    id={ele._id}
                                    checkedIcon={
                                      <AiFillHeart
                                        className="like_btn"
                                        style={{
                                          color: "red",
                                          fontSize: "27px",
                                        }}
                                      />
                                    }
                                    onClick={targetLikeProduct}
                                    checked={
                                      ele?.me_liked &&
                                      ele?.me_liked[0]?.my_favorite
                                        ? true
                                        : false
                                    }
                                  />
                                  <span className="product_like_cnt">
                                    {ele.product_likes}
                                  </span>
                                </Badge>
                                <AiFillEye
                                  style={{
                                    color: "#fff",
                                    fontSize: "27px",
                                  }}
                                  className="view_btn"
                                />
                              </button> */}
                            </div>
                          </div>
                          <div className="showcase-content">
                            <div className="price-box">
                              <img
                                src={image_path}
                                alt=""
                                width="300"
                                className="product-img rasim"
                              />
                              <span className="which_market">
                                {ele.member_data[0].mb_nick} market
                              </span>
                              <div className="product_rating">
                                <Rating
                                  sx={{ fontSize: "16px" }}
                                  name="text-feedback"
                                  value={
                                    ele.reviews && ele.reviews.length > 0
                                      ? (ele.reviews as Review[])[0]
                                          ?.average_rating
                                      : 0 // Provide a default value if there are no reviews
                                  }
                                  readOnly
                                  precision={0.5}
                                  emptyIcon={
                                    <StarIcon
                                      style={{ opacity: 0.55 }}
                                      fontSize="inherit"
                                    />
                                  }
                                />
                                <span className="reviews_cnt">
                                  {(ele.reviews as Review[])[0]?.reviews_cnt
                                    ? (ele.reviews as Review[])[0]?.reviews_cnt
                                    : 0}{" "}
                                  <span>reviews</span>
                                </span>
                              </div>
                              <span className="product-title">
                                {ele.product_name.length > 23
                                  ? ele.product_name.slice(0, 23) + ".."
                                  : ele.product_name}
                              </span>
                              <div className="product-cart_price_box">
                                {ele.product_discount && ele.product_price ? (
                                  <>
                                    <del className="prce_disc">
                                      ₩{ele.product_discount.toLocaleString()}
                                    </del>
                                    <span className="price">
                                      ₩{ele.product_price.toLocaleString()}
                                    </span>
                                  </>
                                ) : ele.product_discount ? (
                                  <del className="prce_disc">
                                    ₩{ele.product_discount.toLocaleString()}
                                  </del>
                                ) : (
                                  <span className="price">
                                    ₩{ele.product_price.toLocaleString()}
                                  </span>
                                )}
                              </div>
                              <button
                                className="cart-mobile"
                                type="button"
                                onClick={(e) => {
                                  props.onAdd(ele);
                                  e.stopPropagation();
                                }}
                              >
                                <BiShoppingBag className="add-cart__btn" />
                                <p>Add To Cart</p>
                              </button>
                            </div>
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
      </div>
    );
  } else {
    return (
      <div>
        <div className="health_product">
          <div className="health_product_text">
            <span ref={textRef}></span>
            <p>
              Get all you need from vitamins, supplements, and more. <br /> Buy
              vitamins and supplements from the best brands.
            </p>
          </div>
        </div>
        <Container>
          <div className="product-container">
            <div className="container">
              <div className="product-box">
                <div
                  className="product-main"
                  style={{ margin: "0px 0px 30px 0px" }}
                >
                  <h1 className="title title_sale">Health & Beauty</h1>
                  <div className="product-grid">
                    {healthProducts.map((ele: Product) => {
                      const image_path = `${serverApi}/${ele.product_images[0]}`;
                      const size_volume =
                        ele.product_collection === "drink"
                          ? ele.product_volume + " L"
                          : ele.product_collection === "meat" ||
                            ele.product_collection === "fresh"
                          ? ele.product_weight + " kg"
                          : ele.product_collection === "family" ||
                            ele.product_collection === "readyToEat" ||
                            ele.product_collection === "parfumerie" ||
                            ele.product_collection === "texno"
                          ? ele.product_family + " pc"
                          : ele.product_size === "1" ||
                            ele.product_size === "2" ||
                            ele.product_size === "3"
                          ? ele.product_size + " liter"
                          : ele.product_size;

                      return (
                        <div
                          className="showcase"
                          key={`${ele._id}`}
                          onClick={() => chosenProductHandler(ele._id)}
                        >
                          <div className="showcase-banner">
                            <p className="showcase-badge">{size_volume}</p>
                            <div className="showcase-actions">
                              <button className="btn-action">
                                <span className="product_view_cnt">
                                  {ele.product_views}
                                </span>
                                <Badge
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                  <Checkbox
                                    className="like_btn like_btn_action"
                                    icon={
                                      <AiFillHeart
                                        className="like_btn"
                                        style={{
                                          color: "#fff",
                                          fontSize: "27px",
                                        }}
                                      />
                                    }
                                    id={ele._id}
                                    checkedIcon={
                                      <AiFillHeart
                                        className="like_btn"
                                        style={{
                                          color: "red",
                                          fontSize: "27px",
                                        }}
                                      />
                                    }
                                    onClick={targetLikeProduct}
                                    /* @ts-ignore */
                                    checked={
                                      ele?.me_liked &&
                                      ele?.me_liked[0]?.my_favorite
                                        ? true
                                        : false
                                    }
                                  />
                                  <span className="product_like_cnt">
                                    {ele.product_likes}
                                  </span>
                                </Badge>
                                <AiFillEye
                                  style={{
                                    color: "#fff",
                                    fontSize: "27px",
                                  }}
                                  className="view_btn"
                                />
                                {/* <AiFillHeart className="like_btn" /> */}
                              </button>
                            </div>
                          </div>
                          <div className="showcase-content">
                            <div className="price-box">
                              <img
                                src={image_path}
                                alt=""
                                width="300"
                                className="product-img rasim"
                              />
                              <span className="which_market">
                                {ele.member_data[0].mb_nick} market
                              </span>
                              <div className="product_rating">
                                <Rating
                                  sx={{ fontSize: "19px" }}
                                  name="text-feedback"
                                  value={
                                    ele.reviews && ele.reviews.length > 0
                                      ? (ele.reviews as Review[])[0]
                                          ?.average_rating
                                      : 0 // Provide a default value if there are no reviews
                                  }
                                  readOnly
                                  precision={0.5}
                                  emptyIcon={
                                    <StarIcon
                                      style={{ opacity: 0.55 }}
                                      fontSize="inherit"
                                    />
                                  }
                                />
                                <span className="reviews_cnt">
                                  {(ele.reviews as Review[])[0]?.reviews_cnt
                                    ? (ele.reviews as Review[])[0]?.reviews_cnt
                                    : 0}{" "}
                                  <span>reviews</span>
                                </span>
                              </div>
                              <span className="product-title">
                                {ele.product_name.length > 23
                                  ? ele.product_name.slice(0, 23) + ".."
                                  : ele.product_name}
                              </span>
                              <div className="product-cart_price_box">
                                {ele.product_discount && ele.product_price ? (
                                  <>
                                    <del className="prce_disc">
                                      ₩{ele.product_discount.toLocaleString()}
                                    </del>
                                    <span className="price">
                                      ₩{ele.product_price.toLocaleString()}
                                    </span>
                                  </>
                                ) : ele.product_discount ? (
                                  <del className="prce_disc">
                                    ₩{ele.product_discount.toLocaleString()}
                                  </del>
                                ) : (
                                  <span className="price">
                                    ₩{ele.product_price.toLocaleString()}
                                  </span>
                                )}
                              </div>
                              <button
                                className="cart-mobile"
                                type="button"
                                onClick={(e) => {
                                  props.onAdd(ele);
                                  e.stopPropagation();
                                }}
                              >
                                <BiShoppingBag className="add-cart__btn" />
                                <p>Add To Cart</p>
                              </button>
                            </div>
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
      </div>
    );
  }
}
