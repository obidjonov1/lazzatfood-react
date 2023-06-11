import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Container, Stack, Rating, Badge } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { AiFillEye, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiShoppingBag } from "react-icons/bi";
import { useHistory, useParams } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrieveRandomMarkets,
  retrieveChosenMarket,
  retrieveTargetProducts,
} from "../../screens/MarketPage/selector";
import { Market } from "../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setRandomMarkets,
  setChosenMarket,
  setTargetProducts,
} from "../../screens/MarketPage/slice";
import { Product } from "../types/product";
import { ProductSearchObj, SearchObj } from "../types/others";
import ProductApiService from "../../apiServices/productApiSevice";
import { serverApi } from "../../../lib/config";
import MarketApiService from "../../apiServices/marketApiService";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { verifiedMemberData } from "../../apiServices/verify";
import { Review } from "../types/review";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setRandomMarkets: (data: Market[]) => dispatch(setRandomMarkets(data)),
  setChosenMarket: (data: Market) => dispatch(setChosenMarket(data)),
  setTargetProducts: (data: Product[]) => dispatch(setTargetProducts(data)),
});

/** REDUX SELECTOR */
const randomMarketRetriver = createSelector(
  retrieveRandomMarkets,
  (randomMarkets) => ({
    randomMarkets,
  })
);
const chosenMarketRetriver = createSelector(
  retrieveChosenMarket,
  (chosenMarket) => ({
    chosenMarket,
  })
);
const targetProductsRetriver = createSelector(
  retrieveTargetProducts,
  (targetProducts) => ({
    targetProducts,
  })
);

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export function OneMarket(props: any) {
  /* INITIALIZATIONS */
  const refs: any = useRef([]);
  const history = useHistory();
  let { market_id } = useParams<{ market_id: string }>();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [searchTerm, setSearchTerm] = useState("");

  const { setRandomMarkets, setChosenMarket, setTargetProducts } =
    actionDispatch(useDispatch());
  const { randomMarkets } = useSelector(randomMarketRetriver);
  const { chosenMarket: chosenMarket } = useSelector(chosenMarketRetriver);
  const { targetProducts } = useSelector(targetProductsRetriver);
  const [chosenMarketId, setChosenMarketId] = useState<string>(market_id);
  const [targetProductSearchObj, setTargetProductSearchObj] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 8,
      order: "createdAt",
      market_mb_id: market_id,
      product_collection: "meat",
    });

  // const [targetSearchObject, setTargetSearchObject] = useState<SearchObj>({
  //   page: 1,
  //   limit: 8,
  //   order: "mb_point",
  // });

  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  useEffect(() => {
    // RandomMarket
    const marketService = new MarketApiService();
    marketService
      .getMarkets({ page: 1, limit: 10, order: "random" })
      .then((data) => setRandomMarkets(data))
      .catch((err) => console.log(err));

    // Chosen Market
    marketService
      .getChosenMarket(chosenMarketId)
      .then((data) => setChosenMarket(data))
      .catch((err) => console.log(err));

    // ChosenProduct
    const productService = new ProductApiService();
    productService
      .getTargetProducts(targetProductSearchObj)
      .then((data) => setTargetProducts(data))
      .catch((err) => console.log(err));
  }, [chosenMarketId, targetProductSearchObj, productRebuild]);

  /* HANDLERS */
  const chosenMarketHandler = (id: string) => {
    setChosenMarketId(id);
    targetProductSearchObj.market_mb_id = id;
    setTargetProductSearchObj({ ...targetProductSearchObj });
    history.push(`/market/${id}`);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  // Pagination handle
  const handlePaginationChange = (evenet: any, value: number) => {
    targetProductSearchObj.page = value;
    setTargetProductSearchObj({ ...targetProductSearchObj });
  };

  // sort
  const searchCollectionHandler = (collection: string) => {
    targetProductSearchObj.page = 1;
    targetProductSearchObj.product_collection = collection;
    setTargetProductSearchObj({ ...targetProductSearchObj });
  };
  const searchOrderHandler = (order: string) => {
    targetProductSearchObj.page = 1;
    targetProductSearchObj.order = order;
    setTargetProductSearchObj({ ...targetProductSearchObj });
  };

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = targetProducts.filter((val: Product) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });

  return (
    <Container>
      <div className="chosenMarket">
        <div className="container">
          <div className="scroll-markets_bar">
            <h1 style={{ textTransform: "capitalize" }}>
              {chosenMarket?.mb_nick} Market
            </h1>
            {/* <div className="scroll-markets_swipper">
              <Stack
                style={{ width: "100%", display: "flex" }}
                flexDirection={"row"}
                sx={{ mt: "35px" }}
              >
                <Box className="prev_btn restaurant-prev">
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: 40 }}
                    style={{ color: "#172b4d" }}
                  />
                </Box>
                <Swiper
                  className="restaurant_avatars_wrapper"
                  slidesPerView={7}
                  centeredSlides={false}
                  spaceBetween={30}
                  navigation={{
                    nextEl: ".restaurant-next",
                    prevEl: ".restaurant-prev",
                  }}
                >
                  {randomMarkets.map((ele: Market) => {
                    const image_path = `${serverApi}/${ele.mb_image}`;

                    return (
                      <SwiperSlide
                        style={{ cursor: "pointer", marginRight: "4px" }}
                        key={ele._id}
                        className="restaurant_avatars"
                        onClick={() => chosenMarketHandler(ele._id)}
                      >
                        <img src={image_path} alt="" />
                        <span style={{ textTransform: "capitalize" }}>
                          {ele.mb_nick}
                        </span>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Box
                  className="next_btn restaurant-next"
                  style={{ color: "#172b4d" }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                </Box>
              </Stack>
            </div> */}
          </div>

          <div className="products-container">
            <div className="product_container_box">
              <div className="product_search">
                <div className="product-search_box">
                  <input
                    className="product-search_input"
                    type="text"
                    name="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Searching..."
                  />
                  <button className="product-search_btn">
                    <AiOutlineSearch className="search_btn" />
                  </button>
                </div>
              </div>
              {/* <!-- SIDEBAR  --> */}
              <div className="product-container_home_box">
                <div className="container_home">
                  <div className="sidebar_box">
                    <div className="sidebar-category_box">
                      <ul className="sidebar-menu-category-list">
                        <li className="sidebar-menu-category">
                          <div className="sidebar-accordion-menu_box">
                            <div className="menu-title-flex">
                              <Accordion
                                sx={{
                                  borderTopRightRadius: "10px",
                                  borderTopLeftRadius: "10px",
                                }}
                                className="category_accardion"
                                expanded={expanded === "panel1"}
                                onChange={handleChange("panel1")}
                              >
                                <AccordionSummary
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                >
                                  <div className="menu-title-flex">
                                    <p className="menu-title">Food</p>
                                  </div>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <RadioGroup
                                    className="accardion_det"
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="meat"
                                    name="radio-buttons-group"
                                  >
                                    <FormControlLabel
                                      value="meat"
                                      control={<Radio />}
                                      label="Meat"
                                      onClick={() =>
                                        searchCollectionHandler("meat")
                                      }
                                    />
                                    <FormControlLabel
                                      value="drink"
                                      control={<Radio />}
                                      label="Drink"
                                      onClick={() =>
                                        searchCollectionHandler("drink")
                                      }
                                    />
                                    <FormControlLabel
                                      value="food"
                                      control={<Radio />}
                                      label="Food"
                                      onClick={() =>
                                        searchCollectionHandler("food")
                                      }
                                    />
                                    <FormControlLabel
                                      value="fresh"
                                      control={<Radio />}
                                      label="Fresh & Fast"
                                      onClick={() =>
                                        searchCollectionHandler("fresh")
                                      }
                                    />
                                    <FormControlLabel
                                      value="ready"
                                      control={<Radio />}
                                      label="Ready to Eat"
                                      onClick={() =>
                                        searchCollectionHandler("readyToEat")
                                      }
                                    />
                                  </RadioGroup>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          </div>
                        </li>
                        <li className="sidebar-menu-category">
                          <div className="sidebar-accordion-menu_box">
                            <div className="menu-title-flex">
                              <Accordion
                                className="category_accardion"
                                expanded={expanded === "panel2"}
                                onChange={handleChange("panel2")}
                              >
                                <AccordionSummary
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                >
                                  <div className="menu-title-flex">
                                    <p className="menu-title">Sorting By</p>
                                  </div>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <RadioGroup
                                    className="accardion_det"
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="new"
                                    name="radio-buttons-group"
                                  >
                                    <FormControlLabel
                                      value="new"
                                      control={<Radio />}
                                      label="New"
                                      onClick={() =>
                                        searchOrderHandler("createdAt")
                                      }
                                    />
                                    <FormControlLabel
                                      value="Price"
                                      control={<Radio />}
                                      label="Price"
                                      onClick={() =>
                                        searchOrderHandler("product_price")
                                      }
                                    />
                                    <FormControlLabel
                                      value="Likes"
                                      control={<Radio />}
                                      label="Likes"
                                      onClick={() =>
                                        searchOrderHandler("product_likes")
                                      }
                                    />
                                    <FormControlLabel
                                      value="Views"
                                      control={<Radio />}
                                      label="Views"
                                      onClick={() =>
                                        searchOrderHandler("product_views")
                                      }
                                    />
                                  </RadioGroup>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          </div>
                        </li>

                        <li className="sidebar-menu-category">
                          <div className="sidebar-accordion-menu_box">
                            <div className="menu-title-flex">
                              <Accordion
                                sx={{
                                  borderBottomRightRadius: "10px",
                                  borderBottomLeftRadius: "10px",
                                }}
                                className="category_accardion"
                                expanded={expanded === "panel3"}
                                onChange={handleChange("panel3")}
                              >
                                <AccordionSummary
                                  aria-controls="panel1d-content"
                                  id="panel1d-header"
                                >
                                  <div className="menu-title-flex">
                                    <p className="menu-title">Collection</p>
                                  </div>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <RadioGroup
                                    className="accardion_det"
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="health"
                                    name="radio-buttons-group"
                                  >
                                    <FormControlLabel
                                      value="health"
                                      control={<Radio />}
                                      label="Beauty & Health"
                                      onClick={() =>
                                        searchCollectionHandler("parfumerie")
                                      }
                                    />
                                    <FormControlLabel
                                      value="texno"
                                      control={<Radio />}
                                      label="Texno"
                                      onClick={() =>
                                        searchCollectionHandler("texno")
                                      }
                                    />
                                    <FormControlLabel
                                      value="family"
                                      control={<Radio />}
                                      label="Family shop"
                                      onClick={() =>
                                        searchCollectionHandler("family")
                                      }
                                    />
                                  </RadioGroup>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-box">
                <div className="product-main_box">
                  <div className="product-grid product-grid_shop">
                    {filteredProducts.map((ele: Product) => {
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
                              <span className="which_market"></span>
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
            <div className="product_pagination">
              <div></div>
              <div></div>
              <Pagination
                count={
                  targetProductSearchObj.page >= 3
                    ? targetProductSearchObj.page + 1
                    : 3
                }
                page={targetProductSearchObj.page}
                renderItem={(item) => (
                  <PaginationItem
                    components={{
                      previous: ArrowBackIcon,
                      next: ArrowForwardIcon,
                    }}
                    {...item}
                    color="standard"
                    sx={{ color: "#424242" }}
                  />
                )}
                onChange={handlePaginationChange}
              />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
