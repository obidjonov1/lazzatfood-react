import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Container, Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { AiFillEye, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BiShoppingBag } from "react-icons/bi";
import "../../../css/shop.css";

const product_list = Array.from(Array(8).keys());

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

export function ShopPage(props: any) {
  const value = 5;
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Container>
      <div className="chosenMarket shop_cont">
        <div className="container">
          <div className="products-container">
            <div className="product_container_box">
              <div className="product_search">
                <div className="product-search_box">
                  <input
                    className="product-search_input"
                    type="search"
                    name="search"
                    placeholder="Searching"
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
                                    <p className="menu-title">Sorting By</p>
                                  </div>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <RadioGroup
                                    className="accardion_det"
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="All"
                                    name="radio-buttons-group"
                                  >
                                    <FormControlLabel
                                      value="All"
                                      control={<Radio />}
                                      label="All"
                                    />
                                    <FormControlLabel
                                      value="Price"
                                      control={<Radio />}
                                      label="Price"
                                    />
                                    <FormControlLabel
                                      value="Likes"
                                      control={<Radio />}
                                      label="Likes"
                                    />
                                    <FormControlLabel
                                      value="Views"
                                      control={<Radio />}
                                      label="Views"
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
                                    <p className="menu-title">Food</p>
                                  </div>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <RadioGroup
                                    className="accardion_det"
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="All"
                                    name="radio-buttons-group"
                                  >
                                    <FormControlLabel
                                      value="meat"
                                      control={<Radio />}
                                      label="Meat"
                                    />
                                    <FormControlLabel
                                      value="drink"
                                      control={<Radio />}
                                      label="Drink"
                                    />
                                    <FormControlLabel
                                      value="food"
                                      control={<Radio />}
                                      label="Food"
                                    />
                                    <FormControlLabel
                                      value="fresh"
                                      control={<Radio />}
                                      label="Fresh & Fast"
                                    />
                                    <FormControlLabel
                                      value="ready"
                                      control={<Radio />}
                                      label="Ready to Eat"
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
                                    defaultValue="All"
                                    name="radio-buttons-group"
                                  >
                                    <FormControlLabel
                                      value="health"
                                      control={<Radio />}
                                      label="Beauty & Health"
                                    />
                                    <FormControlLabel
                                      value="texno"
                                      control={<Radio />}
                                      label="Texno"
                                    />
                                    <FormControlLabel
                                      value="family"
                                      control={<Radio />}
                                      label="Family shop"
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
                              <span className="which_market">LazzatFood</span>
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
                              <div className="product-cart_price_box">
                                <del className="prce_disc">₩50.000</del>
                                <span className="price">₩39.000</span>
                              </div>
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
                <div className="pagination">
                  <Pagination
                    count={3}
                    page={1}
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
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
