import React, { useEffect, useState } from "react";
import { Box, Container, Menu, MenuItem, ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsWhatsapp, BsFileEarmarkPerson } from "react-icons/bs";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BiShoppingBag, BiChevronDown } from "react-icons/bi";
import { Logout } from "@mui/icons-material";
import Basket from "./basket";

export function NavbarMarket(props: any) {
  return (
    <div className="format home-navbar">
      <div className="header_top">
        <Container>
          <div className="header-top">
            <div className="container">
              <ul className="header-social-container">
                <li>
                  <NavLink to={"#"} className="social-link">
                    <BsFacebook />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"#"} className="social-link">
                    <AiFillYoutube />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"#"} className="social-link">
                    <AiOutlineInstagram />
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"#"} className="social-link">
                    <BsWhatsapp />
                  </NavLink>
                </li>
              </ul>
              <div className="header-alert-news">
                <p>
                  <b>Free delivery </b>
                  from ₩99.000
                </p>
              </div>
              <div className="header-top-actions">
                <select name="language">
                  <option value="en-US">Eng</option>
                  <option value="uz">Uzb</option>
                  <option value="ru">Rus</option>
                  <option value="kr">Kor</option>
                </select>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="header_main">
        <Container>
          <div className="header-main">
            <div className="container">
              <NavLink to={"/"} className="header-logo" onClick={props.setPath}>
                <img className="logo" src="/images/logo_lazzat.png" alt="" />
              </NavLink>

              <div className="header-search-container">
                <input
                  type="search"
                  name="search"
                  className="search-field"
                  placeholder="Search ..."
                />
                <AiOutlineSearch className="search-btn" />
              </div>
              <div className="header-user-actions">
                {props.verifiedMemberData ? (
                  <Box>
                    <NavLink
                      to={"/member-page"}
                      activeClassName="underline"
                      className="menu-title my_page"
                      onClick={props.setPath}
                    >
                      <BsFileEarmarkPerson className="my-page_icon" />
                      My page
                    </NavLink>
                  </Box>
                ) : null}

                {!props.verifiedMemberData ? (
                  <Box>
                    <button
                      className="action-btn user-icon login-btn-action"
                      id="myBtn"
                      onClick={props.handleLoginOpen}
                    >
                      <IoPersonOutline className="icon_pers" />
                      <p className="login-button">Login</p>
                    </button>
                  </Box>
                ) : (
                  <img
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "24px",
                    }}
                    alt=""
                    src={props.verifiedMemberData.mb_image}
                    onClick={props.handleLogOutClick}
                  />
                )}

                <Menu
                  anchorEl={props.anchorEl}
                  open={props.open}
                  onClose={props.handleCloseLogOut}
                  onClick={props.handleCloseLogOut}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={props.handleLogOutRequest}>
                    <ListItemIcon>
                      <Logout fontSize="small" style={{ color: "blue" }} />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
                <Box>
                  <button className="action-btn shoppingbag">
                    <Basket
                      cartItems={props.cartItems}
                      onAdd={props.onAdd}
                      onRemove={props.onRemove}
                      onDelete={props.onDelete}
                    />
                  </button>
                </Box>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category" onClick={props.setPath}>
                <NavLink
                  to={"/"}
                  activeClassName="underline"
                  className="menu-title"
                >
                  Home
                </NavLink>
              </li>
              <li className="menu-category" onClick={props.setPath}>
                <NavLink className="menu-title" to={"/shop"}>
                  Shop
                </NavLink>
                <BiChevronDown />
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Texno
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Home appliances
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Kitchen appliances
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Auto appliances
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Medical appliances
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        <img
                          src="/images/electro.JPEG"
                          alt=""
                          width="250"
                          height="119"
                        />
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Beauty & Health
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Vitamins
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Styling Accessories
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Korean Cosmetics
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Medical Equipment
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        <img
                          src="/images/vitamin.JPEG"
                          alt=""
                          width="250"
                          height="119"
                        />
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Family Shop
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Winter items
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Prayer Mats
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Kids
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        Sport
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/shop"} onClick={props.setPath}>
                        <img
                          src="/images/familyItem.JPEG"
                          alt=""
                          width="250"
                          height="119"
                        />
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <NavLink to={"/certificates"} onClick={props.setPath}>
                        Halal Certificates
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/certificates"} onClick={props.setPath}>
                        Salami and Sausage
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/certificates"} onClick={props.setPath}>
                        Meat
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/certificates"} onClick={props.setPath}>
                        Diary Products
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/certificates"} onClick={props.setPath}>
                        Other Products
                      </NavLink>
                    </li>
                    <li className="panel-list-item">
                      <NavLink to={"/certificates"} onClick={props.setPath}>
                        <img
                          src="/images/halalSer.JPEG"
                          alt=""
                          width="250"
                          height="119"
                        />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-category" onClick={props.setPath}>
                <NavLink
                  to={"/market"}
                  activeClassName="underline"
                  className="menu-title"
                >
                  Markets
                </NavLink>
              </li>
              {props.verifiedMemberData ? (
                <li className="menu-category" onClick={props.setPath}>
                  <NavLink
                    to={"/orders"}
                    activeClassName="underline"
                    className="menu-title"
                  >
                    Order
                  </NavLink>
                </li>
              ) : null}
              <li className="menu-category" onClick={props.setPath}>
                <NavLink
                  to={"/community"}
                  activeClassName="underline"
                  className="menu-title"
                >
                  Community
                </NavLink>
              </li>

              <li className="menu-category" onClick={props.setPath}>
                <p className="menu-title">About Us</p>
                <BiChevronDown />
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <NavLink to={"/news"} onClick={props.setPath}>
                      News
                    </NavLink>
                  </li>
                  <li className="dropdown-item">
                    <NavLink to={"/about-us"} onClick={props.setPath}>
                      About us
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu-category" onClick={props.setPath}>
                <NavLink
                  to={"/help"}
                  activeClassName="underline"
                  className="menu-title"
                >
                  Help
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Container>

      {/* <!-- Banner --> */}
      {/* <div className="banner_section">
        <img
          className="banner_section_img banner_anim"
          src="/images/backgraund3.png"
          alt=""
        />
        <img
          className="banner_section_img"
          src="/images/background2.png"
          alt=""
        />
      </div> */}
      {/* <!-- Banner end --> */}
    </div>
  );
}
