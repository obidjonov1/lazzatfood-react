import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { ToastContainer, toast } from "react-toastify";

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

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

export default function AuthenticationModal(props: any) {
  /** INITIALIZATIONS */
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();
  let mb_nick: string = "",
    mb_phone: number = 0,
    mb_password: string = "";

  /** HANDLERS */
  const handleUsername = (e: any) => {
    mb_nick = e.target.value;
  };
  const handlePhone = (e: any) => {
    mb_phone = e.target.value;
  };
  const handlePassword = (e: any) => {
    mb_password = e.target.value;
  };

  const handleSignupRequest = async () => {
    try {
      const is_fulfilled = mb_nick !== "" && mb_password !== "" && mb_phone !== 0;
      assert.ok(is_fulfilled, Definer.input_err1);

      const signup_data = {
        mb_nick: mb_nick,
        mb_phone: mb_phone,
        mb_password: mb_password,
      };

      const memberApiService = new MemberApiService();
      await memberApiService.signupRequest(signup_data);

      props.handleSignUpClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
      props.handleSignUpClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const is_fulfilled = mb_nick !== "" && mb_password !== "";
      assert.ok(is_fulfilled, Definer.input_err1);

      const login_data = {
        mb_nick: mb_nick,
        mb_password: mb_password,
      };

      const memberApiService = new MemberApiService();
      await memberApiService.loginRequest(login_data);

      props.handleLoginClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
      props.handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

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
    <div>
      {/*@ts-ignore*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.loginOpen}
        onClose={props.handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.loginOpen}>
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
                      <input
                        type="text"
                        placeholder="Login"
                        onChange={handleUsername}
                      />
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          onChange={handlePassword}
                        />
                        <div
                          className="icon form-icon"
                          onClick={togglePassword}
                        >
                          <img
                            src={
                              showPassword
                                ? "/images/hide.svg"
                                : "/images/eye.svg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        onClick={handleLoginRequest}
                      />
                    </div>
                    <div className="form-control">
                      <p>Continue with</p>
                      <div className="icons">
                        <div className="icon" onClick={notify}>
                          <img src="/images/search.svg" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/facebook.png" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/naver.png" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/kakotalk.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <ToastContainer />
              </div>

              <div className="user signup">
                <div className="form-box">
                  <h2 className="welcome-second">Welcome to LazzatFood!</h2>
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
                      <input
                        type="text"
                        placeholder="Login"
                        onChange={handleUsername}
                      />
                      <div>
                        <input
                          type="number"
                          placeholder="Phone number"
                          onChange={handlePhone}
                        />
                      </div>
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          onChange={handlePassword}
                        />
                        <div
                          className="icon form-icon"
                          onClick={togglePassword}
                        >
                          <img
                            src={
                              showPassword
                                ? "/images/hide.svg"
                                : "/images/eye.svg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <input
                        type="Submit"
                        value="Sign Up"
                        onClick={handleSignupRequest}
                      />
                    </div>
                    <div className="form-control">
                      <p>Continue with</p>
                      <div className="icons">
                        <div className="icon" onClick={notify}>
                          <img src="/images/search.svg" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/facebook.png" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
                          <img src="/images/naver.png" alt="" />
                        </div>
                        <div className="icon" onClick={notify}>
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
          {/* <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "700px" }}
          >
            <Stack
              sx={{
                marginLeft: "65px",
                marginTop: "25px",
                alignItems: "center",
              }}
            >
              <h2>Login Form</h2>
              <TextField
                onChange={handleUsername}
                id="outlined-basic"
                label="username"
                variant="outlined"
                sx={{ my: "10px" }}
              />
              <TextField
                onChange={handlePassword}
                id="outlined-basic"
                label="password"
                variant="outlined"
              />
              <Fab
                onClick={handleLoginRequest}
                sx={{ marginTop: "27px", width: "120px" }}
                variant="extended"
                color="primary"
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
            </Stack>
          </Stack> */}
        </Fade>
      </Modal>
    </div>
  );
}
