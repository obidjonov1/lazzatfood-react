import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BiShoppingBag } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTrendProducts } from "./slice";
import { Product } from "../../screens/types/product";
import ProductApiService from "../../apiServices/productApiSevice";
import { retrieveTrendProducts } from "./selector";
import { createSelector } from "reselect";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useDeviceDetect from "../../../lib/responsiveDetector";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  // from reduxToolkit sends actions to redux store
  setTrendProducts: (data: Product[]) => dispatch(setTrendProducts(data)),
});

/** REDUX SELECTOR */
const trendProductsRetriever = createSelector(
  retrieveTrendProducts,
  (trendProducts) => ({
    trendProducts,
  })
);

export function ActualProducts(props: any) {
  /* INITIALIZATIONS */
  const history = useHistory();
  const { setTrendProducts: setTrandProducts } = actionDispatch(useDispatch());
  const { trendProducts } = useSelector(trendProductsRetriever);

  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({
        order: "product_likes",
        page: 1,
        limit: 15,
      })
      .then((data) => setTrandProducts(data))
      .catch((err) => console.log(err));
  }, []);
  /* HANDLERS */
  // chosenDish
  const chosenDishHandler = (id: string) => {
    history.push(`/market/product/${id}`);
  };

  const { isMobile } = useDeviceDetect();
  const handlePushConstruction = () => {
    history.push("/construction");
  };

  if (isMobile()) {
    return null;
  } else {
    return (
      <Container>
        <h1
          // style={{ textAlign: "center" }}
          className="title title_sale title_title"
        >
          Popular <span>Products</span>
        </h1>
        <Swiper
          className={"products_wrapper"}
          slidesPerView={5}
          centeredSlides={false}
          spaceBetween={325}
          navigation={{
            nextEl: ".restaurant-next",
            prevEl: ".restaurant-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <div className="product-container">
            <div className="container">
              <div className="product-box actual_products">
                <div className="product-main">
                  <div className="aktual-products">
                    {trendProducts.map((ele: Product, index) => {
                      const image_path = `${serverApi}/${ele.product_images[0]}`;

                      return (
                        <SwiperSlide
                          style={{
                            cursor: "pointer",
                          }}
                          key={index}
                          className="products"
                        >
                          <div className="aktual-product meal">
                            <img
                              className="aktual-img"
                              src={image_path}
                              alt="mayanez"
                            />
                            <div className="aktual-body">
                              <p className="aktual-title">{ele.product_name}</p>
                              <h1 className="aktual-price">
                                ₩{ele.product_price.toLocaleString()}
                              </h1>
                            </div>
                            <div className="actual_cart">
                              <button className="actual-cart_btn">
                                <AiFillEye
                                  className="actual_view_btn"
                                  onClick={() => chosenDishHandler(ele._id)}
                                />
                                <BiShoppingBag
                                  className="actual_btn"
                                  onClick={(e) => {
                                    props.onAdd(ele);
                                    e.stopPropagation();
                                  }}
                                />
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </Container>
    );
  }
}
