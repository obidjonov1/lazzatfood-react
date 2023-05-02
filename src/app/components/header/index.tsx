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
SwiperCore.use([Autoplay, Navigation, Pagination]);

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
      <Container>
        <div>
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
                  <b>Bepul yetkazib berish </b>
                  ₩50.000 dan boshlab
                </p>
              </div>
              <div className="header-top-actions">
                <select name="language">
                  <option value="uz">Uzbek</option>
                  <option value="ru">Russia</option>
                  <option value="kr">Korean</option>
                  <option value="en-US">English</option>
                </select>
              </div>
            </div>
          </div>
          <div className="header-main">
            <div className="container">
              <NavLink to={"/"} className="header-logo">
                <img className="logo" src="./images/logo_lazzat.png" alt="" />
              </NavLink>

              <div className="header-search-container">
                <input
                  type="search"
                  name="search"
                  className="search-field"
                  placeholder="Izlash, misol uchun kolbasa..."
                />
                <AiOutlineSearch className="search-btn" />
              </div>
              <div className="header-user-actions">
                <NavLink
                  to={"#"}
                  activeClassName="underline"
                  className="menu-title my_page"
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
                              <img src="./images/sigin.webp" alt="" />
                            </div>
                            <div className="form-box">
                              <h2 className="welcome">Xush kelibsiz !</h2>
                              <div className="top login-sigup">
                                <p>
                                  Aʼzo emasmisiz?
                                  <span
                                    onClick={() => handleClick("#ff0066")}
                                    data-id="#ff0066"
                                  >
                                    Roʻyxatdan oʻtish
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
                                  <p>Yoki davom eting</p>
                                  <div className="icons">
                                    <div className="icon">
                                      <img src="./images/search.svg" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="./images/facebook.png" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="./images/naver.png" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="./images/kakotalk.png" alt="" />
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
                                Welcome LazzatFood!
                              </h2>
                              <div className="top top-second">
                                <p>
                                  Allaqachon a'zomisiz?
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
                                  <div>
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      placeholder="Parolni tasdiqlang"
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
                                  <input
                                    type="Submit"
                                    value="Ro'yxatdan o'tish"
                                  />
                                </div>
                                <div className="form-control">
                                  <p>Yoki davom eting</p>
                                  <div className="icons">
                                    <div className="icon">
                                      <img src="./images/search.svg" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="./images/facebook.png" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="./images/naver.png" alt="" />
                                    </div>
                                    <div className="icon">
                                      <img src="./images/kakotalk.png" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="img-box">
                              <img src="./images/sign-up-form.svg" alt="" />
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
                  <a href="#" className="menu-title">
                    Kategoriyalar
                  </a>
                  <BiChevronDown />
                  <div className="dropdown-panel">
                    <ul className="dropdown-panel-list">
                      <li className="menu-title">
                        <a href="#">Elektr qurilmalar</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Uy jihozlari</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Oshxona buyumlar</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Avoto anjomlar</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Tibbiy uskunalar</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                            src="./images/electro.JPEG"
                            alt=""
                            width="250"
                            height="119"
                          />
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown-panel-list">
                      <li className="menu-title">
                        <a href="#">Go'zallik va Sog'lik</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Vitaminlar</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Dorilar</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Pardozlash anjomlari</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Koreya kosmetikasi</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                            src="./images/vitamin.JPEG"
                            alt=""
                            width="250"
                            height="119"
                          />
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown-panel-list">
                      <li className="menu-title">
                        <a href="#">Oila do'koni</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Qishki buyumlar</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Joynamozlar</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Bolalar uchun</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">Sport</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                            src="./images/familyItem.JPEG"
                            alt=""
                            width="250"
                            height="119"
                          />
                        </a>
                      </li>
                    </ul>
                    <ul className="dropdown-panel-list">
                      <li className="menu-title">
                        <a href="#">Halollik sertfikatlari</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="certificate.html">Go'sht</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="certificate.html">Kolbasa va Sasiska</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="certificate.html">Sut mahsulotlari</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="certificate.html">Kanserva mahsulotlari</a>
                      </li>
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                            src="./images/halalSer.JPEG"
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
                  <a href="#" className="menu-title">
                    Biz haqimizda
                  </a>
                  <BiChevronDown />
                  <ul className="dropdown-list">
                    <li className="dropdown-item">
                      <a href="#app">Yangiliklar</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#app">Bizning Ilova</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="./about-us.html">Karyera</a>
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
        </div>

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
            <img src="./images/slide.jpeg" alt="" className="slide_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/slide1.png" alt="" className="slide_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/slide3.jpeg" alt="" className="slide_img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/slide5.jpeg" alt="" className="slide_img" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
