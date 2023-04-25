import { Badge, IconButton } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FacebookOutlined,
  Instagram,
  Telegram,
  YouTube,
  Search,
  Call,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { CssVarsProvider } from "@mui/joy/styles";
import "../../../css/home.css";
import Modal from "@mui/joy/Modal";
import { ModalClose, ModalDialog, Typography, Button, Sheet } from "@mui/joy";

export function NavbarHome(props: any) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className="format home-navbar">
      <Container>
        <Stack flexDirection={"row"} className="header-top">
          <Box className="header-social-container">
            <FacebookOutlined className="social-link" />
            <YouTube className="social-link" />
            <Instagram className="social-link" />
            <Telegram className="social-link" />
          </Box>
          <Box className="header-alert-news">
            <p>
              <b>Bepul yetkazib berish</b>
              50.000₩ dan boshlab
            </p>
          </Box>
          <Box className="header-top-actions">
            <select defaultValue="uz" className="language">
              <option value="uz">Uzbek</option>
              <option value="ru">Russia</option>
              <option value="kr">Korean</option>
              <option value="en-US">English</option>
            </select>
          </Box>
        </Stack>
        <Stack className="header-main" flexDirection={"row"}>
          <Box>
            <NavLink to={"/"} className="header-logo">
              <img className="logo" src="./images/logo_lazzat.png" alt="" />
            </NavLink>
          </Box>
          <Box className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Izlash, misol uchun kolbasa..."
            />
            <Search className="search-btn" />
          </Box>
          <Box className="header-user-actions">
            <NavLink to={"/help"} className="help">
              <IconButton>
                <Call className="action-btn" />
                Yordam
              </IconButton>
            </NavLink>
          </Box>
          <Box>
            <CssVarsProvider>
              <button
                className="login-btn-action"
                onClick={() => setOpen(true)}
              >
                <PersonOutlineOutlined className="ion-icon" />
                <p className="login-button">Login</p>
              </button>
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
                  <Stack className="user-form">
                    <Box className="form-wrapper login-container">
                      <Box className="user login">
                        <Box className="img-box">
                          <img src="/login/sigin.webp" alt="" />
                        </Box>
                        <Box className="form-box">
                          <h2 className="welcome">Xush kelibsiz !</h2>
                          <Box className="top login-sigup">
                            <p>
                              Aʼzo emasmisiz?
                              <span data-id="#ff0066">Roʻyxatdan oʻtish</span>
                            </p>
                          </Box>
                          <form action="#">
                            <Box className="form-control">
                              <input type="text" placeholder="Login" />
                              <Box>
                                <input type="password" placeholder="Parol" />
                                <Box className="icon form-icon">
                                  <img src="./images/eye.svg" alt="" />
                                </Box>
                              </Box>
                              <input type="submit" value="Kirish" />
                            </Box>
                            <Box className="form-control">
                              <p>Yoki davom eting</p>
                              <Box className="icons">
                                <Box className="icon">
                                  <img src="./login/search.svg" alt="" />
                                </Box>
                                <Box className="icon">
                                  <img src="./login/facebook.png" alt="" />
                                </Box>
                                <Box className="icon">
                                  <img src="./login/naver.png" alt="" />
                                </Box>
                                <Box className="icon">
                                  <img src="./login/kakotalk.png" alt="" />
                                </Box>
                              </Box>
                            </Box>
                          </form>
                        </Box>
                      </Box>
                      {/* register */}
                      <div className="user signup">
                        <div className="form-box">
                          <h2 className="welcome-second">
                            Welcome LazzatFood!
                          </h2>
                          <div className="top top-second">
                            <p>
                              Allaqachon a'zomisiz?
                              <span data-id="#1a1aff">Login</span>
                            </p>
                          </div>
                          <form action="#" className="form-second">
                            <div className="form-control">
                              <input type="text" placeholder="Login" />
                              <div>
                                <input type="password" placeholder="Parol" />
                                <div className="icon form-icon">
                                  <img src="./images/eye.svg" alt="" />
                                </div>
                              </div>
                              <div>
                                <input
                                  type="password"
                                  placeholder="Parolni tasdiqlang"
                                />
                                <div className="icon form-icon">
                                  <img src="./images/eye.svg" alt="" />
                                </div>
                              </div>
                              <input type="Submit" value="Ro'yxatdan o'tish" />
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
                    </Box>
                  </Stack>
                </Sheet>
              </Modal>
            </CssVarsProvider>
          </Box>
          <Box></Box>
        </Stack>
      </Container>
    </div>
  );
}
