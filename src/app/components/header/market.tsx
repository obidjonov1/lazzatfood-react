import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
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
import { ModalClose, Sheet } from "@mui/joy";
import Modal from "@mui/joy/Modal";

export function NavbarMarket(props: any) {
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
        </Container>
      </div>

      <div className="header_main">
        <Container>
          <div className="header-main">
            <div className="container">
              <NavLink to={"/"} className="header-logo" onClick={props.setPath}>
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
                <p className="menu-title">Kategoriyalar</p>
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
      <div className="banner_section">
        <img
          className="banner_section_img banner_anim"
          src="./images/backgraund3.png"
          alt=""
        />
        <img
          className="banner_section_img"
          src="./images/background2.png"
          alt=""
        />
      </div>
      {/* <!-- Banner end --> */}
    </div>
  );
}
