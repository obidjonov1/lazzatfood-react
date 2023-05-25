import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Badge, Checkbox, Container, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setRecommendedProducts } from "./slice";
import { Product } from "../types/product";
import ProductApiService from "../../apiServices/productApiSevice";
import { retrieveRecommendedProducts } from "./selector";
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

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  // from reduxToolkit sends actions to redux store
  setRecommendedProducts: (data: Product[]) =>
    dispatch(setRecommendedProducts(data)),
});

/** REDUX SELECTOR */
const recommendedProductsRetriever = createSelector(
  retrieveRecommendedProducts,
  (recommendedProducts) => ({
    recommendedProducts,
  })
);


export function RecommendedProducts(props: any) {
  /* INITIALIZATION */
  const value = 5;
  const history = useHistory();
  const { setRecommendedProducts } = actionDispatch(useDispatch());
  const { recommendedProducts } = useSelector(recommendedProductsRetriever);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const [targetProductSearchObj, setTargetProductSearchObj] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 8,
      order: "product_views",
      // market_mb_id: market_id,
      // product_collection: "food",
    });
    
  useEffect(() => {
    const productServise = new ProductApiService();
    productServise
      .getTargetProducts({ order: "product_views", page: 1, limit: 8 })
      .then((data) => setRecommendedProducts(data))
      .catch((err) => console.log(err));
  }, [productRebuild]);

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

  return (
    <Container>
      <div className="product-container">
        <div className="container">
          <div className="product-box">
            <div
              className="product-main"
              style={{ margin: "0px 0px 30px 0px" }}
            >
              <h1 className="title title_sale">
                Recommended <span>products</span>
              </h1>

              <div className="product-grid">
                {recommendedProducts.map((ele: Product) => {
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
                                className="like_btn"
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
                                  ele?.me_liked && ele?.me_liked[0]?.my_favorite
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
                              value={value}
                              readOnly
                              precision={0.5}
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 0.55 }}
                                  fontSize="inherit"
                                />
                              }
                            />
                            <span>(0)</span>
                          </div>
                          <span className="product-title">
                            {ele.product_name}
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
  );
}
