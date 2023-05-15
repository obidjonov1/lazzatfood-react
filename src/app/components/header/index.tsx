import { Badge, IconButton } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsWhatsapp, BsFileEarmarkPerson } from "react-icons/bs";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoPersonOutline, IoCallOutline } from "react-icons/io5";
import { BiShoppingBag, BiChevronDown } from "react-icons/bi";
import { CssVarsProvider } from "@mui/joy/styles";
import Modal from "@mui/joy/Modal";
import { ModalClose, ModalDialog, Typography, Button, Sheet } from "@mui/joy";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const notify = () => {
  toast.info("Login via SNS will be launched soon!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export function NavbarHome(props: any) {
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
                  to={"/member-page"}
                  activeClassName="underline"
                  className="menu-title my_page"
                  onClick={props.setPath}
                >
                  <BsFileEarmarkPerson className="my-page_icon" />
                  My page
                </NavLink>
                <button
                  className="action-btn user-icon login-btn-action"
                  onClick={props.handleLoginOpen}
                >
                  <IoPersonOutline className="icon_pers" />
                  <p className="login-button">Login</p>
                </button>
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
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <img src="/images/slide.jpeg" alt="" className="slide_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide1.png" alt="" className="slide_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide3.jpeg" alt="" className="slide_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide5.jpeg" alt="" className="slide_img" />
          </SwiperSlide>
        </Swiper>
      </Container>
      {/* <!-- Banner end --> */}
    </div>
  );
}
