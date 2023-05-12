import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Container, Stack } from "@mui/material";
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

const restaurant_list = Array.from(Array(10).keys());
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

export function OneMarket() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Container>
      <div className="chosenMarket">
        <div className="container">
          <div className="scroll-markets_bar">
            <h1>Lazzat Food Market</h1>
            <div className="scroll-markets_swipper">
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
                  {restaurant_list.map((ele, index) => {
                    return (
                      <SwiperSlide
                        style={{ cursor: "pointer", marginRight: "4px" }}
                        key={index}
                        className="restaurant_avatars"
                      >
                        <img src="../images/burak.jpeg" alt="" />
                        <span>Burak</span>
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
            </div>
          </div>

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
                                    <p className="menu-title">Text</p>
                                  </div>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <p>text</p>
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
                                    <p className="menu-title">Text</p>
                                  </div>
                                </AccordionSummary>

                                <AccordionDetails>
                                  <p>text</p>
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
                            <p className="showcase-badge">normal size</p>
                            <div className="showcase-actions">
                              <button className="btn-action">
                                <AiFillHeart className="like_btn" />
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
