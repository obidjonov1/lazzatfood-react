import React, { useEffect } from "react";
import { Container } from "@mui/system";
import { TopMarkets } from "./topMarkets";
import { BestMarkets } from "./bestMarkets";
import { ActualProducts } from "./actualProducts";
import { RecommendedProducts } from "./recommendedProducts";
import { RecommendedArticles } from "./recommendedArticles";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import "../../../css/home.css";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopMarkets } from "../../screens/HomePage/slice";
import {
  retrieveTopMarkets,
  retrieveBestMarkets,
} from "../../screens/HomePage/selector";
import { Market } from "../types/user";

/** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTopMarkets: (data: Market[]) => dispatch(setTopMarkets(data)),
});

/** REDUX SELECTOR */
const topMarketRetriever = createSelector(retrieveTopMarkets, (topMarkets) => ({
  topMarkets,
}));

// TODO: const bestMarketRetriever = createSelector(
//   retrieveBestMarkets,
//   (bestMarkets) => ({
//     bestMarkets,
//   })
// );

export function HomePage(props: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { setTopMarkets } = actionDispatch(useDispatch());
  const { topMarkets } = useSelector(topMarketRetriever);

  // selector : takes data from store
  console.log("topMarkets:::", topMarkets);
  // TODO: console.log("bestRestaurants:::", bestRestaurants);

  useEffect(() => {
    TODO: setTopMarkets([]);
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="home_page">
      <Container className="product-container_home">
        <div className="product-container_home">
          <div className="container_home">
            <div className="sidebar">
              <div className="sidebar-category">
                <div className="sidebar-top">
                  <h2 className="sidebar-title">Category</h2>
                </div>
                <ul className="sidebar-menu-category-list">
                  <li className="sidebar-menu-category">
                    <div className="sidebar-accordion-menu category_sidebar">
                      <div className="menu-title-flex">
                        <img
                          src="./images/icons/big-sale.png"
                          alt="clothes"
                          className="menu-title-img"
                        />
                        <NavLink className="menu-title" to={"/shop"}>
                          Big Sale %
                        </NavLink>
                      </div>
                    </div>
                  </li>

                  <li className="sidebar-menu-category">
                    <div className="sidebar-accordion-menu">
                      <div className="menu-title-flex">
                        <Accordion
                          className="category_accardion"
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <div className="menu-title-flex">
                              <img
                                src="./images/icons/proteins.png"
                                alt="footwear"
                                className="menu-title-img"
                              />
                              <p className="menu-title">Meat & Fish</p>
                            </div>
                          </AccordionSummary>

                          <AccordionDetails>
                            <ul className="sidebar-submenu-category-list">
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Beef (54)
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Lamb (24)
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Fish (12)
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Chicken & Duck (30)
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Sausages
                                  </NavLink>
                                </p>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </div>
                  </li>

                  <li className="sidebar-menu-category">
                    <div className="sidebar-accordion-menu">
                      <div className="menu-title-flex">
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <div className="menu-title-flex">
                              <img
                                src="./images/icons/grocery-bag.png"
                                alt="clothes"
                                className="menu-title-img"
                              />
                              <p className="menu-title">Food</p>
                            </div>
                          </AccordionSummary>

                          <AccordionDetails>
                            <ul className="sidebar-submenu-category-list">
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Sauces & Oils
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Cans & Jars
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Vegetables
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Rice & Noodles
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Dairy
                                  </NavLink>
                                </p>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </div>
                  </li>

                  <li className="sidebar-menu-category">
                    <div className="sidebar-accordion-menu">
                      <div className="menu-title-flex">
                        <Accordion
                          expanded={expanded === "panel3"}
                          onChange={handleChange("panel3")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <div className="menu-title-flex">
                              <img
                                src="./images/icons/lunch-box.png"
                                alt="perfume"
                                className="menu-title-img"
                              />

                              <p className="menu-title">Ready to Eat</p>
                            </div>
                          </AccordionSummary>

                          <AccordionDetails>
                            <ul className="sidebar-submenu-category-list">
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Bread & Bakery
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Ramens
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Snacks
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Sweets & Desserts
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Halal Meat Curry
                                  </NavLink>
                                </p>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </div>
                  </li>

                  <li className="sidebar-menu-category">
                    <div className="sidebar-accordion-menu">
                      <div className="menu-title-flex">
                        <Accordion
                          expanded={expanded === "panel4"}
                          onChange={handleChange("panel4")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <div className="menu-title-flex">
                              <img
                                src="./images/icons/soft-drink.png"
                                alt="cosmetics"
                                className="menu-title-img"
                              />
                              <p className="menu-title">Dinks</p>
                            </div>
                          </AccordionSummary>

                          <AccordionDetails>
                            <ul className="sidebar-submenu-category-list">
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Tea
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Juice
                                  </NavLink>
                                </p>
                              </li>
                              <li className="sidebar-submenu-category">
                                <p className="sidebar-submenu-title">
                                  <NavLink
                                    className="product-name"
                                    to={"/shop"}
                                  >
                                    Soda
                                  </NavLink>
                                </p>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </div>
                  </li>

                  <li className="sidebar-menu-category">
                    <div className="sidebar-accordion-menu category_sidebar">
                      <div className="menu-title-flex">
                        <img
                          src="./images/icons/harvest.png"
                          alt="glasses"
                          className="menu-title-img"
                        />
                        <NavLink className="menu-title" to={"/shop"}>
                          Fresh & Fast
                        </NavLink>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <TopMarkets />
      <BestMarkets />
      <ActualProducts />
      <RecommendedProducts />
      <RecommendedArticles />
    </div>
  );
}
