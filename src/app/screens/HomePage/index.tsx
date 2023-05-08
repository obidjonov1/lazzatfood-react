import React from "react";
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

import "../../../css/home.css";

export function HomePage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

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
                        <p className="menu-title">Big Sale %</p>
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
                              <p className="menu-title">Go'sht va Baliq</p>
                            </div>
                          </AccordionSummary>

                          <AccordionDetails>
                            <ul className="sidebar-submenu-category-list">
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Mol (45)</p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Qo'y (32)</p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Baliq (35)</p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Tovuq va O'rdak (20)
                                  </p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Ot (3)</p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Kolbasa mahsulotlari (20)
                                  </p>
                                </a>
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
                              <p className="menu-title">Oziq-ovqat</p>
                            </div>
                          </AccordionSummary>

                          <AccordionDetails>
                            <ul className="sidebar-submenu-category-list">
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Muzlatilgan mahsulotlar
                                  </p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Sous va Yog'lar
                                  </p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Guruch Va Ziravorlar
                                  </p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Konserva Mahsulotlar
                                  </p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Sut Mahsulotlar
                                  </p>
                                </a>
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

                              <p className="menu-title">Tayyor yeguliklar</p>
                            </div>
                          </AccordionSummary>

                          <AccordionDetails>
                            <ul className="sidebar-submenu-category-list">
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Non Va Pishiriqlar
                                  </p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Kabob Va Pitsa</p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Ramyonlar</p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Shirinlik Va Desertlar
                                  </p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Chaq-Chuqlar</p>
                                </a>
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
                              <p className="menu-title">Ichimliklar</p>
                            </div>
                          </AccordionSummary>

                          <AccordionDetails>
                            <ul className="sidebar-submenu-category-list">
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Choy</p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">Sharbat</p>
                                </a>
                              </li>
                              <li className="sidebar-submenu-category">
                                <a href="#" className="sidebar-submenu-title">
                                  <p className="product-name">
                                    Gazli Ichimliklar
                                  </p>
                                </a>
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
                        <p className="menu-title">Fresh & Fast</p>
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
