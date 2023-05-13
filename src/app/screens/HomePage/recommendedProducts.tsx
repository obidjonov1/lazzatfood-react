import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Container, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const product_list = Array.from(Array(8).keys());

export function RecommendedProducts(props: any) {
  const value = 5;

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
                {product_list.map((ele, index) => {
                  const size_volume = "normal size";

                  return (
                    <div className="showcase">
                      <div className="showcase-banner">
                        <p className="showcase-badge">{size_volume}</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <span className="product_view_cnt">9</span>
                            <AiFillHeart className="like_btn" />
                            <span className="product_like_cnt">1</span>
                            <AiFillEye className="view_btn" />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <div className="price-box">
                          <img
                            src="../images/food2.jpeg"
                            alt="Mens Winter Leathers Jackets"
                            width="300"
                            className="product-img rasim"
                          />
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
                            <span>(5)</span>
                          </div>
                          <span className="product-title">
                            Lorem, ipsum dolor sit
                          </span>
                          <p className="price">$48.00</p>
                          <button className="cart-mobile" type="button">
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
