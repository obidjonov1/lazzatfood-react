import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsWhatsapp, BsFileEarmarkPerson } from "react-icons/bs";
import {
  AiFillHome,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiShoppingBag, BiChevronDown } from "react-icons/bi";
import { CssVarsProvider } from "@mui/joy/styles";
import { ModalClose, Sheet } from "@mui/joy";
import Modal from "@mui/joy/Modal";

export function NavbarOthers(props: any) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = (color: string) => {
    setIsActive(!isActive);
    (document.querySelector(":root") as HTMLElement).style.setProperty(
      "--custom",
      color
    );
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Login logic here
  };

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
                  <option value="ru">Ru</option>
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
                <NavLink
                  to={"member-page"}
                  activeClassName="underline"
                  className="menu-title my_page"
                  onClick={props.setPath}
                >
                  <BsFileEarmarkPerson className="my-page_icon" />
                  My page
                </NavLink>
                {/* <NavLink className="user-link" to={"#"}></NavLink> */}
                <CssVarsProvider>
                  <button
                    className="action-btn user-icon login-btn-action"
                    // id="myBtn"
                    onClick={() => setOpen(true)}
                  >
                    <IoPersonOutline className="icon_pers" />
                    <p className="login-button">Login</p>
                  </button>
                  {/* <!-- login  --> */}
                  <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Sheet
                      sx={{
                        borderRadius: "md",
                      }}
                    >
                      <ModalClose
                        sx={{
                          top: "1px",
                          right: "1px",
                          borderRadius: "50%",
                          zIndex: 1000,
                        }}
                      />
                      <div className="user-form">
                        <div
                          className={`form-wrapper login-container ${
                            isActive ? "active" : ""
                          }`}
                        >
                          <div className="user login">
                            <div className="img-box">
                              <img src="/images/sigin.webp" alt="" />
                            </div>
                            <div className="form-box">
                              <h2 className="welcome">Welcome !</h2>
                              <div className="top login-sigup">
                                <p>
                                  Not a member ?
                                  <span
                                    onClick={() => handleClick("#ff0066")}
                                    data-id="#ff0066"
                                  >
                                    Sign Up
                                  </span>
                                </p>
                              </div>
                              <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                  <input type="text" placeholder="Login" />
                                  <div>
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Parol"
                                    />
                                    <div
                                      className="icon form-icon"
                                      onClick={togglePassword}
                                    >
                                      <img
                                        src={
                                          showPassword
                                            ? "./images/hide.svg"
                                            : "./images/eye.svg"
                                        }
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <input type="submit" value="Kirish" />
                                </div>
                                <div className="form-control">
                                  <p>Continue with</p>
                                  <div className="icons">
                                    <div className="icon">
                                      <img src="/images/search.svg" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="/images/facebook.png" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="/images/naver.png" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="/images/kakotalk.png" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>

                          {/* <!-- Register --> */}
                          <div className="user signup">
                            <div className="form-box">
                              <h2 className="welcome-second">
                                Welcome to LazzatFood!
                              </h2>
                              <div className="top top-second">
                                <p>
                                  Already registered ?
                                  <span
                                    onClick={() => handleClick("#1a1aff")}
                                    data-id="#1a1aff"
                                  >
                                    Login
                                  </span>
                                </p>
                              </div>
                              <form action="#" className="form-second">
                                <div className="form-control">
                                  <input type="text" placeholder="Login" />
                                  <div>
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Password"
                                    />
                                    <div
                                      className="icon form-icon"
                                      onClick={togglePassword}
                                    >
                                      <img
                                        src={
                                          showPassword
                                            ? "./images/hide.svg"
                                            : "./images/eye.svg"
                                        }
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Confirm Password"
                                    />
                                    <div
                                      className="icon form-icon"
                                      onClick={togglePassword}
                                    >
                                      <img
                                        src={
                                          showPassword
                                            ? "./images/hide.svg"
                                            : "./images/eye.svg"
                                        }
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <input type="Submit" value="Sign Up" />
                                </div>
                                <div className="form-control">
                                  <p>Continue with</p>
                                  <div className="icons">
                                    <div className="icon">
                                      <img src="/images/search.svg" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="/images/facebook.png" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="/images/naver.png" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="/images/kakotalk.png" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="img-box">
                              <img src="/images/sign-up-form.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- login end --> */}
                    </Sheet>
                  </Modal>
                </CssVarsProvider>
                <button className="action-btn shoppingbag">
                  <BiShoppingBag />
                </button>
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
                  to={"/markets"}
                  activeClassName="underline"
                  className="menu-title"
                >
                  Markets
                </NavLink>
              </li>
              <li className="menu-category" onClick={props.setPath}>
                <NavLink
                  to={"/orders"}
                  activeClassName="underline"
                  className="menu-title"
                >
                  Order
                </NavLink>
              </li>
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
      <div className="banner-container">
        <div className="banner-content">
          {/* <h2 className="which_page">News Page</h2> */}
          <ul className="pages">
            <li onClick={props.setPath}>
              <NavLink
                to={"/"}
                className="pages-first"
                activeClassName="underline"
              >
                <AiFillHome className="home-icon" />
                Home
              </NavLink>
            </li>
            <MdOutlineKeyboardArrowRight className="page_arrow" />
            <li>
              <p>This Page</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Banner end --> */}
    </div>
  );
}
