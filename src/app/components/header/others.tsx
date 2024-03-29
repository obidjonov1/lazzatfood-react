import React, { useEffect, useState } from "react";
import { Box, Container, Menu, MenuItem, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { NavLink, useHistory } from "react-router-dom";
import { BsFacebook, BsTelegram, BsFileEarmarkPerson } from "react-icons/bs";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import { BiShoppingBag, BiChevronDown } from "react-icons/bi";
import Basket from "./basket";
import { verifiedMemberData } from "../../apiServices/verify";
import useDeviceDetect from "../../../lib/responsiveDetector";

export function NavbarOthers(props: any) {
  const history = useHistory<History>();
  const { isMobile } = useDeviceDetect();
  const handlePushConstruction = () => {
    history.push("/construction");
    props.setPath();
  };

  if (isMobile()) {
    return (
      <div className="format home-navbar">
        <div className="header_main">
          <Container>
            <div className="header-main">
              <div className="container">
                <NavLink
                  to={"/"}
                  className="header-logo"
                  onClick={props.setPath}
                >
                  <img className="logo" src="/images/logo1.png" alt="" />
                </NavLink>

                <div className="header-user-actions">
                  {!verifiedMemberData ? (
                    <Box>
                      <button
                        className="action-btn user-icon login-btn-action"
                        id="myBtn"
                        onClick={handlePushConstruction}
                      >
                        <PersonIcon className="icon_pers" />
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
                      src={verifiedMemberData.mb_image}
                      onClick={props.handleLogOutClick}
                    />
                  )}
                  {!verifiedMemberData ? (
                    <Box>
                      <button
                        className="action-btn user-icon login-btn-action"
                        id="myBtn"
                        onClick={handlePushConstruction}
                      >
                        <PersonAddIcon className="icon_pers" />
                        <p className="login-button">Sign Up</p>
                      </button>
                    </Box>
                  ) : null}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div className="format home-navbar">
        <div className="header_main">
          <Container>
            <div className="header-main">
              <div className="container">
                <NavLink
                  to={"/"}
                  className="header-logo"
                  onClick={props.setPath}
                >
                  <img className="logo" src="/images/logo1.png" alt="" />
                </NavLink>

                <Container sx={{ width: "auto" }}>
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
                          <BiChevronDown
                            style={{ color: "#fff", fontSize: "18px" }}
                          />
                          <div className="dropdown-panel">
                            <ul className="dropdown-panel-list">
                              <li className="menu-title">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Meat & Fish
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Beef
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Lamb
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Chicken & Duck
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Fish
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
                                  Food
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Sauces & Oils
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Cans & Jars
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Vegetables
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Rice & Noodles
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
                                  Ready to Eat
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Bread & Bakery
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Ramens
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Snacks
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink to={"/shop"} onClick={props.setPath}>
                                  Sweets & Desserts
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
                                <NavLink
                                  to={"/certificates"}
                                  onClick={props.setPath}
                                >
                                  Halal Certificates
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink
                                  to={"/certificates"}
                                  onClick={props.setPath}
                                >
                                  Salami and Sausage
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink
                                  to={"/certificates"}
                                  onClick={props.setPath}
                                >
                                  Meat
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink
                                  to={"/certificates"}
                                  onClick={props.setPath}
                                >
                                  Diary Products
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <NavLink
                                  to={"/certificates"}
                                  onClick={props.setPath}
                                >
                                  Other Products
                                </NavLink>
                              </li>
                              <li className="panel-list-item">
                                <a href="#">
                                  <img
                                    src="/images/halalSer.JPEG"
                                    alt=""
                                    width="250"
                                    height="119"
                                  />
                                </a>
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
                        {verifiedMemberData ? (
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
                          <BiChevronDown
                            style={{ color: "#fff", fontSize: "18px" }}
                          />
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

                <div className="header-user-actions">
                  {verifiedMemberData ? (
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

                  {!verifiedMemberData ? (
                    <Box>
                      <button
                        className="action-btn user-icon login-btn-action"
                        id="myBtn"
                        onClick={props.handleLoginOpen}
                      >
                        <PersonIcon className="icon_pers" />
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
                      src={verifiedMemberData.mb_image}
                      onClick={props.handleLogOutClick}
                    />
                  )}
                  {!verifiedMemberData ? (
                    <Box>
                      <button
                        className="action-btn user-icon login-btn-action"
                        id="myBtn"
                        onClick={props.handleSignUpOpen}
                      >
                        <PersonAddIcon className="icon_pers" />
                        <p className="login-button">Sign Up</p>
                      </button>
                    </Box>
                  ) : null}
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
                        onDeleteAll={props.onDeleteAll}
                      />
                    </button>
                  </Box>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
